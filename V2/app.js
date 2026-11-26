import { trackPageView } from "./analytics.js";

const header = document.querySelector("[data-header]");
const modal = document.querySelector("[data-case-modal]");
const track = document.querySelector("[data-case-track]");
const title = document.querySelector("[data-case-title]");
const closeButton = document.querySelector("[data-case-close]");
const rotatingWord = document.querySelector("[data-rotating-word]");
const rotatingWords = ["REAL", "HAPPEN", "BETTER", "LAST", "MATTER", "UNIQUE"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const siteSeo = {
  title: "The Prio Form | Branding, Visual Identity, Packaging & Web Design",
  description:
    "The Prio Form is an independent branding studio creating brand strategy, visual identity, packaging and web design for ambitious businesses.",
  image: "/contact-prio-form.png",
};

document.documentElement.classList.add("motion-ready");

const cases = {
  objet: {
    title: "OBJET",
    cover: "/casos/objet/PORTADA.jpg",
    seoTitle: "OBJET Brand Identity & E-commerce Case Study | The Prio Form",
    seoDescription:
      "Brand strategy, visual identity and e-commerce design for OBJET, a contemporary interior design destination.",
    images: [
      "/casos/objet/OBJET_TPF-01.jpg",
      "/casos/objet/OBJET_TPF-02.jpg",
      "/casos/objet/OBJET_TPF-03.jpg",
      "/casos/objet/OBJET_TPF-04.jpg",
      "/casos/objet/OBJET_TPF-05.jpg",
      "/casos/objet/OBJET_TPF-06.jpg",
      "/casos/objet/OBJET_TPF-07.jpg",
      "/casos/objet/OBJET_TPF-08.jpg",
      "/casos/objet/OBJET_TPF-09.jpg",
      "/casos/objet/OBJET_TPF-10.jpg",
      "/casos/objet/OBJET_TPF-11.jpg",
      "/casos/objet/OBJET_TPF-12.jpg",
      "/casos/objet/OBJET_TPF-13.jpg",
      "/casos/objet/OBJET_TPF-14.jpg",
      "/casos/objet/OBJET_TPF-15.jpg",
      "/casos/objet/OBJET_TPF-16.jpg",
      "/casos/objet/OBJET_TPF-17.jpg",
      "/casos/objet/OBJET_TPF-18.jpg",
    ],
  },
  stenox: {
    title: "STENOX",
    cover: "/STENOX_PORTADA_CROP.jpg",
    seoTitle: "STENOX Fintech Branding Case Study | The Prio Form",
    seoDescription:
      "Brand strategy, visual identity and digital direction for STENOX, a modern investment platform.",
    images: [
      "/STENOX_WEB-01.jpg",
      "/STENOX_WEB-02.jpg",
      "/STENOX_WEB-03.jpg",
      "/STENOX_WEB-04.jpg",
      "/STENOX_WEB-05.jpg",
      "/STENOX_WEB-06.jpg",
      "/STENOX_WEB-07.jpg",
      "/STENOX_WEB-08.jpg",
      "/STENOX_WEB-09.jpg",
      "/STENOX_WEB-10.jpg",
      "/STENOX_WEB-11.jpg",
      "/STENOX_WEB-12.jpg",
      "/STENOX_WEB-13.jpg",
      "/STENOX_WEB-14.jpg",
    ],
  },
  vasca: {
    title: "VASCA",
    cover: "/casos/vasca/VASCA_TPF-01.jpg",
    seoTitle: "VASCA Food Branding & Packaging Case Study | The Prio Form",
    seoDescription:
      "Brand strategy, visual identity and packaging design for VASCA, a contemporary Basque cheesecake brand.",
    images: [
      "/casos/vasca/VASCA_TPF-01.jpg",
      "/casos/vasca/VASCA_TPF-02.jpg",
      "/casos/vasca/VASCA_TPF-03.jpg",
      "/casos/vasca/VASCA_TPF-04.jpg",
      "/casos/vasca/VASCA_TPF-05.jpg",
      "/casos/vasca/VASCA_TPF-06.jpg",
      "/casos/vasca/VASCA_TPF-07.jpg",
      "/casos/vasca/VASCA_TPF-08.jpg",
      "/casos/vasca/VASCA_TPF-09.jpg",
      "/casos/vasca/VASCA_TPF-10.jpg",
      "/casos/vasca/VASCA_TPF-11.jpg",
      "/casos/vasca/VASCA_TPF-12.jpg",
      "/casos/vasca/VASCA_TPF-13.jpg",
      "/casos/vasca/VASCA_TPF-14.jpg",
      "/casos/vasca/VASCA_TPF-15.jpg",
      "/casos/vasca/VASCA_TPF-16.jpg",
      "/casos/vasca/VASCA_TPF-17.jpg",
      "/casos/vasca/VASCA_TPF-18.jpg",
    ],
  },
  punch: {
    title: "PUNCH",
    cover: "/casos/punch/PUNCH_TPF-01.jpg",
    seoTitle: "PUNCH Cold Brew Branding & Packaging Case Study | The Prio Form",
    seoDescription:
      "Brand strategy, visual identity and packaging design for PUNCH, a bold cold brew coffee brand.",
    images: [
      "/casos/punch/PUNCH_TPF-01.jpg",
      "/casos/punch/PUNCH_TPF-02.jpg",
      "/casos/punch/PUNCH_TPF-03.jpg",
      "/casos/punch/PUNCH_TPF-04.jpg",
      "/casos/punch/PUNCH_TPF-05.jpg",
      "/casos/punch/PUNCH_TPF-06.jpg",
      "/casos/punch/PUNCH_TPF-07.jpg",
      "/casos/punch/PUNCH_TPF-08.jpg",
      "/casos/punch/PUNCH_TPF-09.jpg",
      "/casos/punch/PUNCH_TPF-10.jpg",
      "/casos/punch/PUNCH_TPF-11.jpg",
      "/casos/punch/PUNCH_TPF-12.jpg",
      "/casos/punch/PUNCH_TPF-13.jpg",
      "/casos/punch/PUNCH_TPF-14.jpg",
    ],
  },
  perrinos: {
    title: "PERRINOS",
    cover: "/casos/perrinos/PERRINOS_TPF-01.jpg",
    seoTitle: "PERRINOS Hospitality Branding Case Study | The Prio Form",
    seoDescription:
      "Brand strategy, visual identity and experience design for PERRINOS, a hotel and spa for dogs.",
    images: [
      "/casos/perrinos/PERRINOS_TPF-01.jpg",
      "/casos/perrinos/PERRINOS_TPF-02.jpg",
      "/casos/perrinos/PERRINOS_TPF-03.jpg",
      "/casos/perrinos/PERRINOS_TPF-04.jpg",
      { type: "video", src: "/casos/perrinos/PERRINOS_TPF-motion.mp4" },
      "/casos/perrinos/PERRINOS_TPF-05.jpg",
      "/casos/perrinos/PERRINOS_TPF-06.jpg",
      "/casos/perrinos/PERRINOS_TPF-07.jpg",
      "/casos/perrinos/PERRINOS_TPF-08.jpg",
      "/casos/perrinos/PERRINOS_TPF-09.jpg",
      "/casos/perrinos/PERRINOS_TPF-10.jpg",
      "/casos/perrinos/PERRINOS_TPF-11.jpg",
      "/casos/perrinos/PERRINOS_TPF-12.jpg",
      "/casos/perrinos/PERRINOS_TPF-13.jpg",
      "/casos/perrinos/PERRINOS_TPF-14.jpg",
      "/casos/perrinos/PERRINOS_TPF-15.jpg",
      "/casos/perrinos/PERRINOS_TPF-16.jpg",
    ],
  },
  brutta: {
    title: "BRUTTA",
    cover: "/casos/brutta/BRUTTA_TPF-17.jpg",
    seoTitle: "BRUTTA Food Branding Case Study | The Prio Form",
    seoDescription:
      "Naming, brand strategy and visual identity for BRUTTA, a focaccia sandwich concept with a bold point of view.",
    images: [
      "/casos/brutta/BRUTTA_TPF-01.jpg",
      "/casos/brutta/BRUTTA_TPF-02.jpg",
      "/casos/brutta/BRUTTA_TPF-03.jpg",
      "/casos/brutta/BRUTTA_TPF-16.jpg",
      "/casos/brutta/BRUTTA_TPF-17.jpg",
      "/casos/brutta/BRUTTA_TPF-04.jpg",
      "/casos/brutta/BRUTTA_TPF-05.jpg",
      "/casos/brutta/BRUTTA_TPF-06.jpg",
      "/casos/brutta/BRUTTA_TPF-07.jpg",
      "/casos/brutta/BRUTTA_TPF-08.jpg",
      "/casos/brutta/BRUTTA_TPF-09.jpg",
      "/casos/brutta/BRUTTA_TPF-10.jpg",
      "/casos/brutta/BRUTTA_TPF-11.jpg",
      "/casos/brutta/BRUTTA_TPF-12.jpg",
      "/casos/brutta/BRUTTA_TPF-13.jpg",
      "/casos/brutta/BRUTTA_TPF-14.jpg",
      "/casos/brutta/BRUTTA_TPF-15.jpg",
    ],
  },
  agba: {
    title: "AGBA",
    cover: "/casos/agba/PORTADA.jpg",
    seoTitle: "AGBA Brand Identity Case Study | The Prio Form",
    seoDescription:
      "Brand strategy, visual identity and campaign design for AGBA.",
    images: [
      "/casos/agba/AGBA_TPF-01.jpg",
      "/casos/agba/AGBA_TPF-02.jpg",
      "/casos/agba/AGBA_TPF-03.jpg",
      "/casos/agba/2.gif",
      {
        type: "pair",
        items: ["/casos/agba/AGBA_TPF-04.jpg", "/casos/agba/1.gif"],
      },
      "/casos/agba/AGBA_TPF-06.jpg",
      "/casos/agba/AGBA_TPF-07.jpg",
      "/casos/agba/AGBA_TPF-08.jpg",
      "/casos/agba/AGBA_TPF-09.jpg",
      "/casos/agba/AGBA_TPF-10.jpg",
      "/casos/agba/AGBA_TPF-11.jpg",
      "/casos/agba/AGBA_TPF-12.jpg",
      "/casos/agba/AGBA_TPF-13.jpg",
      "/casos/agba/AGBA_TPF-14.jpg",
      "/casos/agba/AGBA_TPF-15.jpg",
      "/casos/agba/AGBA_TPF-16.jpg",
    ],
  },
};

const caseOrder = ["agba", "objet", "stenox", "perrinos", "vasca", "punch", "brutta"];

function setMetaContent(selector, content) {
  const meta = document.querySelector(selector);
  if (meta) meta.setAttribute("content", content);
}

function updateSeo(caseId = null) {
  const item = caseId ? cases[caseId] : null;
  const url = new URL("https://www.weareprio.com/");

  if (caseId) {
    url.searchParams.set("case", caseId);
  }

  const pageTitle = item?.seoTitle || siteSeo.title;
  const pageDescription = item?.seoDescription || siteSeo.description;
  const pageImage = new URL(item?.cover || siteSeo.image, url.origin).href;
  const pageUrl = url.href;

  document.title = pageTitle;
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", pageUrl);
  setMetaContent('meta[name="description"]', pageDescription);
  setMetaContent('meta[property="og:title"]', pageTitle);
  setMetaContent('meta[property="og:description"]', pageDescription);
  setMetaContent('meta[property="og:url"]', pageUrl);
  setMetaContent('meta[property="og:image"]', pageImage);
  setMetaContent('meta[property="og:image:alt"]', item ? `${item.title} case study` : "The Prio Form branding studio");
  setMetaContent('meta[name="twitter:title"]', pageTitle);
  setMetaContent('meta[name="twitter:description"]', pageDescription);
  setMetaContent('meta[name="twitter:image"]', pageImage);

  trackPageView(`${window.location.pathname}${window.location.search}`, pageTitle);
}

function createCaseImage(src, alt, loading = "lazy") {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = loading;
  image.draggable = false;
  return image;
}

function createCaseVideo(src, alt) {
  const video = document.createElement("video");
  video.src = src;
  video.setAttribute("aria-label", alt);
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";

  if (prefersReducedMotion.matches) {
    video.controls = true;
  } else {
    video.autoplay = true;
  }

  return video;
}

function createCaseMedia(media, alt, loading = "lazy") {
  if (typeof media === "string") {
    return createCaseImage(media, alt, loading);
  }

  if (media.type === "pair") {
    const pair = document.createElement("div");
    pair.className = "case-media-pair";

    media.items.forEach((item, index) => {
      pair.append(createCaseImage(item, `${alt} ${index + 1}`, loading));
    });

    return pair;
  }

  return createCaseVideo(media.src, alt);
}

function createOtherProjects(currentCaseId) {
  const otherCases = caseOrder
    .filter((caseId) => caseId !== currentCaseId)
    .map((caseId) => [caseId, cases[caseId]]);
  if (otherCases.length === 0) return null;

  const section = document.createElement("section");
  section.className = "other-projects";

  const heading = document.createElement("h2");
  heading.textContent = "OTHER PROJECTS";

  const grid = document.createElement("div");
  grid.className = "other-projects-grid";

  otherCases.forEach(([caseId, item]) => {
    const button = document.createElement("a");
    button.className = "other-project-card";
    button.href = getCaseUrl(caseId);
    button.setAttribute("aria-label", `Open ${item.title}`);
    button.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openCase(caseId);
    });

    const image = createCaseImage(item.cover, `${item.title} case cover`);

    button.append(image);
    grid.append(button);
  });

  section.append(heading, grid);
  return section;
}

