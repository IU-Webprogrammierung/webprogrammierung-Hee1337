"use strict";

/* =========================================================
   Gemeinsame Hilfsfunktionen
   ========================================================= */

const clamp = (value, minimum, maximum) => {
  return Math.min(Math.max(value, minimum), maximum);
};

const interpolate = (start, end, progress) => {
  return start + (end - start) * progress;
};

const parsePixelValue = (value) => {
  const parsedValue = Number.parseFloat(value);

  return Number.isFinite(parsedValue)
    ? parsedValue
    : 0;
};


/* =========================================================
   Rennrad-Setup: Hotspots und Detailkarte
   ========================================================= */

const bikeParts = {
  di2: {
    title: "Shimano 105 Di2",
    text:
      "Die elektronische Shimano 105 Di2 sorgt für präzise " +
      "Schaltvorgänge und unterstützt ein gleichmäßiges Fahren " +
      "bei wechselnden Belastungen. Gerade bei Intervallen und " +
      "langen Ausfahrten hilft die zuverlässige Schaltung, den " +
      "Rhythmus sauber zu halten."
  },

  wheels: {
    title: "Carbon-Laufräder",
    text:
      "Die Carbon-Laufräder verbessern die Aerodynamik und geben " +
      "dem Rad bei höherer Geschwindigkeit ein direkteres Fahrgefühl. " +
      "Besonders auf flachen und schnellen Abschnitten machen sich " +
      "tiefe Felgen durch mehr Laufruhe bemerkbar."
  },

  tires: {
    title: "Reifen",
    text:
      "Die Reifen beeinflussen Komfort, Grip und Rollwiderstand. " +
      "Für längere Ausfahrten und sportliches Training ist ein guter " +
      "Reifen wichtig, weil er Sicherheit, Effizienz und Fahrgefühl " +
      "direkt beeinflusst."
  },

  powermeter: {
    title: "Powermeter",
    text:
      "Das Powermeter misst die getretene Leistung in Watt. Dadurch " +
      "kann das Training genauer gesteuert werden als nur über " +
      "Geschwindigkeit oder Gefühl. Besonders Intervalle, " +
      "Sweetspot-Einheiten und FTP-Tests werden dadurch vergleichbarer."
  },

  brakes: {
    title: "Scheibenbremsen",
    text:
      "Scheibenbremsen bieten kontrollierbare Bremsleistung bei " +
      "unterschiedlichen Wetterbedingungen. Gerade bei längeren " +
      "Abfahrten oder nasser Straße geben sie zusätzliche Sicherheit " +
      "und ein konstantes Bremsgefühl."
  }
};

const initializeBikeSetup = () => {
  const hotspotButtons = [
    ...document.querySelectorAll(".bike-hotspot")
  ];

  const detailTitle =
    document.querySelector("#bike-detail-title");

  const detailText =
    document.querySelector("#bike-detail-text");

  const detailCard =
    document.querySelector("#bike-detail-card");

  if (
    hotspotButtons.length === 0 ||
    !detailTitle ||
    !detailText ||
    !detailCard
  ) {
    return;
  }

  hotspotButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPart =
        button.dataset.bikePart;

      const partData =
        bikeParts[selectedPart];

      if (!partData) {
        return;
      }

      detailTitle.textContent =
        partData.title;

      detailText.textContent =
        partData.text;

      hotspotButtons.forEach((hotspot) => {
        const isSelected =
          hotspot === button;

        hotspot.classList.toggle(
          "is-active",
          isSelected
        );

        hotspot.setAttribute(
          "aria-pressed",
          String(isSelected)
        );
      });

      /*
       * Die Klasse wird kurz entfernt und erneut gesetzt,
       * damit die Detailkarten-Animation neu beginnt.
       */
      detailCard.classList.remove(
        "is-visible"
      );

      void detailCard.offsetWidth;

      detailCard.classList.add(
        "is-visible"
      );
    });
  });
};


/* =========================================================
   Kontaktformular: lokale Portfolio-Demonstration
   ========================================================= */

const initializeContactForm = () => {
  const contactForm =
    document.querySelector("[data-contact-form]");

  const statusMessage =
    document.querySelector("[data-form-status]");

  if (
    !contactForm ||
    !statusMessage
  ) {
    return;
  }

  contactForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      statusMessage.textContent =
        "Vielen Dank! Dein Tipp wurde in dieser Demo erfolgreich verarbeitet.";

      statusMessage.classList.add(
        "is-success"
      );

      contactForm.reset();
    }
  );
};


/* =========================================================
   Scroll-Orientierung vor der Haupt-Timeline
   ========================================================= */

