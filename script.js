const systemContent = {
  direction: {
    kicker: "01 — Direction",
    title: "Make the “why” visible before the team draws the “what.”",
    copy: "I translate business priorities, market signals, and user evidence into a design direction the full product team can evaluate—not just admire.",
    list: ["Product and experience principles", "Decision narratives for executives", "Clear quality bars and success measures"],
  },
  systems: {
    kicker: "02 — Systems",
    title: "Reduce decision debt with standards that support judgment.",
    copy: "A design system is more than components. I connect tokens, critique rituals, ownership, and handoff expectations so quality survives speed and scale.",
    list: ["Design system governance", "Reusable review and delivery workflows", "Cross-functional source of truth"],
  },
  people: {
    kicker: "03 — People",
    title: "Build independent designers, not a queue for approvals.",
    copy: "I set context and constraints, then coach people to make stronger decisions. The goal is a team that can explain, challenge, and own its work.",
    list: ["Hiring and capability mapping", "Direct, teachable design critique", "Ownership matched to readiness"],
  },
};

const cases = {
  typus: {
    index: "Project 01 — Product design",
    name: "Typus Finance",
    title: "A two-week redesign that drove 80% more CTA clicks.",
    summary: "The existing landing page was rich in information but failed to guide users toward action. I used attention evidence to turn a dense feature story into a clearer conversion journey.",
    context: "A Web3 landing page with short sessions, low CTA engagement, an unclear visual hierarchy, and limited brand credibility.",
    move: "Analyzed heatmaps and contrast, clarified the information hierarchy, elevated trust signals, and connected the CTA language to the rocket concept.",
    evidence: "Delivered in two weeks. The redesigned landing page increased CTA clicks by 80% and improved engagement.",
    quote: "Visual hierarchy became the bridge between product value and user action.",
    scope: "Product story, UX/UI, testing",
    role: "Lead Product Designer",
    outcome: "+80% CTA clicks",
  },
  c88: {
    index: "Project 02 — Gaming platform",
    name: "C88 Games",
    title: "A market shift required more than a visual refresh.",
    summary: "C88 expanded from a Vietnam-focused sportsbook into a casino platform for the Philippines. I redesigned the product around slot discovery, localized trust, and higher-converting promotion paths.",
    context: "The existing identity and navigation reflected sports betting, while the new market favored slots and casino content. Large banners and horizontal category browsing also hurt discovery.",
    move: "Repositioned the brand, redesigned navigation and game categorization, reduced promotional clutter, and created a consistent mobile-first platform experience.",
    evidence: "The redesigned experience increased sign-ups by 53% and click-through rate by 48%, while improving navigation satisfaction and brand alignment.",
    quote: "The strongest redesigns respond to market behavior, not just interface trends.",
    scope: "Research, product UX/UI, localization",
    role: "Product Designer",
    outcome: "+53% sign-ups",
  },
  "slot-games": {
    index: "Project 03 — Game design",
    name: "Slot Games",
    title: "Product design across the complete game experience.",
    summary: "A collection of themed slot games that expanded my role beyond interface design into game concepts, animation, sound, and the details that shape player rhythm.",
    context: "The online gaming market needed memorable slot experiences that balanced familiar mechanics, distinctive themes, and consistent usability.",
    move: "Designed the UI and UX, built visual themes, shaped animation timing, and supported sound effects so every layer reinforced the same gameplay experience.",
    evidence: "End-to-end ownership across UI, UX, visual, animation, and SFX design from 2014 to 2018.",
    quote: "In game design, every visual and sound cue is part of the interaction model.",
    scope: "Game UX, UI, motion, SFX",
    role: "Multidisciplinary Product Designer",
    outcome: "End-to-end game design",
  },
  "visual-design": {
    index: "Project 04 — Visual design",
    name: "Visual Design",
    title: "Campaign craft designed for attention and adaptation.",
    summary: "A collection of promotional work created for digital campaigns, combining art direction, image retouching, brand consistency, and channel-specific execution.",
    context: "Campaign assets needed to capture attention quickly while adapting across audiences, placements, languages, and promotional messages.",
    move: "Built high-impact key visuals and translated them into flexible campaign systems without losing hierarchy, mood, or brand recognition.",
    evidence: "Visual design and retouching work delivered across multiple promotional campaigns during 2023–2024.",
    quote: "A campaign system succeeds when every adaptation still feels like the same idea.",
    scope: "Art direction, campaign design, retouching",
    role: "Visual Designer",
    outcome: "Cross-channel campaign system",
  },
};

