/* =========================================================
   DeepSeek peak saati — Türkiye yerel saatine göre canlı durum
   Kural (resmi): peak = hafta içi Pekin (UTC+8) 09:00–12:00 ve 14:00–18:00
                  = 01:00–04:00 ve 06:00–10:00 UTC
   Hafta sonu ve Çin resmi tatilleri tamamen off-peak.
   ========================================================= */

const PEAK_UTC_RANGES = [
  [1, 4], // 01:00–04:00 UTC
  [6, 10], // 06:00–10:00 UTC
];

// Çin resmi tatilleri (YYYY-MM-DD, Pekin günü). Yılbaşı 1 Oca, İşçi Bayramı 1–5 May,
// Güz Şenliği 1–7 Eki ve Bahar Şenliği (Ay takviminden dinamik) her yıl aynı.
// Yalnızca istisnai yıllar buraya eklenir; yeni yıl gelince resmi takvime göre
// PEAK_UTC_RANGES'i değil bu listeyi güncelle.
const CN_HOLIDAYS = new Set([
  "2026-01-01", "2026-01-02", "2026-01-03",
  "2026-05-01", "2026-05-02", "2026-05-03", "2026-05-04", "2026-05-05",
  "2026-06-19", "2026-09-25",
  "2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04", "2026-10-05", "2026-10-06", "2026-10-07",
]);

const HOUR = 3600 * 1000;

const beijingDay = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const beijingWeekday = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Shanghai",
  weekday: "short",
});
const beijingDate = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  month: "long",
  day: "numeric",
});
const trTime = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const turkishOffset = (date) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Istanbul", timeZoneName: "shortOffset" })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName").value;

const dayKey = (date) => beijingDay.format(date); // 2026-11-20
const isWeekend = (date) => {
  const wd = beijingWeekday.format(date);
  return wd === "Sat" || wd === "Sun";
};
const isHoliday = (date) => CN_HOLIDAYS.has(dayKey(date));

/* Bahar Şenliği (Çin Yeni Yılı) 1. günü ICU ay takviminden bulunur,
   sonra 1–7 gün tatil sayılır. Tayvan/sürüm tutarsızlığı için
   bulunamazsa sessizce atlanır (o gün normal peak gibi görünür). */
let lNYCache = null;
const lunarNY = (year) => {
  if (lNYCache && lNYCache.year === year) return lNYCache.days;
  const days = new Set();
  try {
    const fmt = new Intl.DateTimeFormat("en-u-ca-chinese", {
      timeZone: "Asia/Shanghai",
      month: "long",
      day: "numeric",
    });
    for (let d = Date.UTC(year, 0, 15); d < Date.UTC(year, 1, 20); d += 24 * HOUR) {
      if (/First Month 1$/i.test(fmt.format(new Date(d)))) {
        for (let k = 0; k < 7; k += 1) {
          days.add(new Date(d + k * 24 * HOUR).toISOString().slice(0, 10));
        }
        break;
      }
    }
  } catch {
    /* ICU yok: atla */
  }
  lNYCache = { year, days };
  return days;
};

const isOffPeakDay = (date) =>
  isWeekend(date) || isHoliday(date) || lunarNY(new Date(date).getUTCFullYear()).has(dayKey(date));

/* Verilen an için { peak, end } döner: peak ise bitiş anı, değilse
   sonraki peak'in başlangıç anı. Yalnızca en fazla 8 gün ileri bakar. */
const peakWindow = (now) => {
  const t = now.getTime();
  for (let i = 0; i < 8 * 24; i += 1) {
    const probe = new Date(t + i * HOUR);
    const hour = probe.getUTCHours();
    const hit = PEAK_UTC_RANGES.find(([from, to]) => hour >= from && hour < to);
    if (!hit) continue;
    if (isOffPeakDay(probe)) continue;
    const start = Date.UTC(probe.getUTCFullYear(), probe.getUTCMonth(), probe.getUTCDate(), hit[0]);
    const end = start + (hit[1] - hit[0]) * HOUR;
    if (t < end) return { start, end };
  }
  return null;
};

const pad = (n) => String(n).padStart(2, "0");
const hms = (ms) => {
  const total = Math.max(0, Math.round(ms / 1000));
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;
};

const $ = (id) => document.getElementById(id);

const render = () => {
  const now = new Date();
  const win = peakWindow(now);
  const peak = Boolean(win && now.getTime() >= win.start);
  const target = win ? (peak ? win.end : win.start) : null;
  const left = target ? target - now.getTime() : 0;

  $("ds-card").dataset.state = peak ? "peak" : "off";
  $("ds-status-text").textContent = peak ? "Şu an PEAK" : "Şu an OFF-PEAK";
  $("ds-main").textContent = !target
    ? "Geçiş bilgisi bulunamadı"
    : peak
      ? `Peak saat ${trTime.format(target)}'te bitiyor`
      : `Sonraki peak ${trTime.format(target)}'te başlıyor`;
  $("ds-countdown").textContent = hms(left);
  $("ds-countdown-label").textContent = peak ? "peak bitimine kalan" : "peak başlangıcına kalan";
  $("ds-next-label").textContent = peak ? "Bitiş" : "Başlangıç";
  $("ds-tr-time").textContent = trTime.format(now);
  $("ds-tz-offset").textContent = `Pekin UTC+8 · Türkiye ${turkishOffset(now)} (Türkiye saatiyle peak yok)`;
  $("ds-next-switch").textContent = target ? `${trTime.format(target)} — Pekin ${beijingDate.format(target)}` : "—";
};

if (typeof document !== "undefined") {
  render();
  window.setInterval(render, 1000);
  document.getElementById("year").textContent = String(new Date().getFullYear());
}

/* node'da test için: require("./deepseek.js") */
if (typeof module !== "undefined") {
  module.exports = { peakWindow, isOffPeakDay, dayKey, hms };
}