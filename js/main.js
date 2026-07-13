"use strict";

/* =========================================================
   Gemeinsame Hilfsfunktionen
   ========================================================= */

/**
 * Begrenzt einen Zahlenwert auf einen festgelegten Bereich.
 */
const clamp = (value, minimum, maximum) => {
  return Math.min(Math.max(value, minimum), maximum);
};

/**
 * Mischt zwei Werte anhand eines Fortschritts zwischen 0 und 1.
 */
const interpolate = (start, end, progress) => {
  return start + (end - start) * progress;
};

/**
 * Wandelt einen berechneten CSS-Pixelwert in eine Zahl um.
 */
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

    /*
     * Gedachte Leselinie leicht unterhalb
     * der Bildschirmmitte.
     */
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

    /*
     * Die Karte, deren Mittelpunkt der Leselinie
     * am nächsten liegt, wird hervorgehoben.
     */
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

/*
 * Diese Werte steuern das Verhalten zentral.
 *
 * Ein Exponent von 1 wäre vollständig linear.
 * Werte leicht über 1 sorgen für einen ruhigeren Start.
 */
const journeySettings = {
  activationLineRatio: 0.55,
  lineProgressExponent: 1.08,
  cardProgressExponent: 1.15,
  pageEndAssistDistanceRatio: 0.65
};

/**
 * Findet die sichtbare Inhaltskarte eines Journey-Elements.
 *
 * Bei manchen Bereichen liegt data-journey-item direkt
 * auf der Card. Bei section#rennen liegt es auf der Section.
 */
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

    /*
     * Die tatsächlichen Start- und Endwerte der
     * CSS-Grundlinie werden ausgelesen.
     */
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

    /*
     * Absolute Position des Linienanfangs
     * innerhalb des gesamten Dokuments.
     */
    const trackStart =
      scrollPosition +
      journeyRectangle.top +
      trackTopOffset;

    /*
     * Absolute Position des Linienendes
     * innerhalb des gesamten Dokuments.
     */
    const trackEnd =
      scrollPosition +
      journeyRectangle.bottom -
      trackBottomOffset;

    const trackLength = Math.max(
      trackEnd - trackStart,
      1
    );

    /*
     * Absolute Position der gedachten Leselinie.
     */
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

    /*
     * Leicht verlangsamter Verlauf zu Beginn.
     */
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

    /*
     * Am Seitenende fehlt natürlicherweise Scrollweg.
     * Erst im letzten Teil der Journey wird deshalb
     * ein sanfter Abschlussausgleich verwendet.
     */
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

    /*
     * Dieser Linienkopf ist die gemeinsame Grundlage
     * für Mittellinie, Kartenrahmen und aktive Station.
     */
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

    /*
     * Geometrie aller Journey-Cards
     * in absoluten Dokumentkoordinaten.
     */
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

    /*
     * Aktiv ist die letzte Karte,
     * deren Oberkante der Linienkopf erreicht hat.
     */
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
        /*
         * Der Rahmen beginnt erst, wenn der Linienkopf
         * die Oberkante der Karte erreicht.
         *
         * Dadurch kann sich der Kartenrahmen nicht mehr
         * vor der vertikalen Linie füllen.
         */
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

        /*
         * Der conic-gradient läuft gleichzeitig
         * nach links und rechts.
         *
         * 180 Grad pro Richtung ergeben
         * zusammen einen vollständigen Rahmen.
         */
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

        /*
         * Bei „Mein erstes Rennen“ liegt
         * aria-current korrekt auf section#rennen.
         */
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

  /*
   * Alle Scroll-Berechnungen werden über
   * einen gemeinsamen requestAnimationFrame gesteuert.
   */
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

startViewportUpdates([
  createTimelineUpdater(),
  createJourneyUpdater()
]);