const motionObserver = prefersReducedMotion.matches
  ? null
  : new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

function observeMotionElements(root = document) {
  const elements = root.querySelectorAll(
    ".case-row, .profile-text, .portrait-pair, .method .section-heading, .method-grid > div, .method-services > span, .contact-image, .contact-copy, .other-projects h2, .other-project-card",
  );

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);

    if (motionObserver) {
      motionObserver.observe(element);
      return;
    }

    element.classList.add("is-revealed");
  });
}

function splitTextIntoWords(element) {
  if (!element) return [];

  const originalText = element.textContent.replace(/\s+/g, " ").trim();
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();

    textNode.nodeValue.split(/(\s+)/).forEach((part) => {
      if (!part) return;

      if (/^\s+$/.test(part)) {
        fragment.append(document.createTextNode(part));
        return;
      }

      const word = document.createElement("span");
      word.className = "scroll-word";
      word.textContent = part;
      word.setAttribute("aria-hidden", "true");
      fragment.append(word);
    });

    textNode.replaceWith(fragment);
  });

  element.setAttribute("aria-label", originalText);
  return [...element.querySelectorAll(".scroll-word")];
}

function setupScrollWriting() {
  if (prefersReducedMotion.matches) return;

  const textReveals = [
    {
      element: document.querySelector(".hero-thesis"),
      mode: "hero",
    },
    {
      element: document.querySelector(".profile h2"),
      mode: "viewport",
    },
  ]
    .filter(({ element }) => element)
    .map((item) => ({ ...item, words: splitTextIntoWords(item.element) }));

  let ticking = false;

  function updateTextReveals() {
    textReveals.forEach(({ element, mode, words }) => {
      const rect = element.getBoundingClientRect();
      const progress =
        mode === "hero"
          ? Math.min(1, Math.max(0, 0.08 + window.scrollY / (window.innerHeight * 0.55)))
          : Math.min(1, Math.max(0, (window.innerHeight * 0.92 - rect.top) / (window.innerHeight * 0.62)));

      words.forEach((word, index) => {
        const wordStart = (index / Math.max(words.length - 1, 1)) * 0.82;
        const wordProgress = Math.min(1, Math.max(0, (progress - wordStart) / 0.18));

        word.style.opacity = wordProgress;
        word.style.transform = `translateY(${(1 - wordProgress) * 0.38}em)`;
        word.style.filter = `blur(${(1 - wordProgress) * 4}px)`;
      });
    });

    ticking = false;
  }

  function requestTextUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateTextReveals);
  }

  window.addEventListener("scroll", requestTextUpdate, { passive: true });
  window.addEventListener("resize", requestTextUpdate);
  updateTextReveals();
}

