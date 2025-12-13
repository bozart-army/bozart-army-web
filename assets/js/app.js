(async () => {
  console.log("BA-OS loaded");

  const host = document.getElementById("topbar");
  if (!host) {
    console.warn("No #topbar mount found on this page.");
    return;
  }

  // Base-Pfad für GitHub Pages (Project Pages): /bozart-army-web
  // Wenn du das Repo irgendwann anders nennst, musst du nur HIER ändern.
  const BASE = "/bozart-army-web";

  try {
    const res = await fetch(`${BASE}/assets/partials/nav.html`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    host.innerHTML = await res.text();
  } catch (e) {
    console.warn("Nav failed to load:", e);
  }
})();
