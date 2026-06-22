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