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
    title: "A two-week redesign that drove 80% more CTA clicks.",
    summary: "The existing landing page was rich in information but failed to guide users toward action. I used attention evidence to turn a dense feature story into a clearer conversion journey.",
    context: "A Web3 landing page with short sessions, low CTA engagement, an unclear visual hierarchy, and limited brand credibility.",
    move: "Analyzed heatmaps and contrast, clarified the information hierarchy, elevated trust signals, and connected the CTA language to the rocket concept.",
    evidence: "Delivered in two weeks. The redesigned landing page increased CTA clicks by 80% and improved engagement.",
    quote: "Visual hierarchy became the bridge between product value and user action.",
  },
  c88: {
    index: "Project 02 — Gaming platform",
    title: "A market shift required more than a visual refresh.",
    summary: "C88 expanded from a Vietnam-focused sportsbook into a casino platform for the Philippines. I redesigned the product around slot discovery, localized trust, and higher-converting promotion paths.",
    context: "The existing identity and navigation reflected sports betting, while the new market favored slots and casino content. Large banners and horizontal category browsing also hurt discovery.",
    move: "Repositioned the brand, redesigned navigation and game categorization, reduced promotional clutter, and created a consistent mobile-first platform experience.",
    evidence: "The redesigned experience increased sign-ups by 53% and click-through rate by 48%, while improving navigation satisfaction and brand alignment.",
    quote: "The strongest redesigns respond to market behavior, not just interface trends.",
  },
  "slot-games": {
    index: "Project 03 — Game design",
    title: "Product design across the complete game experience.",
    summary: "A collection of themed slot games that expanded my role beyond interface design into game concepts, animation, sound, and the details that shape player rhythm.",
    context: "The online gaming market needed memorable slot experiences that balanced familiar mechanics, distinctive themes, and consistent usability.",
    move: "Designed the UI and UX, built visual themes, shaped animation timing, and supported sound effects so every layer reinforced the same gameplay experience.",
    evidence: "End-to-end ownership across UI, UX, visual, animation, and SFX design from 2014 to 2018.",
    quote: "In game design, every visual and sound cue is part of the interaction model.",
  },
  "visual-design": {
    index: "Project 04 — Visual design",
    title: "Campaign craft designed for attention and adaptation.",
    summary: "A collection of promotional work created for digital campaigns, combining art direction, image retouching, brand consistency, and channel-specific execution.",
    context: "Campaign assets needed to capture attention quickly while adapting across audiences, placements, languages, and promotional messages.",
    move: "Built high-impact key visuals and translated them into flexible campaign systems without losing hierarchy, mood, or brand recognition.",
    evidence: "Visual design and retouching work delivered across multiple promotional campaigns during 2023–2024.",
    quote: "A campaign system succeeds when every adaptation still feels like the same idea.",
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
