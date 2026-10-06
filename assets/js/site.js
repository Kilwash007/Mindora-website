/* =========================================================
   Mindora marketing site — shared behaviour
   Edit CONFIG below; every page reads from it.
   ========================================================= */

const CONFIG = {
  // Portals — staging links for now; switch to mindora.africa subdomains later
  patientPortalUrl: "https://mindora-staging-app.onrender.com/",
  patientSignupUrl: "https://mindora-staging-app.onrender.com/",
  professionalPortalUrl: "https://mindora-staging-pro.onrender.com/",
  professionalJoinUrl: "https://mindora-staging-pro.onrender.com/",

  // Contact form delivery (FormSubmit — no backend needed)
  contactRecipient: "linda.kilwanda@mindora.africa",

  // Contact details shown in the footer and contact page
  phone: "+254 715 090 771",
  phoneHref: "tel:+254715090771",
  emails: ["info@mindora.africa", "kilwanda.josh@mindora.africa"],
  address: ["Waiyaki Real Gardens", "Nairobi, Kenya"],

  // Social links — paste the URLs when ready; empty = shown as "coming soon"
  social: {
    linkedin: "",
    tiktok: "",
    instagram: "",
  },

  // Channels that are not live yet
  whatsappLive: false,
  ussdLive: false,
};

/* ---------- Icons ---------- */
const ICONS = {
  logo: `<img src="assets/images/logo-mark.png" alt="" class="h-9 w-auto" width="316" height="178">`,
  chevron: `<svg viewBox="0 0 20 20" aria-hidden="true" class="h-4 w-4"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H9z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5"><path fill="currentColor" d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.2c-1.4.1-2.7-.3-3.9-1v6.1c0 3.9-3.3 6.4-6.8 5.6-4.3-1-5.5-6.6-2.2-9.2 1.2-.9 2.6-1.3 4.1-1.1v3.3c-.4-.1-.8-.2-1.2-.1-1.5.2-2.4 1.6-2 3 .4 1.6 2.4 2.3 3.7 1.3.6-.5.9-1.2.9-2V3h3.5z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5"><path fill="currentColor" d="M12 7.3A4.7 4.7 0 1012 16.7 4.7 4.7 0 0012 7.3zm0 7.7a3 3 0 110-6 3 3 0 010 6zm6-7.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM21 8.1c0-1.6-.4-3-1.6-4.1C18.3 2.8 16.9 2.5 15.3 2.4c-1.6-.1-5.1-.1-6.6 0-1.6.1-3 .4-4.1 1.6C3.4 5.1 3.1 6.5 3 8.1c-.1 1.6-.1 6.3 0 7.8.1 1.6.4 3 1.6 4.1 1.1 1.2 2.5 1.5 4.1 1.6 1.6.1 5.1.1 6.6 0 1.6-.1 3-.4 4.1-1.6 1.2-1.1 1.5-2.5 1.6-4.1.1-1.6.1-6.2 0-7.8zm-2 9.5a2.8 2.8 0 01-1.6 1.6c-1.1.4-3.7.3-5 .3s-3.9.1-5-.3a2.8 2.8 0 01-1.6-1.6c-.4-1.1-.3-3.7-.3-5s-.1-3.9.3-5A2.8 2.8 0 017.4 5.9c1.1-.4 3.7-.3 5-.3s3.9-.1 5 .3a2.8 2.8 0 011.6 1.6c.4 1.1.3 3.7.3 5s.1 3.9-.3 5z"/></svg>`,
};

/* ---------- Navigation data ---------- */
const NAV = [
  {
    label: "For individuals",
    href: "services.html",
    children: [
      ["Individual therapy", "services.html#individual"],
      ["Couples & family", "services.html#couples-family"],
      ["Group therapy", "services.html#group"],
      ["Teen & youth", "services.html#teen-youth"],
    ],
  },
  {
    label: "For organizations",
    href: "organizations.html",
    children: [
      ["Employee assistance", "organizations.html#employee-assistance"],
      ["Wellness workshops", "organizations.html#workshops"],
      ["Manager training", "organizations.html#manager-training"],
    ],
  },
  { label: "How it works", href: "how-it-works.html" },
  { label: "About", href: "about.html" },
  { label: "Resources", href: "resources.html" },
];

