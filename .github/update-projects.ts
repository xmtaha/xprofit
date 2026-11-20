#!/usr/bin/env node
// gh repo list -> projects.json (site verisinin tek kaynağı)
// Elle dokunma: "bun --bun .github/update-projects.ts" ya da GitHub Action çalıştırır.
import { execFileSync } from "node:child_process";
import { writeFileSync, readFileSync } from "node:fs";

const DESC_PATH = ".github/descriptions.json";
const OUT_PATH = "projects.json";

let descriptions = {};
try {
  descriptions = JSON.parse(readFileSync(DESC_PATH, "utf8"));
} catch {}

const repos = JSON.parse(
  execFileSync(
    "gh",
    ["repo", "list", "xmtaha", "--limit", "1000", "--json",
     "name,description,url,primaryLanguage,stargazerCount,forkCount,isFork,isArchived,pushedAt"],
    { encoding: "utf8" }
  )
);

const projects = repos
  .filter((r) => !r.isArchived)
  .map((r) => ({
    name: r.name,
    desc: (descriptions[r.name] ?? r.description ?? "").trim(),
    lang: r.primaryLanguage?.name ?? "Diğer",
    stars: r.stargazerCount,
    forks: r.forkCount,
    fork: r.isFork,
    updated: r.pushedAt.slice(0, 10),
    url: r.url,
  }))
  .sort((a, b) => b.updated.localeCompare(a.updated));

writeFileSync(OUT_PATH, JSON.stringify(projects, null, 2) + "\n");
console.log(`${OUT_PATH}: ${projects.length} repo`);