function setupCustomCursor() {
  if (prefersReducedMotion.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return;
  }

  const cursor = document.createElement("div");
  cursor.className = "prio-cursor";
  cursor.setAttribute("aria-hidden", "true");
  document.body.append(cursor);

  let pointerX = -100;
  let pointerY = -100;
  let cursorX = -100;
  let cursorY = -100;
  let cursorFrame = null;
  let hasPointerPosition = false;

  function renderCursor() {
    cursorX += (pointerX - cursorX) * 0.2;
    cursorY += (pointerY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

    if (Math.abs(pointerX - cursorX) > 0.1 || Math.abs(pointerY - cursorY) > 0.1) {
      cursorFrame = window.requestAnimationFrame(renderCursor);
      return;
    }

    cursorFrame = null;
  }

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (!hasPointerPosition) {
      cursorX = pointerX;
      cursorY = pointerY;
      hasPointerPosition = true;
    }

    cursor.classList.add("is-visible");
    document.documentElement.classList.add("custom-cursor-active");

    if (!cursorFrame) {
      cursorFrame = window.requestAnimationFrame(renderCursor);
    }
  });

  document.addEventListener("pointerover", (event) => {
    cursor.classList.toggle("is-active", Boolean(event.target.closest("a, button, .case-row")));
  });

  document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
}

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function getCaseUrl(caseId) {
  const url = new URL(window.location.href);
  url.searchParams.set("case", caseId);
  url.hash = "";
  return url;
}

