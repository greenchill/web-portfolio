// The content and links work without JavaScript. Everything here is an enhancement.
const nav = document.querySelector("#primary-nav");
const toggle = document.querySelector(".nav-toggle");
const mobile = window.matchMedia("(max-width: 640px)");

if (nav && toggle) {
  document.documentElement.classList.add("nav-enhanced");
  toggle.hidden = false;

  function setMenu(open, returnFocus = false) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector("span").textContent = open ? "Close" : "Menu";
    nav.classList.toggle("is-open", open);
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true"),
  );
  nav.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !mobile.matches) return;
    setMenu(false);
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener(
        "blur",
        () => target.removeAttribute("tabindex"),
        { once: true },
      );
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    )
      setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (mobile.matches && !event.target.closest(".site-header")) setMenu(false);
  });
  mobile.addEventListener("change", () => {
    const focused = document.activeElement;
    setMenu(false, mobile.matches && nav.contains(focused));
    if (!mobile.matches && focused === toggle) nav.querySelector("a").focus();
  });
}

if ("IntersectionObserver" in window && nav) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        nav.querySelectorAll("a").forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );
  document
    .querySelectorAll("main > section[id]")
    .forEach((section) => observer.observe(section));
}
document.querySelector("#year").textContent = String(new Date().getFullYear());
