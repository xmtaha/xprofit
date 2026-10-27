/* =========================================================
   xmtaha — profil sayfası etkileşimleri
   ========================================================= */

const projects = [
  {
    name: "pixel-limit-bypass",
    desc: "Pixeldrain indirme limitlerini birden fazla proxy seçeneği ve dil desteğiyle aşar.",
    lang: "JavaScript",
    stars: 6,
    forks: 0,
    fork: false,
    updated: "2026-10-12",
    url: "https://github.com/xmtaha/pixel-limit-bypass",
  },
  {
    name: "python-smoothie",
    desc: "Birden fazla internet bağlantısını birleştirerek ağ hızını artıran basit bondlama aracı.",
    lang: "Python",
    stars: 1,
    forks: 0,
    fork: false,
    updated: "2026-10-25",
    url: "https://github.com/xmtaha/python-smoothie",
  },
  {
    name: "uindex-qbt-search",
    desc: "qBittorrent için Uindex arama eklentisi. Torrent aramalarını doğrudan istemciye taşır.",
    lang: "Python",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2026-10-23",
    url: "https://github.com/xmtaha/uindex-qbt-search",
  },
  {
    name: "nzb-checker-ui",
    desc: "NZB dosyalarını Usenet üzerinden denetleyen, Docker uyumlu web paneli. SSE ile canlı ilerleme ve rol bazlı yetkilendirme.",
    lang: "HTML",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2026-06-01",
    url: "https://github.com/xmtaha/nzb-checker-ui",
  },
  {
    name: "nzbchecker",
    desc: "NZB dosyalarını Usenet sunucusunda kontrol eden ve eksik parçalara göre sınıflandıran Python scripti.",
    lang: "Python",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2026-01-02",
    url: "https://github.com/xmtaha/nzbchecker",
  },
  {
    name: "SwiftMux",
    desc: "Video ses kanallarını AAC'ye dönüştürüp MKV olarak birleştiren PyQt6 masaüstü uygulaması.",
    lang: "Python",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2026-01-21",
    url: "https://github.com/xmtaha/SwiftMux",
  },
  {
    name: "auto-watermark",
    desc: "ffmpeg kullanarak videolara otomatik watermark ekler.",
    lang: "Python",
    stars: 1,
    forks: 0,
    fork: false,
    updated: "2025-10-11",
    url: "https://github.com/xmtaha/auto-watermark",
  },
  {
    name: "google-photos-exif-editor",
    desc: "Google Photos'tan indirilen fotoğrafların EXIF verilerini düzenlemek için masaüstü GUI.",
    lang: "Python",
    stars: 1,
    forks: 0,
    fork: false,
    updated: "2026-06-16",
    url: "https://github.com/xmtaha/google-photos-exif-editor",
  },
  {
    name: "predb-turk",
    desc: "BLURAY scene sürümlerini PreDB.net API'siyle takip eden Türkçe web arayüzü. NFO görüntüleme ve otomatik yenileme.",
    lang: "HTML",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2025-11-25",
    url: "https://github.com/xmtaha/predb-turk",
  },
  {
    name: "gofile-bulk-downloader",
    desc: "Gofile bağlantılarındaki tüm dosyaları tek tek tıklamadan otomatik indirir.",
    lang: "JavaScript",
    stars: 0,
    forks: 1,
    fork: false,
    updated: "2025-10-11",
    url: "https://github.com/xmtaha/gofile-bulk-downloader",
  },
  {
    name: "FitGirl-Automatic-Download-Assistant",
    desc: "FitGirl Repacks için fuckingfast.co indirme linklerini otomatik yönetir.",
    lang: "JavaScript",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2025-10-06",
    url: "https://github.com/xmtaha/FitGirl-Automatic-Download-Assistant",
  },
  {
    name: "fileguard-gofile-downloader",
    desc: "skidrowcodex üzerindeki fileguard gofile linklerini otomatik indirir.",
    lang: "JavaScript",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2025-10-06",
    url: "https://github.com/xmtaha/fileguard-gofile-downloader",
  },
  {
    name: "zapret-fedora-selinux",
    desc: "keift/zapret fork'u. DPI engellerini tek adımda aşmak için Fedora ve SELinux düzenlemeleri.",
    lang: "Shell",
    stars: 0,
    forks: 0,
    fork: true,
    updated: "2026-06-14",
    url: "https://github.com/xmtaha/zapret-fedora-selinux",
  },
  {
    name: "my-fedora-zsh-automation",
    desc: "Fedora kurulumu sonrası zsh ortamını hazırlayan kişisel otomasyon scriptleri.",
    lang: "Shell",
    stars: 0,
    forks: 0,
    fork: false,
    updated: "2026-06-08",
    url: "https://github.com/xmtaha/my-fedora-zsh-automation",
  },
  {
    name: "tsukimi",
    desc: "tsukinaha/tsukimi fork'u. Linux için sade, üçüncü taraf Jellyfin istemcisi.",
    lang: "Rust",
    stars: 0,
    forks: 0,
    fork: true,
    updated: "2026-07-18",
    url: "https://github.com/xmtaha/tsukimi",
  },
  {
    name: "postie",
    desc: "kipsilabs/postie fork'u. NZB dosyalarını Usenet'e yükleyen Go aracı.",
    lang: "Go",
    stars: 0,
    forks: 0,
    fork: true,
    updated: "2026-09-05",
    url: "https://github.com/xmtaha/postie",
  },
  {
    name: "network-smoothie",
    desc: "SethStalley/network-smoothie fork'u. Birden fazla ağ adaptörünü kullanarak internet bondlama.",
    lang: "CSS",
    stars: 0,
    forks: 0,
    fork: true,
    updated: "2026-10-17",
    url: "https://github.com/xmtaha/network-smoothie",
  },
];