const createIntroStageUpdater = () => {
  const heroSection =
    document.querySelector("#hero");

  const aboutSection =
    document.querySelector(".about-section");

  const timelineSection =
    document.querySelector("[data-timeline]");

  if (
    !heroSection ||
    !aboutSection ||
    !timelineSection
  ) {
    return null;
  }

  return () => {
    const activationLine =
      window.innerHeight * 0.55;

    const aboutTop =
      aboutSection
        .getBoundingClientRect()
        .top;

    const timelineTop =
      timelineSection
        .getBoundingClientRect()
        .top;

    const heroIsActive =
      aboutTop > activationLine;

    const aboutIsActive =
      aboutTop <= activationLine &&
      timelineTop > activationLine;

    heroSection.classList.toggle(
      "is-active",
      heroIsActive
    );

    aboutSection.classList.toggle(
      "is-active",
      aboutIsActive
    );
  };
};


/* =========================================================
   Scroll-aktive Haupt-Timeline
   ========================================================= */

const createTimelineUpdater = () => {
  const timelineSection =
    document.querySelector(
      "[data-timeline]"
    );

  const timelineGrid =
    timelineSection?.querySelector(
      ".timeline-grid"
    );

  const timelineItems = timelineSection
    ? [
        ...timelineSection.querySelectorAll(
          "[data-timeline-item]"
        )
      ]
    : [];

  if (
    !timelineSection ||
    !timelineGrid ||
    timelineItems.length === 0
  ) {
    return null;
  }

  return () => {
    const gridRectangle =
      timelineGrid.getBoundingClientRect();

    const activationLine =
      window.innerHeight * 0.55;

    const timelineProgress = clamp(
      (
        activationLine -
        gridRectangle.top
      ) /
        Math.max(
          gridRectangle.height,
          1
        ),
      0,
      1
    );

    timelineGrid.style.setProperty(
      "--timeline-progress",
      `${timelineProgress * 100}%`
    );

    let activeItem =
      timelineItems[0];

    let smallestDistance =
      Number.POSITIVE_INFINITY;

    timelineItems.forEach((item) => {
      const itemRectangle =
        item.getBoundingClientRect();

      const itemCenter =
        itemRectangle.top +
        itemRectangle.height / 2;

      const distance = Math.abs(
        itemCenter - activationLine
      );

      if (
        distance <
        smallestDistance
      ) {
        smallestDistance =
          distance;

        activeItem =
          item;
      }
    });

    timelineItems.forEach((item) => {
      item.classList.toggle(
        "is-active",
        item === activeItem
      );
    });
  };
};


/* =========================================================
   Erweiterter Verlauf bis „Mein erstes Rennen“
   ========================================================= */

const journeySettings = {
  activationLineRatio: 0.55,
  lineProgressExponent: 1.08,
  cardProgressExponent: 1.15,
  pageEndAssistDistanceRatio: 0.65
};

const findJourneyCard = (item) => {
  if (
    item.matches(".content-card")
  ) {
    return item;
  }

  return item.querySelector(
    ":scope > .content-card"
  );
};

const createJourneyUpdater = () => {
  const journeySection =
    document.querySelector(
      "[data-journey]"
    );

  const journeyItems = journeySection
    ? [
        ...journeySection.querySelectorAll(
          "[data-journey-item]"
        )
      ]
        .map((item) => {
          return {
            item,
            card:
              findJourneyCard(item)
          };
        })
        .filter(({ card }) => {
          return card !== null;
        })
    : [];

  if (
    !journeySection ||
    journeyItems.length === 0
  ) {
    return null;
  }

  return () => {
    const scrollPosition =
      window.scrollY;

    const journeyRectangle =
      journeySection.getBoundingClientRect();

    const trackStyle =
      window.getComputedStyle(
        journeySection,
        "::before"
      );

    const trackTopOffset =
      parsePixelValue(
        trackStyle.top
      );

    const trackBottomOffset =
      parsePixelValue(
        trackStyle.bottom
      );

    const trackStart =
      scrollPosition +
      journeyRectangle.top +
      trackTopOffset;

    const trackEnd =
      scrollPosition +
      journeyRectangle.bottom -
      trackBottomOffset;

    const trackLength = Math.max(
      trackEnd - trackStart,
      1
    );

    const activationPosition =
      scrollPosition +
      window.innerHeight *
        journeySettings
          .activationLineRatio;

    const rawLineProgress = clamp(
      (
        activationPosition -
        trackStart
      ) /
        trackLength,
      0,
      1
    );

    const naturalLineProgress =
      Math.pow(
        rawLineProgress,
        journeySettings
          .lineProgressExponent
      );

    const naturalLineHead =
      trackStart +
      trackLength *
        naturalLineProgress;

    const distanceToPageEnd =
      Math.max(
        document.documentElement
          .scrollHeight -
          (
            scrollPosition +
            window.innerHeight
          ),
        0
      );

    const pageEndAssist =
      rawLineProgress >= 0.75
        ? clamp(
            1 -
              distanceToPageEnd /
                Math.max(
                  window.innerHeight *
                    journeySettings
                      .pageEndAssistDistanceRatio,
                  1
                ),
            0,
            1
          )
        : 0;

    const lineHead =
      interpolate(
        naturalLineHead,
        trackEnd,
        pageEndAssist
      );

    const journeyProgress = clamp(
      (
        lineHead -
        trackStart
      ) /
        trackLength,
      0,
      1
    );

    journeySection.style.setProperty(
      "--journey-progress",
      journeyProgress.toFixed(4)
    );

    const itemGeometry =
      journeyItems.map(
        ({ item, card }) => {
          const cardRectangle =
            card.getBoundingClientRect();

          return {
            item,
            card,

            top:
              scrollPosition +
              cardRectangle.top,

            height: Math.max(
              cardRectangle.height,
              1
            )
          };
        }
      );

    let activeIndex = -1;

    itemGeometry.forEach(
      ({ top }, index) => {
        if (
          lineHead >= top
        ) {
          activeIndex =
            index;
        }
      }
    );

    itemGeometry.forEach(
      (
        {
          item,
          card,
          top,
          height
        },
        index
      ) => {
        const rawCardProgress =
          clamp(
            (
              lineHead -
              top
            ) /
              height,
            0,
            1
          );

        const visibleCardProgress =
          Math.pow(
            rawCardProgress,
            journeySettings
              .cardProgressExponent
          );

        card.style.setProperty(
          "--journey-card-angle",
          `${
            visibleCardProgress *
            180
          }deg`
        );

        const isActive =
          index === activeIndex;

        const isComplete =
          rawCardProgress >= 0.999;

        card.classList.toggle(
          "is-journey-active",
          isActive
        );

        card.classList.toggle(
          "is-journey-complete",
          isComplete
        );

        if (isActive) {
          item.setAttribute(
            "aria-current",
            "step"
          );
        } else {
          item.removeAttribute(
            "aria-current"
          );
        }
      }
    );
  };
};