const currentPage = location.pathname.split("/").pop() || "index.html";

/* ---------- Header ---------- */
function renderHeader() {
  const el = document.querySelector('[data-include="header"]');
  if (!el) return;

  const desktopItems = NAV.map((item, i) => {
    const active = currentPage === item.href ? "text-pine" : "text-ink/80";
    if (!item.children) {
      return `<li><a href="${item.href}" class="px-3 py-2 rounded-md hover:text-pine ${active}">${item.label}</a></li>`;
    }
    const links = item.children
      .map(([t, h]) => `<li><a href="${h}" class="block rounded-md px-3 py-2 hover:bg-mist">${t}</a></li>`)
      .join("");
    return `
      <li class="relative" data-menu>
        <button type="button" class="flex items-center gap-1 px-3 py-2 rounded-md hover:text-pine ${active}"
          aria-expanded="false" aria-controls="menu-${i}">${item.label}${ICONS.chevron}</button>
        <div id="menu-${i}" class="menu-panel absolute left-0 top-full mt-2 w-60 rounded-xl bg-white p-2 text-sm" hidden>
          <ul>${links}</ul>
          <a href="${item.href}" class="mt-1 block border-t border-sage/40 px-3 pt-3 pb-2 text-pine font-medium">See all</a>
        </div>
      </li>`;
  }).join("");

  const mobileItems = NAV.map((item) => {
    const kids = item.children
      ? `<ul class="mt-1 mb-3 ml-3 border-l border-sage/50 pl-3 text-ink/75">${item.children
          .map(([t, h]) => `<li><a href="${h}" class="block py-1.5">${t}</a></li>`)
          .join("")}</ul>`
      : "";
    return `<li><a href="${item.href}" class="block py-2 text-lg font-display">${item.label}</a>${kids}</li>`;
  }).join("");

  el.innerHTML = `
  <a href="#main" class="skip-link">Skip to content</a>
  <header class="sticky top-0 z-50 border-b border-sage/30 bg-mist/90 backdrop-blur">
    <div class="mx-auto flex max-w-site items-center justify-between px-5 py-3 lg:px-8">
      <a href="index.html" class="flex items-center gap-2.5" aria-label="Mindora home">
        ${ICONS.logo}<span class="font-display text-2xl font-bold tracking-tight text-pine">Mindora</span>
      </a>

      <nav aria-label="Main" class="hidden lg:block">
        <ul class="flex items-center text-[0.95rem]">${desktopItems}</ul>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <div class="relative" data-menu>
          <button type="button" class="flex items-center gap-1 rounded-full px-4 py-2 text-ink/80 hover:text-pine"
            aria-expanded="false" aria-controls="menu-signin">Sign in${ICONS.chevron}</button>
          <div id="menu-signin" class="menu-panel absolute right-0 top-full mt-2 w-64 rounded-xl bg-white p-2 text-sm" hidden>
            <a href="${CONFIG.patientPortalUrl}" class="block rounded-md px-3 py-2.5 hover:bg-mist">
              <span class="block font-medium text-ink">Patient portal</span>
              <span class="text-ink/60">Book, message and check in</span>
            </a>
            <a href="${CONFIG.professionalPortalUrl}" class="block rounded-md px-3 py-2.5 hover:bg-mist">
              <span class="block font-medium text-ink">Professional portal</span>
              <span class="text-ink/60">Manage clients and sessions</span>
            </a>
          </div>
        </div>
        <a href="contact.html" class="rounded-full bg-pine px-5 py-2.5 text-white hover:bg-ink">Get in touch</a>
      </div>

      <button type="button" class="rounded-md p-2 text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-nav" data-mobile-toggle>
        <span class="sr-only">Open menu</span>${ICONS.menu}
      </button>
    </div>

    <div id="mobile-nav" class="border-t border-sage/30 bg-mist px-5 pb-8 pt-4 lg:hidden" hidden>
      <ul>${mobileItems}</ul>
      <div class="mt-4 grid gap-2">
        <a href="${CONFIG.patientPortalUrl}" class="rounded-full border border-pine px-5 py-3 text-center text-pine">Patient sign in</a>
        <a href="${CONFIG.professionalPortalUrl}" class="rounded-full border border-pine px-5 py-3 text-center text-pine">Professional sign in</a>
        <a href="contact.html" class="rounded-full bg-pine px-5 py-3 text-center text-white">Get in touch</a>
      </div>
    </div>
  </header>`;
}

