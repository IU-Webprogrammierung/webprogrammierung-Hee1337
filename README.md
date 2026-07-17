# Meine sportliche Laufbahn

Responsiver Onepager über meine sportliche Entwicklung: vom Jugend-Mannschaftssport über CrossFit und Hyrox bis zum strukturierten Rennradtraining, dem ersten Radrennen und der nächsten geplanten Etappe.

Das Projekt entstand im Rahmen des IU-Kurses **Projekt: Web-Programmierung (DLBUXPWP01)**. Es wurde ohne CSS- oder JavaScript-Framework umgesetzt. Der Schwerpunkt liegt auf semantischem HTML, responsivem CSS, nachvollziehbarer Komponentenstruktur, Barrierefreiheit und gezielt eingesetztem Vanilla JavaScript.

## Projektziel

Die Website soll meine sportliche Laufbahn als zusammenhängende Entwicklung erzählen und nicht nur einzelne Inhalte nebeneinanderstellen. Besucher:innen sollen sich auf Geräten zwischen 360px und 1920px orientieren können, alle Inhalte per Tastatur erreichen und zentrale Interaktionen auch ohne zusätzliche Bibliotheken nutzen können.

Die Gestaltung folgt einem dunklen Portfolio-Theme. Akzentlinien, aktive Rahmen und scrollabhängige Zustände verbinden die einzelnen Abschnitte zu einer visuellen Reise.

## Finaler Seitenaufbau

1. Header mit Logo und responsiver Hauptnavigation
2. Hero mit responsiven Bildvarianten und Sprungmarken
3. „Das bin ich“ mit Portrait und persönlicher Einführung
4. sportliche Timeline mit Handball, CrossFit, Hyrox und Rennrad
5. interaktives Rennrad-Setup mit Hotspots
6. strukturierter Trainingsbereich mit semantischer Tabelle und PDF-Download
7. Trainings-Glossar mit nativen `details`- und `summary`-Elementen
8. „Mein erstes Rennen“
9. Abschlussbereich „Die nächste Etappe“ mit Fahrradstrecke und Formular-Demo
10. Footer mit Impressum, Kontakt und ergänzender Navigation

## Zentrale Funktionen

### Responsiver Hero

- Desktop- und Mobilbild werden mit `picture` und `source` gewechselt.
- Die mobile Bildvariante zeigt vier großflächige Sport-Cards.
- Auf der mobilen Bildvariante erscheinen dauerhafte CTAs „Zur Station“, weil Touchgeräte keinen verlässlichen Hover-Hinweis bieten.
- Ab 768px bleiben die kompakteren Sprungmarken ohne CTA erhalten.
- Header und Hero nutzen auf Desktop dieselbe maximale Inhaltsbreite und gemeinsame Fluchtlinien.

### Scroll-Orientierung vor der Timeline

Hero und „Das bin ich“ erhalten abhängig von einer gedachten Leselinie einen aktiven Rahmenzustand. Dadurch beginnt die Orientierung bereits am Seitenanfang.

Oberhalb der eigentlichen Timeline wird bewusst keine vertikale Linie eingesetzt, weil Hero und Vorstellung keine chronologischen Stationen darstellen. Die optische Sprache bleibt durch Akzentrahmen und Schatten dennoch einheitlich.

### Sportliche Timeline

- vertikale Grundlinie mit farbigem Scrollfortschritt
- Marker für jede sportliche Station
- einspaltige Darstellung auf Smartphone und Tablet
- ab 1024px wechselnde Cards links und rechts der Mittellinie
- scrollabhängige aktive Station
- Weiterführung der visuellen Reise über Setup, Training, Glossar und Rennen

### Erweiterte Journey

Die Bereiche unterhalb der Haupt-Timeline werden durch `.journey-continuation` verbunden.

- `data-journey-item` markiert die weiterführenden Stationen.
- Eine gemeinsame JavaScript-Berechnung steuert die vertikale Fortschrittslinie, den aktiven Zustand und die umlaufenden Kartenrahmen.
- Linie und Karten verwenden denselben berechneten Linienkopf, damit keine Card vorzeitig animiert.
- Die letzte Renn-Card wird trotz begrenztem Scrollweg am Seitenende vollständig abgeschlossen.

### Rennrad-Setup

Das Rennradbild enthält fünf echte `button`-Elemente als Hotspots.

Beim Aktivieren eines Hotspots:

- wird die Detailkarte aktualisiert,
- erhält der ausgewählte Button den aktiven Zustand,
- wird `aria-pressed` angepasst,
- informiert `aria-live="polite"` über den neuen Inhalt.

### Trainingsbereich und Glossar

- semantische Tabelle mit `caption`, `thead`, `tbody`, `th` und `scope`
- horizontal scrollbar auf kleinen Displays
- Download-Link zu einem beispielhaften Trainingsplan
- Glossar mit nativen `details` und `summary`
- sichtbare Offen-, Hover- und Fokuszustände

