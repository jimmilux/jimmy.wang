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
    index: "Case 01 — Business impact",
    name: "Typus Finance",
    title: "A conversion problem was really an attention problem.",
    summary: "The original page contained the right information but gave every message similar weight. We reframed the work around one user decision: why should I trust this product enough to act now?",
    context: "A Web3 landing page with short sessions, low CTA engagement, and limited brand credibility.",
    move: "Used heatmap and contrast evidence to simplify the story, elevate trust signals, and connect copy, visual direction, and interaction to one action.",
    evidence: "Delivered in two weeks. CTA clicks increased by 80% after the redesign.",
    quote: "Good visual hierarchy is business strategy made visible.",
    scope: "Product story, UX/UI, testing",
    leadership: "Evidence-led direction",
    outcome: "+80% CTA clicks",
  },
  "design-ops": {
    index: "Case 02 — Organization",
    name: "Global iGaming Design",
    title: "One standard across many kinds of design work.",
    summary: "Product UI, game experiences, marketing assets, and outsourced work moved at different speeds. The leadership challenge was not to centralize every decision—it was to create shared expectations.",
    context: "A distributed team serving platform, game, growth, and operational needs across global markets.",
    move: "Clarified ownership, introduced repeatable review points, structured shared assets, and coached designers to present rationale instead of waiting for instructions.",
    evidence: "Led 8+ global designers while coordinating cross-functional partners and external design support.",
    quote: "Scale begins when quality no longer depends on who happens to be in the room.",
    scope: "Team, process, quality",
    leadership: "Operating model",
    outcome: "8+ designers aligned",
  },
  c88: {
    index: "Case 03 — Product direction",
    name: "C88 Games",
    title: "Modernize the platform without making it unfamiliar.",
    summary: "Gaming users build strong habits around navigation, promotions, and repeated actions. The redesign balanced a more credible product experience with the familiarity required for high-frequency use.",
    context: "A comprehensive gaming platform responding to changing expectations in the Philippines market.",
    move: "Reframed the information architecture, visual hierarchy, and content density as one coherent platform direction rather than a cosmetic reskin.",
    evidence: "A unified experience direction across navigation, discovery, promotion, and responsive product surfaces.",
    quote: "Transformation works when the new system respects the behavior that made the old one useful.",
    scope: "Platform UX/UI",
    leadership: "Market-led direction",
    outcome: "Unified platform system",
  },
  "game-design": {
    index: "Case 04 — Team enablement",
    name: "Game Design Practice",
    title: "Move design upstream—from asset delivery to game partnership.",
    summary: "Strong game UI needs more than polished screens. Designers need to understand the concept, player rhythm, production constraints, and why each interaction earns attention.",
    context: "Multiple game themes and production needs with quality vulnerable to one-off feedback and subjective review.",
    move: "Established critique around player experience and decision quality, while making reusable patterns and delivery expectations explicit.",
    evidence: "A more repeatable practice spanning concepts, UI quality, motion, and production collaboration.",
    quote: "The best critique improves the work today and the designer’s judgment tomorrow.",
    scope: "Game UX, critique, delivery",
    leadership: "Capability building",
    outcome: "Repeatable quality bar",
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
    const item = cases[button.dataset.openCase];
    dialogFields.forEach((field) => {
      document.querySelector(`#dialog-${field}`).textContent = item[field];
    });
    caseDialog.showModal();
  });
});

document.querySelector("[data-close-dialog]").addEventListener("click", () => caseDialog.close());
caseDialog.addEventListener("click", (event) => {
  if (event.target === caseDialog) caseDialog.close();
});

const principlesDialog = document.querySelector("[data-principles-dialog]");
document.querySelector("[data-open-principles]").addEventListener("click", () => principlesDialog.showModal());
document.querySelector("[data-close-principles]").addEventListener("click", () => principlesDialog.close());
principlesDialog.addEventListener("click", (event) => {
  if (event.target === principlesDialog) principlesDialog.close();
});

const selected = new Set();
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
    ["Leadership", a.leadership, b.leadership],
    ["Outcome", `<strong>${a.outcome}</strong>`, `<strong>${b.outcome}</strong>`],
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