/* ---------- Footer ---------- */
function socialLinks(extraClass = "") {
  return Object.entries({ linkedin: "LinkedIn", tiktok: "TikTok", instagram: "Instagram" })
    .map(([key, name]) => {
      const url = CONFIG.social[key];
      const attrs = url
        ? `href="${url}" target="_blank" rel="noopener" aria-label="Mindora on ${name}"`
        : `href="#" aria-disabled="true" data-soon aria-label="${name} — link coming soon" title="Coming soon"`;
      return `<a ${attrs} class="grid h-10 w-10 place-items-center rounded-full border border-white/25 hover:bg-white/10 ${extraClass}">${ICONS[key]}</a>`;
    })
    .join("");
}

function renderFooter() {
  const el = document.querySelector('[data-include="footer"]');
  if (!el) return;
  const col = (title, links) => `
    <div>
      <h2 class="font-display text-lg text-white">${title}</h2>
      <ul class="mt-3 space-y-2 text-white/70">${links.map(([t, h]) => `<li><a href="${h}" class="hover:text-white">${t}</a></li>`).join("")}</ul>
    </div>`;

  el.innerHTML = `
  <footer class="bg-ink text-white">
    <div class="mx-auto max-w-site px-5 py-16 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <a href="index.html" class="inline-block" aria-label="Mindora home"><img src="assets/images/logo-full-white.png" alt="Mindora" class="h-20 w-auto" width="316" height="238"></a>
          <p class="mt-4 font-display text-lg font-bold text-amber">Mental health before crisis.</p>
          <p class="mt-2 max-w-xs text-white/70">Calm, supportive care for your mental well-being.</p>
          <p class="mt-6"><a href="${CONFIG.phoneHref}" class="hover:underline">${CONFIG.phone}</a></p>
          <p class="mt-1 text-white/80">${CONFIG.emails.map((e) => `<a href="mailto:${e}" class="hover:underline">${e}</a>`).join("<br>")}</p>
          <p class="mt-3 text-white/60">${CONFIG.address.join("<br>")}</p>
          <div class="mt-6 flex gap-3">${socialLinks()}</div>
        </div>
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          ${col("Care", NAV[0].children)}
          ${col("Organizations", NAV[1].children)}
          ${col("Mindora", [["About", "about.html"], ["How it works", "how-it-works.html"], ["Get started", "get-started.html"], ["Contact", "contact.html"]])}
          ${col("Support", [["Crisis resources", "resources.html"], ["Patient portal", CONFIG.patientPortalUrl], ["Professional portal", CONFIG.professionalPortalUrl]])}
        </div>
      </div>

      <div class="mt-14 rounded-2xl border border-white/15 p-5 text-sm text-white/80">
        In immediate danger or crisis? Call <a href="tel:999" class="font-semibold text-white underline">999 or 112</a>,
        or the Kenya Red Cross on <a href="tel:1199" class="font-semibold text-white underline">1199</a> — free, 24 hours.
        Mindora is not an emergency service.
      </div>

      <div class="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
        <p>© <span data-year></span> Mindora. All rights reserved.</p>
        <p>Mindora is not an emergency service.</p>
      </div>
    </div>
  </footer>`;
}