### Abschlussbereich „Die nächste Etappe“

Nach „Mein erstes Rennen“ führt die Seite nicht abrupt in den Footer, sondern zu einem interaktiven Ausblick.

- dekoratives Rennrad-SVG auf einer horizontalen Strecke
- Fahrradposition und Linienfüllung reagieren proportional auf den Scrollfortschritt
- die äußere Kontakt-Card wird mit dem Fortschritt stufenlos heller
- beim Erreichen des Ziels wird der innere Formularkasten hervorgehoben
- die vertikale Journey führt optisch bis zum Abschlussbereich, verschwindet aber hinter dessen Card
- die horizontale Fahrradstrecke übernimmt anschließend die visuelle Führung

### Kontaktformular als lokale Demo

Das Formular demonstriert native HTML-Validierung und eine lokale JavaScript-Reaktion.

Felder:

- Name, Pflichtfeld
- E-Mail-Adresse, optional
- Themenauswahl, Pflichtfeld
- Tipp mit Mindestlänge, Pflichtfeld

Beim Absenden:

- wird die Standardübertragung verhindert,
- erscheint eine Erfolgsmeldung über `aria-live="polite"`,
- werden die Felder zurückgesetzt.

**Es werden keine Daten gesendet, gespeichert oder an externe Dienste übertragen.**

## Eingesetzte Technologien und Methoden

### HTML

