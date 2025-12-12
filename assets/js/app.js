(() => {
  console.log("BA-OS loaded");

  const mount = document.getElementById("topbar");
  if (!mount) return;

  fetch("/bozart-army-web/assets/partials/topbar.html", { cache: "no-cache" })
    .then(r => r.text())
    .then(html => mount.innerHTML = html)
    .catch(() => console.warn("Topbar failed"));
})();
