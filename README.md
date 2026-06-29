# Meine sportliche Laufbahn

Dieses Projekt entsteht im Rahmen des Kurses **Projekt: Web-Programmierung**.

Geplant und umgesetzt wird ein scrollbarer Onepager über meine sportliche Entwicklung: von Jugend-Mannschaftssport über CrossFit und Hyrox bis zum strukturierten Rennradtraining und meinem ersten Rennen.

Der Webauftritt wird als statische Website mit HTML, CSS und kleinem Vanilla JavaScript umgesetzt.

## Projektstand Phase 1

In Phase 1 wurde die Grundlage des Projekts erstellt.

Umgesetzt wurden:

* GitHub-Repository eingerichtet
* Projektstruktur angelegt
* semantisches HTML-Grundgerüst erstellt
* Navigation mit Sprungmarken eingebaut
* erste Inhaltsbereiche angelegt
* Hero-Bereich angelegt
* Commit-Guideline in `docs/commit-guidelines.md` dokumentiert
* erste Maßnahmen zur Barrierefreiheit berücksichtigt
* Konzeptdokument für Phase 1 erstellt

## Projektstand Phase 2

In Phase 2 wurde der HTML-Prototyp gestalterisch, strukturell und technisch deutlich erweitert. Der Fokus lag auf responsivem Design, besserer Navigation, konkreteren Komponenten und einer reicheren HTML-Struktur.

Umgesetzt wurden:

* responsiver Hero-Bereich mit eigener mobiler Bildvariante
* klickbare Hero-Overlays als Sprungmarken zu den Sportstationen
* verschlankte Hauptnavigation mit mobilem Toggle-Menü
* Desktop-Navigation mit Trennstrichen
* „Das bin ich“-Bereich als Card mit Portrait
* sportliche Laufbahn als responsive Card-/Timeline-Struktur
* Rennrad-Setup als interaktive Komponente mit Hotspots
* Trainingsbereich mit semantischer Tabelle
* Download-Link für einen beispielhaften Trainingsplan
* Trainings-Glossar mit `details` und `summary`
* Footer mit Impressum, Projektinfo und ergänzender Navigation
* sichtbare Hover- und Fokuszustände
* responsive Darstellung für Smartphone, Tablet und Desktop
* überarbeitete Konzeptdokumentation für Phase 2

## Seitenbereiche

Der Onepager besteht aktuell aus folgenden Hauptbereichen:

1. Hero-Bereich
2. Das bin ich
3. Meine sportlichen Stationen
4. Mein Rennrad-Setup
5. Einblick ins strukturierte Rennradtraining
6. Trainings-Glossar
7. Mein erstes Rennen
8. Footer / Impressum

## Responsive Umsetzung

Die Website wird mobile-first umgesetzt.

Verwendete Breakpoints:

* bis 767px: Smartphone-Ansicht mit einspaltigem Layout und mobilem Menü
* ab 768px: Tablet-Ansicht mit horizontaler Navigation und zweispaltigen Bereichen
* ab 1024px: Desktop-Ansicht mit stärkerer Layoutstruktur
* ab 1440px: große Desktop-Ansicht mit begrenzter Inhaltsbreite für bessere Lesbarkeit

Für den Hero-Bereich wird zusätzlich eine eigene mobile Bildvariante verwendet, damit die Bildinhalte auf kleinen Bildschirmen nicht ungünstig abgeschnitten werden.

## Barrierefreiheit

Bereits in Phase 1 wurden grundlegende Aspekte der Barrierefreiheit berücksichtigt. In Phase 2 wurden diese Punkte weitergeführt und erweitert.

Berücksichtigt wurden unter anderem:

* Sprachangabe im HTML-Dokument über `lang="de"`
* semantische Seitenstruktur mit `header`, `nav`, `main`, `section`, `article`, `aside` und `footer`
* Hauptnavigation mit `aria-label`
* Skip-Link zum Hauptinhalt
* eindeutige Abschnittsüberschriften
* Verknüpfung von Abschnitten und Überschriften mit `aria-labelledby`
* Bilder mit beschreibenden `alt`-Texten
* echte Links und Buttons statt rein dekorativer Interaktion
* sichtbare Fokuszustände
* tastaturbedienbare Navigation
* aufklappbares Trainings-Glossar mit nativen HTML-Elementen
* interaktive Rennrad-Hotspots als echte `button`-Elemente

## Technologien

Verwendet werden:

* HTML5
* CSS3
* CSS Grid
* Flexbox
* Media Queries
* CSS-Variablen
* Vanilla JavaScript
* Git / GitHub

Es werden bewusst keine CSS-Frameworks wie Bootstrap oder Tailwind eingesetzt. Der Fokus liegt auf eigener HTML- und CSS-Umsetzung.

## JavaScript

JavaScript wird aktuell gezielt für die interaktive Rennrad-Setup-Komponente eingesetzt.

Beim Klick auf einen Hotspot wird:

* die Detailkarte aktualisiert
* der aktive Hotspot visuell markiert
* der Zustand über `aria-pressed` angepasst

Die Hauptnavigation und das Trainings-Glossar funktionieren ohne JavaScript über native HTML-Elemente.

## Projektstruktur

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── downloads/
├── docs/
│   ├── commit-guidelines.md
│   └── phase-two-concept.md
└── README.md
```

## Git-Workflow

Der Entwicklungsprozess wird mit Git dokumentiert. Die Commit-Messages folgen festen Kategorien, damit Änderungen nachvollziehbar bleiben:

* `chore:` technische Aufgaben und Projektstruktur
* `feat:` neue Funktionen oder Seitenbereiche
* `content:` Inhalte und Texte
* `style:` CSS und Gestaltung
* `a11y:` Barrierefreiheit
* `docs:` Dokumentation und Konzept
* `fix:` Fehlerbehebungen
* `refactor:` Codeverbesserungen ohne sichtbare Funktionsänderung

Die Commit-Legende ist zusätzlich in `docs/commit-guidelines.md` dokumentiert.

## Status und Ausblick

Phase 2 ist technisch weitgehend umgesetzt. Der aktuelle Stand umfasst responsives Design, erweiterte HTML-Struktur, CSS-Layout, interaktive Elemente und eine überarbeitete Konzeptdokumentation.

In Phase 3 können weitere Verfeinerungen folgen, zum Beispiel zusätzliche Animationen, finale Bildoptimierung, weitere JavaScript-Interaktionen oder eine separate Impressumsseite.