/* =========================================================
   Kontaktabschluss: scrollabhängige Rennradfahrt
   ========================================================= */

const createContactStageUpdater = () => {
  const contactSection =
    document.querySelector(
      "[data-contact-stage]"
    );

  const bikeRoute =
    contactSection?.querySelector(
      ".bike-route"
    );

  const contactBike =
    bikeRoute?.querySelector(
      ".contact-bike"
    );

  const finishLine =
    bikeRoute?.querySelector(
      ".bike-route-finish"
    );

  if (
    !contactSection ||
    !bikeRoute ||
    !contactBike ||
    !finishLine
  ) {
    return null;
  }

  return () => {
    const routeRectangle =
      bikeRoute.getBoundingClientRect();

    const routeWidth =
      bikeRoute.clientWidth;

    const bikeWidth =
      contactBike
        .getBoundingClientRect()
        .width;

    const finishWidth =
      finishLine
        .getBoundingClientRect()
        .width;

    const travelDistance = Math.max(
      routeWidth -
        bikeWidth -
        finishWidth -
        24,
      0
    );

    /*
     * Bei reduzierter Bewegung steht das Rad direkt
     * am Ziel und die Strecke ist vollständig gefüllt.
     */
    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    let routeProgress = 1;

    if (!prefersReducedMotion) {
      /*
       * Die Fahrt beginnt, wenn die Strecke den unteren
       * Viewportbereich erreicht, und endet weiter oben.
       */
      const animationStart =
        window.innerHeight * 0.85;

      const animationEnd =
        window.innerHeight * 0.25;

      routeProgress = clamp(
        (
          animationStart -
          routeRectangle.top
        ) /
          Math.max(
            animationStart -
              animationEnd,
            1
          ),
        0,
        1
      );
    }

    const bikePosition =
      travelDistance *
      routeProgress;

    contactSection.style.setProperty(
      "--bike-position",
      `${bikePosition}px`
    );

    contactSection.style.setProperty(
      "--route-progress",
      routeProgress.toFixed(4)
    );
  };
};


/* =========================================================
   Gemeinsame Scroll- und Resize-Steuerung
   ========================================================= */

const startViewportUpdates = (
  updaters
) => {
  const activeUpdaters =
    updaters.filter((updater) => {
      return (
        typeof updater ===
        "function"
      );
    });

  if (
    activeUpdaters.length === 0
  ) {
    return;
  }

  let updateRequested = false;

  const runUpdates = () => {
    updateRequested = false;

    activeUpdaters.forEach(
      (update) => {
        update();
      }
    );
  };

  const requestUpdate = () => {
    if (updateRequested) {
      return;
    }

    updateRequested = true;

    window.requestAnimationFrame(
      runUpdates
    );
  };

  window.addEventListener(
    "scroll",
    requestUpdate,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    requestUpdate
  );

  requestUpdate();
};


/* =========================================================
   Initialisierung
   ========================================================= */

initializeBikeSetup();
initializeContactForm();

startViewportUpdates([
  createIntroStageUpdater(),
  createTimelineUpdater(),
  createJourneyUpdater(),
  createContactStageUpdater()
]);