/* ---------- Menus (desktop dropdowns + mobile) ---------- */
function initMenus() {
  const menus = document.querySelectorAll("[data-menu]");
  const closeAll = (except) =>
    menus.forEach((m) => {
      if (m === except) return;
      m.querySelector("button").setAttribute("aria-expanded", "false");
      m.querySelector(".menu-panel").hidden = true;
    });

  menus.forEach((m) => {
    const btn = m.querySelector("button");
    const panel = m.querySelector(".menu-panel");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = btn.getAttribute("aria-expanded") === "true";
      closeAll(m);
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });
  document.addEventListener("click", () => closeAll());
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeAll());

  const toggle = document.querySelector("[data-mobile-toggle]");
  const mobile = document.getElementById("mobile-nav");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobile.hidden = open;
      toggle.innerHTML = `<span class="sr-only">${open ? "Open" : "Close"} menu</span>${open ? ICONS.menu : ICONS.close}`;
    });
  }

  document.querySelectorAll("[data-soon]").forEach((a) =>
    a.addEventListener("click", (e) => e.preventDefault())
  );
}

/* ---------- Portal links anywhere on the page ---------- */
function wirePortalLinks() {
  const map = {
    "patient-portal": CONFIG.patientPortalUrl,
    "patient-signup": CONFIG.patientSignupUrl,
    "pro-portal": CONFIG.professionalPortalUrl,
    "pro-join": CONFIG.professionalJoinUrl,
  };
  document.querySelectorAll("[data-link]").forEach((a) => {
    const url = map[a.dataset.link];
    if (url) a.href = url;
  });
  document.querySelectorAll("[data-social]").forEach((wrap) => (wrap.innerHTML = socialLinks()));
}

/* ---------- Photo fallback ---------- */
function initPhotos() {
  document.querySelectorAll(".photo img").forEach((img) => {
    const miss = () => img.classList.add("is-missing");
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener("error", miss);
  });
}

/* ---------- Breathing ring ---------- */
function initBreath() {
  const el = document.querySelector("[data-breath]");
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let out = false;
  setInterval(() => {
    out = !out;
    el.classList.toggle("is-out", out);
  }, 5000);
}

/* ---------- Steps tabs ---------- */
function initSteps() {
  const root = document.querySelector("[data-steps]");
  if (!root) return;
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const panels = [...root.querySelectorAll('[role="tabpanel"]')];

  const select = (i, focus) => {
    tabs.forEach((t, j) => {
      t.setAttribute("aria-selected", String(i === j));
      t.tabIndex = i === j ? 0 : -1;
    });
    panels.forEach((p, j) => (p.hidden = i !== j));
    if (focus) tabs[i].focus();
  };

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(i));
    t.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") select((i + 1) % tabs.length, true);
      if (e.key === "ArrowLeft") select((i - 1 + tabs.length) % tabs.length, true);
    });
  });
  select(0);
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  // Prefill topic from ?topic=organization etc.
  const topic = new URLSearchParams(location.search).get("topic");
  if (topic && form.topic) {
    const opt = [...form.topic.options].find((o) => o.value === topic);
    if (opt) form.topic.value = topic;
  }

  const status = form.querySelector("[data-status]");
  const button = form.querySelector('button[type="submit"]');
  const show = (msg, ok) => {
    status.textContent = msg;
    status.className = `text-sm ${ok ? "text-pine" : "text-red-700"}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (form._honey.value) return; // bot

    const data = Object.fromEntries(new FormData(form).entries());
    const topicLabel = form.topic.options[form.topic.selectedIndex].text;

    button.disabled = true;
    button.textContent = "Sending…";
    status.textContent = "";

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONFIG.contactRecipient}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "—",
          topic: topicLabel,
          message: data.message,
          _subject: `Mindora website: ${topicLabel} — ${data.name}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error(json.message || "Send failed");

      form.reset();
      show("Message sent. We'll reply by email within one working day.", true);
    } catch (err) {
      show(`Your message didn't send. Check your connection and try again, or email ${CONFIG.emails[0]}.`, false);
    } finally {
      button.disabled = false;
      button.textContent = "Send message";
    }
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  wirePortalLinks();
  initMenus();
  initPhotos();
  initBreath();
  initSteps();
  initContactForm();
  document.querySelectorAll("[data-year]").forEach((y) => (y.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-contact-email]").forEach((n) => (n.innerHTML = CONFIG.emails.map((e) => `<a href="mailto:${e}" class="underline">${e}</a>`).join("<br>")));
});
