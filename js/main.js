const bikeParts = {
  di2: {
    title: "Shimano 105 Di2",
    text: "Die elektronische Shimano 105 Di2 sorgt für präzise Schaltvorgänge und unterstützt ein gleichmäßiges Fahren bei wechselnden Belastungen. Gerade bei Intervallen und langen Ausfahrten hilft die zuverlässige Schaltung, den Rhythmus sauber zu halten."
  },
  wheels: {
    title: "Carbon-Laufräder",
    text: "Die Carbon-Laufräder verbessern die Aerodynamik und geben dem Rad bei höherer Geschwindigkeit ein direkteres Fahrgefühl. Besonders auf flachen und schnellen Abschnitten machen sich tiefe Felgen durch mehr Laufruhe bemerkbar."
  },
  tires: {
    title: "Reifen",
    text: "Die Reifen beeinflussen Komfort, Grip und Rollwiderstand. Für längere Ausfahrten und sportliches Training ist ein guter Reifen wichtig, weil er Sicherheit, Effizienz und Fahrgefühl direkt beeinflusst."
  },
  powermeter: {
    title: "Powermeter",
    text: "Das Powermeter misst die getretene Leistung in Watt. Dadurch kann das Training genauer gesteuert werden als nur über Geschwindigkeit oder Gefühl. Besonders Intervalle, Sweetspot-Einheiten und FTP-Tests werden dadurch vergleichbarer."
  },
  brakes: {
    title: "Scheibenbremsen",
    text: "Scheibenbremsen bieten kontrollierbare Bremsleistung bei unterschiedlichen Wetterbedingungen. Gerade bei längeren Abfahrten oder nasser Straße geben sie zusätzliche Sicherheit und ein konstantes Bremsgefühl."
  }
};

const hotspotButtons = document.querySelectorAll(".bike-hotspot");
const detailTitle = document.querySelector("#bike-detail-title");
const detailText = document.querySelector("#bike-detail-text");
const detailCard = document.querySelector("#bike-detail-card");

hotspotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPart = button.dataset.bikePart;
    const partData = bikeParts[selectedPart];

    if (!partData || !detailTitle || !detailText || !detailCard) {
      return;
    }

    detailTitle.textContent = partData.title;
    detailText.textContent = partData.text;

    hotspotButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");

    detailCard.classList.remove("is-visible");
    void detailCard.offsetWidth;
    detailCard.classList.add("is-visible");
  });
});

/* Scroll-aktive Timeline: aktualisiert Fortschrittslinie und aktive Station. */
const timelineSection = document.querySelector("[data-timeline]");
const timelineGrid = timelineSection?.querySelector(".timeline-grid");
const timelineItems = timelineSection
  ? [...timelineSection.querySelectorAll("[data-timeline-item]")]
  : [];

if (timelineSection && timelineGrid && timelineItems.length > 0) {
  let updateRequested = false;

  const clamp = (value, minimum, maximum) => {
    return Math.min(Math.max(value, minimum), maximum);
  };

  const updateTimeline = () => {
    const gridRectangle = timelineGrid.getBoundingClientRect();

    /*
     * Die Aktivierungslinie liegt leicht unterhalb der Bildschirmmitte.
     * Dadurch wird eine Station hervorgehoben, sobald sie gut lesbar ist.
     */
    const activationLine = window.innerHeight * 0.55;

    /*
     * Der Fortschritt ergibt sich aus der Position der Aktivierungslinie
     * innerhalb des gesamten Timeline-Grids.
     */
    const progress = clamp(
      (activationLine - gridRectangle.top) /
        Math.max(gridRectangle.height, 1),
      0,
      1
    );

    timelineGrid.style.setProperty(
      "--timeline-progress",
      `${progress * 100}%`
    );

    /*
     * Aktiv wird die Station, deren Mittelpunkt der Aktivierungslinie
     * aktuell am nächsten liegt.
     */
    let activeItem = timelineItems[0];
    let smallestDistance = Number.POSITIVE_INFINITY;

    timelineItems.forEach((item) => {
      const itemRectangle = item.getBoundingClientRect();
      const itemCenter =
        itemRectangle.top + itemRectangle.height / 2;
      const distance = Math.abs(itemCenter - activationLine);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        activeItem = item;
      }
    });

    timelineItems.forEach((item) => {
      item.classList.toggle("is-active", item === activeItem);
    });

    updateRequested = false;
  };

  /*
   * requestAnimationFrame verhindert unnötig viele Berechnungen
   * während eines einzelnen Scrollvorgangs.
   */
  const requestTimelineUpdate = () => {
    if (updateRequested) {
      return;
    }

    updateRequested = true;
    window.requestAnimationFrame(updateTimeline);
  };

  window.addEventListener("scroll", requestTimelineUpdate, {
    passive: true
  });

  window.addEventListener("resize", requestTimelineUpdate);

  requestTimelineUpdate();
}