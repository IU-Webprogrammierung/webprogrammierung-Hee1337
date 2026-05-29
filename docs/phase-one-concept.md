# Konzept Phase 1: Meine sportliche Laufbahn

## 1. Projektidee

Geplant ist ein scrollbarer Onepager über meine sportliche Laufbahn. Die Website zeigt meine Entwicklung vom Jugend-Mannschaftssport über CrossFit und Hyrox bis zum strukturierten Rennradtraining und meinem ersten Rennen.

Der Webauftritt soll persönlich, übersichtlich und responsive umgesetzt werden. Die Nutzer:innen sollen durch die Seite scrollen und die einzelnen sportlichen Stationen chronologisch nachvollziehen können.

## 2. Ziel der Website

Ziel der Website ist es, meine sportliche Entwicklung verständlich darzustellen und zu zeigen, wie sich meine Trainingsschwerpunkte über die Jahre verändert haben. Dabei soll deutlich werden, wie aus Mannschaftssport, funktionellem Training und Wettkampferfahrung ein stärker strukturierter Trainingsansatz im Rennradsport entstanden ist.

Die Seite soll nicht nur Informationen liefern, sondern auch als persönliche sportliche Geschichte funktionieren.

## 3. Zielgruppe

Die Website richtet sich an Tutor:innen, Kommiliton:innen und Personen, die sich für Sport, Training und persönliche Entwicklung interessieren. Da es sich um ein Studienprojekt handelt, soll die Seite außerdem zeigen, dass HTML-Struktur, Barrierefreiheit, Git-Workflow und responsive Planung bewusst berücksichtigt wurden.

## 4. Geplante Inhaltsbereiche

1. Header mit Seitentitel und Hauptnavigation
2. Hero-Bereich mit Einstiegsbild und kurzer Einführung
3. Das bin ich
4. Jugend: Handball und Fußball
5. CrossFit
6. Hyrox
7. Rennrad
8. Einblick ins strukturierte Rennradtraining
9. Mein erstes Rennen
10. Footer mit Impressum

## 5. Responsives Grundkonzept

Die Website wird als mobile-first Onepager geplant. Das bedeutet, dass die Inhalte zunächst für kleine Bildschirme sinnvoll untereinander angeordnet werden. Auf größeren Bildschirmen können die Bereiche später breiter dargestellt und teilweise als Karten oder Timeline-Elemente angeordnet werden.

Geplante Breakpoints:

- 360px bis 767px: einspaltige Darstellung, alle Inhaltsbereiche stehen chronologisch untereinander. Die Navigation soll in der mobilen Ansicht später als Burger-Menü umgesetzt werden, 
  damit sie wenig Platz einnimmt und trotzdem gut bedienbar bleibt.
- ab 768px: breitere Inhaltsfläche, die Navigation kann als horizontale Navigation dargestellt werden, einzelne Bereiche können optisch stärker getrennt werden.
- ab 1024px: sportliche Stationen können als Cards oder Timeline dargestellt werden, Trainingsbereich erhält mehr Platz für Listen oder Tabellen.
- bis 1920px: maximale Inhaltsbreite, damit Textzeilen gut lesbar bleiben und die Seite nicht über die gesamte Bildschirmbreite ausfranst.

## 6. Mobile-Skizze

Mobile Ansicht, 360px bis 767px:

┌─────────────────────────────┐
│ Skip-Link                   │
├─────────────────────────────┤
│ Header                      │
│ Seitentitel                 │
│ Burger-Menü                 │
├─────────────────────────────┤
│ Hero-Bereich                │
│ Überschrift                 │
│ Kurztext                    │
│ Hero-Bild                   │
├─────────────────────────────┤
│ Das bin ich                 │
│ Text                        │
├─────────────────────────────┤
│ Jugend: Handball/Fußball    │
│ Text                        │
├─────────────────────────────┤
│ CrossFit                    │
│ Text                        │
├─────────────────────────────┤
│ Hyrox                       │
│ Text                        │
├─────────────────────────────┤
│ Rennrad                     │
│ Text                        │
├─────────────────────────────┤
│ Strukturiertes Training     │
│ Text + Liste                │
├─────────────────────────────┤
│ Mein erstes Rennen          │
│ Text                        │
├─────────────────────────────┤
│ Footer / Impressum          │
└─────────────────────────────┘


## 7. Desktop-Skizze

Desktop Ansicht ab ca. 768px / 1024px:


┌──────────────────────────────────────────────┐
│ Header                                       │
│ Seitentitel                                  │
│ Navigation horizontal                        │
│ Das bin ich | Jugend | CrossFit | Hyrox      │
│ Rennrad | Training | Rennen | Impressum      │
├──────────────────────────────────────────────┤
│ Hero-Bereich                                 │
│ ┌──────────────────────────────────────────┐ │
│ │ Hero-Bild                                │ │
│ │ Überschrift + kurzer Einführungstext     │ │
│ └──────────────────────────────────────────┘ │
├──────────────────────────────────────────────┤
│ Hauptinhalt                                  │
│                                              │
│ ┌────────────────┐  ┌─────────────────────┐  │
│ │ Das bin ich    │  │ Jugend              │  │
│ │ Text           │  │ Text                │  │
│ └────────────────┘  └─────────────────────┘  │
│                                              │
│ ┌────────────────┐  ┌─────────────────────┐  │
│ │ CrossFit       │  │ Hyrox               │  │
│ │ Text           │  │ Text                │  │
│ └────────────────┘  └─────────────────────┘  │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Rennrad                                  │ │
│ │ Text, später ggf. Fahrrad-Infobox        │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Strukturiertes Rennradtraining           │ │
│ │ Text + Liste / später Tabelle            │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Mein erstes Rennen                       │ │
│ │ Text + spätere Learnings                 │ │
│ └──────────────────────────────────────────┘ │
├──────────────────────────────────────────────┤
│ Footer / Impressum                           │
└──────────────────────────────────────────────┘

## 8. Barrierefreiheit

Bereits in Phase 1 werden grundlegende Maßnahmen zur Barrierefreiheit berücksichtigt. Dazu gehören eine semantische HTML-Struktur mit `header`, `nav`, `main`, `section` und `footer`, die Sprachangabe `lang="de"`, ein Skip-Link zum Hauptinhalt und eine Hauptnavigation mit `aria-label`.

Die einzelnen Inhaltsbereiche werden mit `aria-labelledby` mit ihren sichtbaren Überschriften verbunden. Dadurch können assistive Technologien die Bereiche besser einordnen. Die Navigationslinks sind verständlich benannt und führen direkt zu den jeweiligen Bereichen des Onepagers.

In späteren Phasen werden weitere Maßnahmen ergänzt, zum Beispiel sichtbare Fokuszustände, ausreichende Farbkontraste, sinnvolle Alternativtexte für Bilder, responsive Bildgrößen und ein tastaturbedienbares Burger-Menü.

## 9. Git-Workflow

Das Projekt wird mit Git versioniert. Die Commit-Messages folgen festen Kategorien, damit der Entwicklungsprozess nachvollziehbar bleibt.

Verwendete Kategorien:

- `chore`: technische Aufgaben und Projektstruktur
- `feat`: neue Funktionen oder neue Seitenbereiche
- `content`: Inhalte und Texte
- `style`: CSS, Layout und visuelle Gestaltung
- `a11y`: Maßnahmen zur Barrierefreiheit
- `docs`: Dokumentation, Konzept und README
- `fix`: Fehlerbehebungen
- `refactor`: Codeverbesserungen ohne sichtbare Funktionsänderung

Die Commit-Legende ist zusätzlich in `docs/commit-guidelines.md` dokumentiert.


## 10. Zusammenfassende Konzeptbeschreibung

Die Konzeptbeschreibung ist im PDF enthalten

## 11 Einleitung

## Einleitung

Im Rahmen des Kurses „Projekt: Web-Programmierung“ wird ein persönlicher Webauftritt als statische Website mit HTML und CSS konzipiert und umgesetzt. Für dieses Projekt plane ich einen scrollbaren Onepager, der meine sportliche Laufbahn darstellt.

Der Schwerpunkt der Konzeptionsphase liegt auf der Planung der Inhalte, der semantischen HTML-Struktur, einer nachvollziehbaren Seitenordnung und der frühen Berücksichtigung von Barrierefreiheit. Die Website soll später responsive gestaltet werden und sowohl auf mobilen Geräten als auch auf größeren Bildschirmen gut nutzbar sein.

Inhaltlich erzählt die Seite meine Entwicklung vom Jugend-Mannschaftssport über CrossFit und Hyrox bis hin zum strukturierten Rennradtraining und meinem ersten Rennen. Das Konzept beschreibt die geplanten Inhaltsbereiche, die mobile und desktopbasierte Anordnung, den Barrierefreiheitsansatz sowie den eingesetzten Git-Workflow.