const LANG_COLORS = {
  Python: "#4b8bbe",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  Shell: "#89e051",
  Go: "#00add8",
  Rust: "#dea584",
  CSS: "#a78bfa",
};

const langCounts = projects.reduce((acc, project) => {
  acc[project.lang] = (acc[project.lang] || 0) + 1;
  return acc;
}, {});

const sortedLangs = Object.entries(langCounts).sort(
  (a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "tr")
);

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char];
  });

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  month: "short",
  year: "numeric",
});

const formatDate = (iso) => dateFormatter.format(new Date(`${iso}T12:00:00Z`));

/* ---------- GitHub projelerini listele ---------- */

const grid = document.getElementById("project-grid");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("project-search");
const countEl = document.getElementById("project-count");
const emptyState = document.getElementById("empty-state");
const clearFiltersBtn = document.getElementById("clear-filters");
const resultsLine = document.getElementById("results-line");
const langBars = document.getElementById("lang-bars");

const cardEntries = [];

const buildCard = (project) => {
  const article = document.createElement("article");
  article.className = "project";
  article.dataset.lang = project.lang.toLowerCase();

  const stars = project.stars
    ? `<span class="meta-item" title="${project.stars} yıldız">
         <svg class="icon icon-fill" aria-hidden="true"><use href="#i-star"></use></svg>${project.stars}
       </span>`
    : "";

  const forks = project.forks
    ? `<span class="meta-item" title="${project.forks} fork">
         <svg class="icon" aria-hidden="true"><use href="#i-fork"></use></svg>${project.forks}
       </span>`
    : "";

  article.innerHTML = `
    <div class="project-top">
      <span class="folder" aria-hidden="true"><svg class="icon"><use href="#i-folder"></use></svg></span>
      <span class="card-arrow" aria-hidden="true"><svg class="icon"><use href="#i-arrow"></use></svg></span>
    </div>
    <h3><a href="${project.url}" target="_blank" rel="noopener">${escapeHtml(project.name)}</a></h3>
    <p>${escapeHtml(project.desc)}</p>
    <div class="project-meta">
      <span class="lang"><span class="lang-dot" style="--dot:${LANG_COLORS[project.lang] || "#2dd4bf"}"></span>${project.lang}</span>
      ${stars}
      ${forks}
      ${project.fork ? '<span class="tag-fork">fork</span>' : ""}
      <span class="meta-item meta-date" title="Son güncelleme: ${formatDate(project.updated)}">
        <svg class="icon" aria-hidden="true"><use href="#i-clock"></use></svg>${formatDate(project.updated)}
      </span>
    </div>
  `;

  grid.appendChild(article);
  cardEntries.push({ el: article, project });
};

