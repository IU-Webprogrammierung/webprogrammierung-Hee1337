# Meine sportliche Laufbahn

Dieses Projekt entsteht im Rahmen des Kurses Projekt: Web-Programmierung.

Geplant ist ein scrollbarer Onepager über meine sportliche Entwicklung: von Jugend-Mannschaftssport über CrossFit und Hyrox bis zum strukturierten Rennradtraining und meinem ersten Rennen.

## Projektstand Phase 1

- GitHub-Repository eingerichtet
- Projektstruktur angelegt
- semantisches HTML-Grundgerüst erstellt
- Navigation mit Sprungmarken eingebaut
- erste Inhaltsbereiche angelegt
- Hero-Bereich angelegt
- Commit-Guideline in docs/commit-guidelines.md dokumentiert
- erste Maßnahmen zur Barrierefreiheit berücksichtigt

## Barrierefreiheit

Bereits in Phase 1 werden grundlegende Aspekte der Barrierefreiheit berücksichtigt:

- Sprachangabe im HTML-Dokument über `lang="de"`
- semantische Seitenstruktur mit `header`, `main`, `section` und `footer`
- Hauptnavigation mit `aria-label`
- Skip-Link zum Hauptinhalt
- eindeutige Abschnittsüberschriften
- Verknüpfung von Abschnitten und Überschriften mit `aria-labelledby`
- Bild mit beschreibendem `alt`-Text
- gezielte Kommentare im HTML-Code zu Barrierefreiheitsentscheidungen

## Git-Workflow

Der Entwicklungsprozess wird mit Git dokumentiert. Die Commit-Messages folgen festen Kategorien, damit Änderungen nachvollziehbar bleiben:

- `chore:` technische Aufgaben und Projektstruktur
- `feat:` neue Funktionen oder Seitenbereiche
- `content:` Inhalte und Texte
- `style:` CSS und Gestaltung
- `a11y:` Barrierefreiheit
- `docs:` Dokumentation und Konzept
- `fix:` Fehlerbehebungen
- `refactor:` Codeverbesserungen ohne sichtbare Funktionsänderung