const nodes = document.querySelectorAll("[data-system]");
const systemEls = {
  kicker: document.querySelector("#system-kicker"),
  title: document.querySelector("#system-title"),
  copy: document.querySelector("#system-copy"),
  list: document.querySelector("#system-list"),
};

nodes.forEach((node) => {
  node.addEventListener("click", () => {
    const content = systemContent[node.dataset.system];
    nodes.forEach((item) => item.classList.toggle("is-active", item === node));
    systemEls.kicker.textContent = content.kicker;
    systemEls.title.textContent = content.title;
    systemEls.copy.textContent = content.copy;
    systemEls.list.innerHTML = content.list.map((item) => `<li>${item}</li>`).join("");
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && !card.dataset.category.includes(filter));
    });
  });
});

const caseDialog = document.querySelector("[data-case-dialog]");
const dialogFields = ["index", "title", "summary", "context", "move", "evidence", "quote"];

document.querySelectorAll("[data-open-case]").forEach((button) => {
  button.addEventListener("click", () => {
    const caseId = button.dataset.openCase;
    const item = cases[caseId];
    dialogFields.forEach((field) => {
      document.querySelector(`#dialog-${field}`).textContent = item[field];
    });
    document.querySelector("#dialog-body").innerHTML = window.caseStudyContent[caseId].body;
    caseDialog.showModal();
    caseDialog.scrollTop = 0;
  });
});

document.querySelector("[data-close-dialog]").addEventListener("click", () => caseDialog.close());
caseDialog.addEventListener("click", (event) => {
  if (event.target === caseDialog) caseDialog.close();
});

const selected = new Set();
const heroAction = document.querySelector("[data-hero-action]");
if (heroAction && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const actions = ["set direction", "align teams", "build systems"];
  let actionIndex = 0;
  window.setInterval(() => {
    heroAction.classList.add("is-changing");
    window.setTimeout(() => {
      actionIndex = (actionIndex + 1) % actions.length;
      heroAction.textContent = actions[actionIndex];
      heroAction.classList.remove("is-changing");
    }, 240);
  }, 3000);
}
const compareButton = document.querySelector("[data-open-compare]");
const compareCount = document.querySelector("[data-compare-count]");
const compareDrawer = document.querySelector("[data-compare-drawer]");
const compareTable = document.querySelector("[data-compare-table]");

function syncCompare() {
  compareCount.textContent = selected.size;
  compareButton.disabled = selected.size !== 2;
  document.querySelectorAll("[data-compare]").forEach((input) => {
    input.checked = selected.has(input.dataset.compare);
    input.disabled = selected.size === 2 && !input.checked;
  });
}

document.querySelectorAll("[data-compare]").forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked && selected.size < 2) selected.add(input.dataset.compare);
    else selected.delete(input.dataset.compare);
    syncCompare();
  });
});

compareButton.addEventListener("click", () => {
  if (selected.size !== 2) return;
  const [a, b] = [...selected].map((id) => cases[id]);
  const rows = [
    ["Case", a.name, b.name, "case-name"],
    ["Scope", a.scope, b.scope],
    ["Role", a.role, b.role],
    ["Impact", `<strong>${a.outcome}</strong>`, `<strong>${b.outcome}</strong>`],
  ];
  compareTable.innerHTML = rows.map(([label, left, right, extra = ""]) => `
    <div class="compare-cell label">${label}</div>
    <div class="compare-cell ${extra}">${left}</div>
    <div class="compare-cell ${extra}">${right}</div>
  `).join("");
  compareDrawer.classList.add("is-open");
  compareDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
});

document.querySelector("[data-close-compare]").addEventListener("click", () => {
  compareDrawer.classList.remove("is-open");
  compareDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && compareDrawer.classList.contains("is-open")) {
    document.querySelector("[data-close-compare]").click();
  }
});

syncCompare();