- semantische Elemente: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer`, `address`
- responsive Bilder mit `picture` und `source`
- native Interaktionen mit `details` und `summary`
- Formularfelder mit Labels, Pflichtfeldern, `type="email"` und `minlength`
- Tabelle mit semantischer Kopfstruktur
- Download-Attribut für den Trainingsplan
- ARIA nur dort, wo native Semantik ergänzt werden muss

### CSS

- CSS-Variablen für Farben, Abstände, Breiten, Radien und Übergänge
- Mobile-first-Ansatz
- CSS Grid und Flexbox
- komponentenbezogenes natives CSS-Nesting
- Media Queries direkt innerhalb der betroffenen Komponenten
- `clamp()`, `min()`, `max-width`, `aspect-ratio` und `object-fit`
- Pseudoelemente für Timeline, Journey, Rahmen und Linienfüllungen
- `conic-gradient` mit Maskierung für umlaufende Journey-Rahmen
- `:focus-visible`, `:active`, `:has()` und Zustandsklassen
- `prefers-reduced-motion` für reduzierte Bewegung

### JavaScript

Vanilla JavaScript ohne externe Bibliotheken.

Die Datei `js/main.js` ist funktional gegliedert in:

- gemeinsame Hilfsfunktionen wie `clamp()`
- Rennrad-Hotspots
- lokale Kontaktformular-Demo
- Intro-Scrollzustände
- Haupt-Timeline
- erweiterte Journey
- scrollabhängige Kontaktstrecke
- gemeinsame Scroll- und Resize-Steuerung

Scrollabhängige Berechnungen werden über einen gemeinsamen `requestAnimationFrame`-Mechanismus gebündelt. Dadurch werden Timeline, Journey und Kontaktanimation nicht über mehrere konkurrierende Scroll-Listener aktualisiert.

## Responsive Verhalten

Verwendete Hauptbereiche:

- **bis 767px:** mobile Hero-Bildvariante, Toggle-Navigation, große Touch-Cards mit CTA, einspaltige Inhaltsbereiche
- **ab 768px:** horizontale Navigation, breite Hero-Variante, kompakte Sprungmarken
- **768px bis 1199px:** angepasste Hero-Höhe und Bildposition für Tablet und kleine Laptops
- **ab 1024px:** wechselnde Timeline-Cards, zweispaltiges Rennrad-Setup, mehrspaltiger Footer
- **ab 1200px:** vollständige Desktop-Hero-Anordnung
- **ab 1440px:** begrenzte Inhaltsbreite für bessere Lesbarkeit
- **bis 1920px:** zentrierte Maximalbreite statt unkontrolliert wachsender Textzeilen

## Barrierefreiheit

Umgesetzt wurden unter anderem:

- `lang="de"`
- sichtbarer Skip-Link zum Hauptinhalt
- semantische Überschriftenhierarchie
- `aria-label` für Navigationen
- `aria-labelledby` für Sections
- aussagekräftige Alternativtexte
- dekoratives Fahrrad-SVG mit leerem `alt`
- echte Links und Buttons statt klickbarer `div`-Elemente
- sichtbare Tastaturfokuszustände
- native Formularvalidierung
- `aria-pressed` bei Hotspots
- `aria-live="polite"` für Detailkarte und Formularstatus
- `aria-current="step"` für die aktive Journey-Station
- ausreichend große mobile Touchflächen
- vollständig verständliche Inhalte ohne JavaScript
- reduzierte Bewegung über `prefers-reduced-motion: reduce`

Bei reduzierter Bewegung:

- wird weiches Scrollen deaktiviert,
- entfallen Puls-, Pop- und Übergangsanimationen,
- wechseln aktive Zustände ohne Überblendung,
- steht das Kontaktfahrrad direkt am Ziel,
- ist die horizontale Strecke vollständig gefüllt.

## Wichtige Refactorings und Designentscheidungen

- Der Hero wurde von einer fast randlosen Fullscreen-Fläche zu einer begrenzten Portfolio-Bühne umgebaut.
- Der Desktop-Breakpoint des Hero wurde wegen ungünstiger Bildausschnitte von 1024px auf 1200px verschoben.
- Wiederkehrende CSS-Werte wurden zentralisiert.
- Media Queries wurden aus globalen Sammelblöcken in die jeweiligen Komponenten verschoben.
- Doppelte und widersprüchliche CSS-Regeln wurden entfernt.
- Timeline und Journey wurden von getrennten Scrollberechnungen auf einen gemeinsamen Fortschrittsansatz umgestellt.
- Mobile CTAs wurden ergänzt, weil Hover auf Touchgeräten keine verlässliche Bedieninformation liefert.
- Die CTAs wurden auf die mobile Hero-Bildvariante begrenzt. In der breiten Bildvariante bleiben die kompakteren Linien und Fokuszustände erhalten.
- Der mobile Zierstrich wurde entfernt, weil der CTA dieselbe Funktion klarer übernimmt.
- Der Kontaktbereich war zunächst als weitere Journey-Card mit umlaufendem Rahmen geplant. Diese Lösung wurde verworfen, weil vertikale Linie, umlaufender Rahmen und Fahrradstrecke gleichzeitig zu überladen wirkten.
- Die finale Lösung nutzt die vertikale Linie nur als Übergang. Die äußere Card hellt sich proportional zur Fahrradfahrt auf, und das Formular wird erst im Ziel hervorgehoben.
- Eine einmalige Fahrradfahrt per `IntersectionObserver` wurde durch eine echte scrollgebundene Bewegung ersetzt. Dadurch bleibt die Animation kontrollierbar und läuft beim Zurückscrollen nachvollziehbar zurück.

## Projektstruktur

```text
.
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── downloads/
│   │   └── beispiel-trainingsplan.pdf
│   ├── icons/
│   │   └── rad-icon.svg
│   └── images/
├── docs/
│   ├── commit-guidelines.md
│   ├── phase-two-concept.md
│   └── phase-three-concept.md
└── .git/
```

## Git-Workflow

Die Entwicklung wurde mit Git und GitHub dokumentiert. Änderungen wurden in kleine, nachvollziehbare Arbeitsschritte aufgeteilt.

Verwendete Kategorien:

- `chore:` technische Aufgaben und Projektstruktur
- `feat:` neue Funktionen oder Seitenbereiche
- `content:` Inhalte und Texte
- `style:` visuelle Gestaltung
- `a11y:` Barrierefreiheit
- `docs:` Dokumentation
- `fix:` Fehlerbehebungen
- `refactor:` strukturelle Verbesserungen ohne vollständige Neuentwicklung

Die Commit-Konventionen sind zusätzlich in `docs/commit-guidelines.md` dokumentiert.

## Testplan vor der finalen Abgabe

Die finale Abnahme umfasst:

- Darstellungsprüfung bei 360px, 767px, 768px, 1024px, 1199px, 1200px, 1440px und 1920px
- mobile und Desktop-Navigation
- alle Sprungmarken
- Skip-Link
- vollständige Tastaturbedienung
- sichtbare Fokuszustände
- Rennrad-Hotspots
- Trainings-Glossar
- Trainingsplan-Download
- Haupt-Timeline
- Journey-Linie und Kartenrahmen
- Kontaktstrecke und Zielzustand
- native Formularvalidierung und Erfolgsmeldung
- `prefers-reduced-motion: reduce`
- JavaScript-Konsole
- ungenutzte Dateien
- finaler Git-Status

Die konkreten Testergebnisse werden vor der Abgabe abschließend dokumentiert.

## Lokale Nutzung

Das Projekt benötigt keinen Build-Prozess und keine Paketinstallation.

1. Projektordner lokal öffnen.
2. `index.html` über einen lokalen Entwicklungsserver starten, zum Beispiel mit VS Code Live Server.
3. Alternativ kann die Datei direkt im Browser geöffnet werden. Für ein konsistentes Verhalten wird ein lokaler Server empfohlen.

## Bekannte Grenze

Das Kontaktformular ist absichtlich eine lokale Portfolio-Demonstration. Ohne Backend oder externen Formulardienst können keine echten Nachrichten übertragen werden.