function getCurrentCaseId() {
  const params = new URLSearchParams(window.location.search);
  const caseId = params.get("case");
  return cases[caseId] ? caseId : null;
}

function setCaseUrl(caseId) {
  window.history.pushState({ caseId }, "", getCaseUrl(caseId));
}

function clearCaseUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete("case");
  window.history.pushState({}, "", url);
}

function openCase(caseId, updateUrl = true) {
  const item = cases[caseId];
  if (!item) return;

  if (updateUrl) {
    setCaseUrl(caseId);
  }

  updateSeo(caseId);

  title.textContent = item.title;
  const detailMedia = item.images.map((media, index) =>
    createCaseMedia(media, `${item.title} detail ${index + 1}`, index === 0 ? "eager" : "lazy"),
  );
  const otherProjects = createOtherProjects(caseId);

  track.replaceChildren(...detailMedia, ...(otherProjects ? [otherProjects] : []));

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.scrollTop = 0;
  observeMotionElements(track);
}

function closeCase() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  track.replaceChildren();
  clearCaseUrl();
  updateSeo();
}

document.querySelectorAll("[data-case-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openCase(trigger.dataset.caseTrigger);
  });
});

closeButton.addEventListener("click", closeCase);

window.addEventListener("popstate", () => {
  const caseId = getCurrentCaseId();

  if (caseId) {
    openCase(caseId, false);
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  track.replaceChildren();
  updateSeo();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeCase();
  }
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
observeMotionElements();
setupScrollWriting();
setupCustomCursor();

const initialCaseId = getCurrentCaseId();
if (initialCaseId) {
  openCase(initialCaseId, false);
} else {
  updateSeo();
}

if (rotatingWord && !prefersReducedMotion.matches) {
  let wordIndex = 0;

  window.setInterval(() => {
    rotatingWord.classList.add("is-changing");

    window.setTimeout(() => {
      wordIndex = (wordIndex + 1) % rotatingWords.length;
      rotatingWord.textContent = rotatingWords[wordIndex];
      rotatingWord.classList.remove("is-changing");
    }, 280);
  }, 1400);
}