projects.forEach(buildCard);

/* ---------- Filtre butonları ---------- */

const makeFilterButton = (value, label, count, color) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter";
  button.dataset.filter = value;
  button.setAttribute("aria-pressed", value === "all" ? "true" : "false");
  button.innerHTML = `
    ${color ? `<span class="lang-dot" style="--dot:${color}" aria-hidden="true"></span>` : ""}
    ${escapeHtml(label)}
    <span class="filter-count">${count}</span>
  `;
  return button;
};

filtersEl.appendChild(makeFilterButton("all", "Tümü", projects.length));
sortedLangs.forEach(([lang, count]) => {
  filtersEl.appendChild(
    makeFilterButton(lang, lang, count, LANG_COLORS[lang] || "#2dd4bf")
  );
});

/* ---------- Arama + filtreleme ---------- */

const state = { lang: "all", query: "" };

const applyFilters = () => {
  let visible = 0;

  cardEntries.forEach(({ el, project }) => {
    const langMatch = state.lang === "all" || project.lang === state.lang;
    const haystack = `${project.name} ${project.desc} ${project.lang}`.toLocaleLowerCase("tr");
    const queryMatch = !state.query || haystack.includes(state.query);
    const show = langMatch && queryMatch;

    el.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });

  countEl.textContent = String(visible);
  emptyState.hidden = visible !== 0;
  resultsLine.classList.toggle("is-empty", visible === 0);

  filtersEl.querySelectorAll(".filter").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === state.lang));
  });
};

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;

  state.lang = button.dataset.filter;
  applyFilters();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim().toLocaleLowerCase("tr");
  applyFilters();
});

clearFiltersBtn.addEventListener("click", () => {
  state.lang = "all";
  state.query = "";
  searchInput.value = "";
  applyFilters();
  searchInput.focus();
});

/* ---------- Dil dağılımı ---------- */

langBars.setAttribute("role", "list");

sortedLangs.forEach(([lang, count]) => {
  const percent = ((count / projects.length) * 100).toFixed(1);
  const color = LANG_COLORS[lang] || "#2dd4bf";
  const row = document.createElement("div");
  row.className = "lang-row";
  row.setAttribute("role", "listitem");
  row.setAttribute("aria-label", `${lang}: ${count} repo`);
  row.innerHTML = `
    <span class="lang-name"><span class="lang-dot" style="--dot:${color}" aria-hidden="true"></span>${lang}</span>
    <span class="lang-track"><span class="lang-fill" style="--dot:${color};--w:${percent}%"></span></span>
    <span class="lang-count">${count}</span>
  `;
  langBars.appendChild(row);
});

/* ---------- Görünür olunca animasyon ---------- */

const revealTargets = document.querySelectorAll(".reveal, .project");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("in"));
}

/* ---------- Mobil menü ---------- */

const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
};

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target)) setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) setMenu(false);
});

/* ---------- Header, yukarı çık ve scrollspy ---------- */

const header = document.getElementById("site-header");
const toTop = document.getElementById("to-top");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
  toTop.classList.toggle("is-visible", window.scrollY > 600);
};

onScroll();
window.addEventListener(
  "scroll",
  () => {
    window.requestAnimationFrame(onScroll);
  },
  { passive: true }
);

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
});

const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

if ("IntersectionObserver" in window && sections.length) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === id;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-42% 0px -52% 0px" }
  );

  sections.forEach((section) => spyObserver.observe(section));
}

/* ---------- İstanbul saati ve yıl ---------- */

const timeFormatter = new Intl.DateTimeFormat("tr-TR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Istanbul",
});

const updateClocks = () => {
  const now = new Date();
  const formatted = timeFormatter.format(now);
  document.querySelectorAll(".local-time").forEach((node) => {
    node.textContent = formatted;
    node.setAttribute("datetime", now.toISOString());
  });
};

updateClocks();
window.setInterval(updateClocks, 30000);

document.getElementById("year").textContent = String(new Date().getFullYear());

/* ---------- Başlangıç durumu ---------- */

applyFilters();
