// local-mobile.js
(function () {
  const body = document.body;
  if (!body || body.dataset.page !== "realizar") return;

  const mq = window.matchMedia("(max-width: 640px)");
  const header = document.querySelector(".main-header");

  function setMobileFlag() {
    body.classList.toggle("is-mobile", mq.matches);
  }

  function updateHeaderVar() {
    if (!header) return;
    body.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  function onResize() {
    setMobileFlag();
    updateHeaderVar();
  }

  // init
  onResize();

  // eventos
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("orientationchange", onResize, { passive: true });
  mq.addEventListener?.("change", onResize);
})();
