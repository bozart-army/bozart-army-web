(async () => {
  console.log("BA-OS loaded");

  const mount = document.createElement("div");
  document.body.prepend(mount);

  try {
    const res = await fetch("/assets/partials/nav.html");
    mount.innerHTML = await res.text();
  } catch (e) {
    console.warn("Nav failed to load");
  }
})();
