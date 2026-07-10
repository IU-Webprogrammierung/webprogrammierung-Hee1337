# Konzeptfortschreibung Phase 3: Meine sportliche Laufbahn

## 1. Zweck und Leitgedanke

Die Phase-3-Version baut auf dem in Phase 2 umgesetzten responsiven Onepager „Meine sportliche Laufbahn“ auf. Die bestehende Struktur, die Inhalte und die bereits funktionsfähigen Komponenten bleiben die Grundlage. Phase 3 dient nicht dazu, den Webauftritt neu zu entwerfen, sondern den vorhandenen Stand gezielt zu finalisieren, technisch zu überarbeiten und um zusätzliche Darstellungs- und Interaktionsformen zu ergänzen.

Der zentrale Leitgedanke bleibt:

> Das Konzept soll so konkret aufgebaut sein, dass eine externe Agentur die Website anhand der Beschreibung nachvollziehen und funktional nachbauen könnte.

Deshalb dokumentiert diese Konzeptfortschreibung bei jeder tatsächlich vorgenommenen Änderung:

- welches Problem oder welcher Verbesserungsbedarf bestand,
- warum die Änderung vorgenommen wurde,
- wie sie technisch umgesetzt wurde,
- wie sich die Änderung auf unterschiedliche Bildschirmgrößen auswirkt.

Die vollständige Komponenten- und Inhaltsbeschreibung der Website bleibt im Phase-2-Konzept erhalten. Dieses Dokument beschreibt ergänzend den geplanten Ablauf der Finalisierung und anschließend die tatsächliche Umsetzung der einzelnen Phase-3-Arbeitsschritte.

---

## 2. Geplanter Ablauf der Finalisierung

Die Finalisierung erfolgt in einer festen Reihenfolge. Zuerst werden bestehende Darstellungs- und Strukturprobleme behoben. Danach werden neue Interaktionen ergänzt und abschließend Tests, README und Abgabeunterlagen vorbereitet.

### 2.1 Hero-Bereich überarbeiten

Der Hero soll weniger randlos und weniger fullscreenartig wirken. Dafür werden Breite, Höhe, Rahmen, Abstände, Textgröße und Breakpoints überprüft. Ziel ist eine kontrollierte visuelle Einstiegsfläche, die weiterhin prägnant bleibt, aber die übrigen Inhalte nicht verdrängt.

### 2.2 CSS-Struktur refaktorieren

Die CSS-Datei wird strukturell überarbeitet. Wiederkehrende Werte sollen als Variablen zentral gepflegt, doppelte oder widersprüchliche Regeln entfernt und Media Queries den jeweiligen Komponenten zugeordnet werden. Natives CSS-Nesting wird gezielt dort eingesetzt, wo es die Lesbarkeit verbessert.

### 2.3 Bilddateien und Bilddarstellung prüfen

Die tatsächlich eingebundenen Bilddateien werden hinsichtlich Dateigröße, Einbindung und sichtbarer Wirkung kontrolliert. Eine weitere Komprimierung erfolgt nur, wenn sie technisch sinnvoll ist. Bereits ausreichend reduzierte Dateien werden nicht ohne erkennbaren Nutzen erneut bearbeitet.

### 2.4 Timeline visuell weiterentwickeln

Die bestehende Card-Struktur der sportlichen Stationen wird zu einer deutlicher erkennbaren Timeline ausgebaut. Linie, Marker und aktive Zustände sollen den chronologischen Verlauf besser darstellen, ohne die Lesbarkeit der Texte zu verschlechtern.

### 2.5 Scroll-aktive Timeline ergänzen

Die Timeline soll beim Scrollen den aktuellen Fortschritt anzeigen. JavaScript berechnet dafür den Fortschritt innerhalb des Timeline-Bereichs und markiert die aktuell sichtbare Station. Die Inhalte müssen auch ohne JavaScript vollständig verständlich bleiben.

### 2.6 Micro-Animationen gezielt einsetzen

Hover-, Fokus- und Zustandswechsel werden dort verfeinert, wo sie eine klare Bedienrückmeldung geben. Animationen werden dezent gehalten und über `prefers-reduced-motion` reduziert oder deaktiviert.

### 2.7 Tests, README und finale Abgabe vorbereiten

Zum Abschluss wird die Website zwischen 360px und 1920px geprüft. Zusätzlich werden Tastaturbedienung, reduzierte Bewegung, JavaScript-Funktionalität und zentrale Links getestet. Die README wird um die tatsächlich eingesetzten Technologien, Methoden, Refactorings und Tests ergänzt. Danach werden Screenshot-PDF und ZIP-Datei inklusive `.git`-Ordner vorbereitet.

---

## 3. Ausgangsstand zu Beginn von Phase 3

Die Phase-2-Version ist ein statischer, responsiver Onepager mit HTML, CSS und kleinem Vanilla JavaScript. Sie enthält folgende Hauptbereiche:

1. Header mit Logo und Hauptnavigation,
2. Hero-Bereich mit responsiven Bildvarianten und Sprungmarken,
3. persönliche Vorstellung „Das bin ich“,
4. sportliche Laufbahn mit vier Stationen,
5. interaktives Rennrad-Setup mit Hotspots,
6. Trainingsbereich mit semantischer Tabelle und Download-Link,
7. Trainings-Glossar mit `details` und `summary`,
8. Bereich „Mein erstes Rennen“,
9. Footer mit Impressum, Kontakt und ergänzender Navigation.

Bereits eingesetzt werden unter anderem semantische HTML-Strukturelemente, CSS Grid, Flexbox, Media Queries, CSS-Variablen, responsive Bildvarianten über `picture`, native HTML-Interaktionen und Vanilla JavaScript für das Rennrad-Setup.

Das Feedback nach Phase 2 wurde als Grundlage für die Finalisierung genutzt. Besonders geprüft werden sollten die Wirkung des Hero-Bereichs, die Größe beziehungsweise Darstellung der Bilder, die Struktur der CSS-Datei und der sinnvolle Einsatz zusätzlicher Animationen.

---

## 4. Umsetzung der Phase-3-Arbeitsschritte

### 4.1 Überarbeitung des Hero-Bereichs

#### Ausgangsproblem

Der Hero lief in der Phase-2-Version nahezu randlos über die gesamte Browserbreite. Zusätzlich war die Bildhöhe sehr groß und orientierte sich stark an der Viewporthöhe. Dadurch wirkte der Bereich eher wie eine fullscreenartige Startseite als wie ein kontrollierter Bestandteil eines persönlichen Portfolios.

Die Überschrift nahm außerdem einen großen Teil der Bildfläche ein. Bei ungefähr 1024px Breite wurde bereits die Desktop-Darstellung aktiviert. In diesem Bereich entstand ein ungünstiger Bildausschnitt, bei dem Teile der Collage deutlich abgeschnitten wurden.

#### Begründung der Änderung

Der Hero soll weiterhin den stärksten visuellen Einstieg bilden, aber die weiteren Inhalte nicht unnötig verdrängen. Das Bild soll innerhalb einer klar abgegrenzten Fläche erscheinen. Text, Bild und Sprungmarken sollen ausgewogener wirken. Die Breakpoints sollen sich an der tatsächlichen Bildwirkung orientieren und nicht nur an einer pauschalen Einteilung in Tablet und Desktop.

#### Technische Umsetzung

Der Hero wurde von einer randlosen Fläche zu einer zentrierten Portfolio-Bühne umgebaut. Dafür wurden folgende Änderungen vorgenommen:

- Begrenzung der Breite auf die allgemeine Inhaltsbreite,
- automatisches Zentrieren über horizontale Außenabstände,
- zusätzlicher Abstand zwischen Header und Hero,
- sichtbarer Rahmen,
- eigener Border-Radius,
- dunkler Schatten zur Abgrenzung vom Seitenhintergrund,
- reduzierte maximale Bildhöhe,
- kleinere responsive Überschrift.

Die zentrale Grundstruktur lautet:

```css
#hero {
  position: relative;
  width: var(--content-width);
  margin: 1.5rem auto var(--spacing-section);
  overflow: hidden;
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-hero);
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.45);
}

.hero-image {
  display: block;
  width: 100%;
  height: clamp(30rem, 68vh, 48rem);
  object-fit: cover;
  object-position: center center;
}
```

Die Größe der Headline wurde über kleinere `clamp()`-Werte reduziert. Dadurch bleibt sie deutlich sichtbar, nimmt aber nicht mehr den größten Teil der Bildfläche ein.

#### Anpassung der Breakpoints

Die vorherige Desktop-Umschaltung bei 1024px führte zu einem ungünstigen Beschnitt der Collage. Deshalb wurden die mittleren Hero-Regeln erweitert:

- Der Tablet- und Laptopbereich reicht nun bis 1199px.
- Die Desktop-Darstellung beginnt erst ab 1200px.
- Zwischen 768px und 1199px wird eine angepasste Bildhöhe verwendet.

Damit bleibt die Bildkomposition bei 1024px besser erhalten.

#### Responsives Verhalten

- **360px bis 767px:** hochformatige mobile Bildvariante, mobile Headline und vier große klickbare Sprungflächen.
- **768px bis 1199px:** angepasste Bildhöhe, kompaktere Positionierung und weniger starker Beschnitt.
- **Ab 1200px:** Desktop-Overlay mit positionierter Headline und Sprungmarken.
- **Ab 1440px:** kontrollierte Skalierung innerhalb der maximalen Inhaltsbreite.

#### Ergebnis

Der Hero wirkt weiterhin prägnant, ist aber klarer in das Gesamtlayout eingebunden. Bei mittleren Bildschirmbreiten bleibt mehr vom Bildmotiv sichtbar. Die kleinere Überschrift verbessert die Balance zwischen Bild, Text und Navigation.

---

### 4.2 Refactoring der CSS-Struktur

#### Ausgangsproblem

Die CSS-Datei war durch die schrittweise Entwicklung in Phase 2 gewachsen. Mehrere wiederkehrende Werte waren als feste Einzelwerte eingetragen. Einzelne Regeln derselben Komponente lagen in verschiedenen Media Queries. Teilweise wurden frühere Deklarationen später erneut überschrieben.

Die Gestaltung funktionierte, aber die Struktur war nicht an jeder Stelle sofort nachvollziehbar. Für eine externe Agentur wäre unnötige Suche erforderlich gewesen, um Basisgestaltung, Zustände und responsives Verhalten einer Komponente zusammenzuführen.

#### Begründung der Änderung

Wiederkehrende Gestaltungswerte sollen zentral gepflegt werden können. Regeln derselben Komponente sollen möglichst zusammenstehen. Doppelte oder widersprüchliche Deklarationen sollen entfernt werden, ohne das sichtbare Layout unnötig zu verändern.

Media Queries werden grundsätzlich direkt bei der jeweiligen Komponente angeordnet. Gleiche Breakpoints für unterschiedliche Komponenten bleiben bewusst getrennt. Zusammengeführt werden nur Regeln, die dieselbe Komponente und denselben Darstellungszustand betreffen.

#### Zentralisierung wiederkehrender Werte

Im `:root`-Bereich wurden zusätzliche CSS-Variablen eingeführt. Sie steuern unter anderem:

- gemeinsame Inhaltsbreite,
- horizontale Innenabstände der Inhaltsbereiche,
- verschiedene Radiusstufen,
- Radius für Pill-Elemente,
- kurze Übergangsgeschwindigkeiten,
- Geschwindigkeit kleiner Pop-Animationen.

Beispiel:

```css
:root {
  --content-width: min(100% - 2rem, var(--max-width));
  --section-padding-inline: clamp(1rem, 3vw, 3rem);

  --radius-small: 0.75rem;
  --radius-medium: 1rem;
  --radius-large: 1.25rem;
  --radius-hero: 1.5rem;
  --radius-pill: 999px;

  --transition-fast: 0.2s ease;
  --transition-pop: 0.24s ease-out;
}
```

Die Bereiche „Das bin ich“, Timeline und allgemeine Content-Sections verwenden dadurch dieselben Variablen für Breite und Innenabstände. Wiederkehrende Radien und Übergänge müssen nicht mehr an mehreren Stellen als feste Werte gepflegt werden.

#### Bereinigung doppelter Regeln

Die CSS-Datei wurde gezielt auf echte Doppelungen geprüft. Dabei wurden folgende Bereiche bereinigt:

- Zwei Media Queries der Navigation ab 768px wurden zu einem gemeinsamen Block zusammengeführt.
- Zwei Timeline-Regeln ab 1440px wurden vereinigt.
- Mehrfach eingetragene mobile Hero-Regeln wurden entfernt, sofern sie keine bewusste Korrektur einer vorherigen Breakpoint-Regel darstellten.
- Kommentare wurden an das tatsächliche Verhalten des Codes angepasst.

Die getrennten Media Queries für About-Bereich, Rennrad-Setup und Footer bleiben bestehen, obwohl sie teilweise denselben Breakpoint verwenden. Sie gehören zu unterschiedlichen Komponenten und stehen deshalb weiterhin direkt beim jeweiligen Bereich.

#### Komponentenbezogene Media Queries

Basisgestaltung und responsive Erweiterung einer Komponente stehen möglichst zusammen. Dadurch kann eine externe Agentur das vollständige Verhalten eines Bereichs an einer Stelle nachvollziehen.

Globale Sonderregeln, die mehrere Komponenten betreffen, bleiben am Ende der Datei gesammelt. Dazu gehört insbesondere `prefers-reduced-motion`.

#### Natives CSS-Nesting in der Navigation

Die Hauptnavigation wurde als erste Komponente mit nativem CSS-Nesting strukturiert. Untergeordnete Listen, Links, Zustände und der responsive Wechsel ab 768px befinden sich innerhalb des gemeinsamen Blocks `.main-navigation`.

Beispiel:

```css
.main-navigation {
  position: relative;
  margin-left: auto;

  & a {
    color: var(--color-text);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    & .navigation-toggle {
      display: none;
    }

    & .navigation-list--desktop {
      display: flex;
    }
  }
}
```

Das Nesting wird nicht pauschal auf die gesamte CSS-Datei übertragen. Es wird nur dort verwendet, wo es die Zugehörigkeit der Selektoren klarer darstellt. Zu tiefe Verschachtelungen werden vermieden.

#### Reduzierte Bewegung

Die vorher getrennten Regeln für Glossar und Rennrad-Setup wurden in einem gemeinsamen globalen Block zusammengeführt. Bei aktivierter Systemeinstellung `prefers-reduced-motion: reduce` werden deaktiviert:

- weiches Scrollen,
- Glossar-Pop-Animation,
- Übergänge des Plus-/Minus-Symbols,
- Pulsieren der Rennrad-Hotspots,
- Pop-Animation der Rennrad-Detailkarte.

Beispiel:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .glossary-item,
  .glossary-item summary::after {
    transition: none;
  }

  .glossary-item[open] p,
  .bike-hotspot,
  .bike-detail-card.is-visible {
    animation: none;
  }
}
```

#### Ergebnis

Das sichtbare Layout wurde durch das Refactoring bewusst nicht grundlegend verändert. Der Mehrwert liegt in:

- konsistenteren Gestaltungswerten,
- weniger doppelten oder widersprüchlichen Regeln,
- klarerer Zuordnung von Komponenten und Breakpoints,
- leichterer Wartbarkeit,
- besser nachvollziehbarer CSS-Struktur,
- konsequenter Berücksichtigung reduzierter Bewegung.

---

### 4.3 Prüfung der Bilddateien und Bilddarstellung

#### Ausgangssituation

Das Feedback aus Phase 2 enthielt den Hinweis, dass Bilder teilweise zu groß wirken. Deshalb wurden sowohl die tatsächlich eingebundenen Dateigrößen als auch die sichtbare Darstellung erneut geprüft.

#### Ergebnis der Prüfung

Die verwendeten Dateien für Desktop-Hero, Mobile-Hero, Portrait und Rennrad-Setup liegen bereits in vertretbaren Größen vor. Eine erneute umfassende Komprimierung oder Konvertierung würde aktuell keinen erkennbaren Mehrwert bringen.

Eine größere PNG-Arbeitsdatei der Hero-Collage wird nicht von der Website eingebunden. Ungenutzte Arbeitsdateien werden vor der finalen ZIP-Abgabe nochmals geprüft und bei fehlender Verwendung entfernt.

#### Konsequenz für Phase 3

Der Schwerpunkt liegt auf der Darstellung der Bilder und nicht auf einer unnötigen erneuten Bearbeitung der Dateien. Die Bildwirkung wurde insbesondere durch folgende Änderungen verbessert:

- begrenzte Hero-Breite,
- reduzierte Bildhöhe,
- angepasste Breakpoints,
- kleinere Hero-Headline,
- Beibehaltung einer eigenen mobilen Bildvariante.

#### Ergebnis

Die vorhandenen Bilddateien bleiben bestehen. Der Tutor:innen-Hinweis wurde durch eine kontrolliertere Bilddarstellung und eine erneute technische Prüfung berücksichtigt.

---

## 5. Fortführung der Dokumentation

Die weiteren Abschnitte werden jeweils nach ihrer tatsächlichen Umsetzung ergänzt. Dabei wird dieselbe Struktur verwendet:

1. Ausgangsproblem oder Ziel,
2. Begründung der Entscheidung,
3. technische Umsetzung,
4. responsives Verhalten,
5. Ergebnis.

Als nächste Umsetzungsbereiche folgen:

- visuelle Timeline-Struktur,
- Scroll-Aktivierung der Timeline,
- gezielte Micro-Animationen,
- abschließende Responsive-, Tastatur- und Reduced-Motion-Tests,
- Erweiterung der README,
- Vorbereitung von Screenshot-PDF und finaler ZIP-Datei.

Geplante Funktionen werden in diesem Dokument nicht vorab als bereits umgesetzt beschrieben. Die Konzeptfortschreibung bleibt dadurch wahrheitsgetreu und bildet den tatsächlichen Entwicklungsstand ab.

---

## 6. Vorgaben für Tests und finale Abgabe

Nach Abschluss der technischen Umsetzung wird die Website bei folgenden Breiten geprüft:

- 360px,
- 767px,
- 768px,
- 1024px,
- 1199px,
- 1200px,
- 1440px,
- 1920px.

Zusätzlich werden geprüft:

- mobile Navigation,
- alle Hauptnavigations- und Hero-Sprunglinks,
- Tastaturbedienung und sichtbare Fokuszustände,
- Glossar-Interaktion,
- Rennrad-Hotspots und Detailkarte,
- Verhalten bei `prefers-reduced-motion: reduce`,
- JavaScript-Konsole auf Fehler,
- Download-Link,
- ungenutzte Dateien,
- sauberer Git-Status.

Die README wird am Ende um die tatsächlich eingesetzten Technologien, Methoden, Refactorings, Animationen, Barrierefreiheitsmaßnahmen und Tests ergänzt.

Für die finale Abgabe werden vorbereitet:

1. finaler Projektstand im `main`-Branch,
2. aktualisierte README.md,
3. Screenshot-PDF mit maximal zwölf Screenshots,
4. lokaler Projektordner als ZIP-Datei inklusive `.git`-Ordner,
5. die zusätzlich geforderten Portfoliobestandteile aus den vorherigen Phasen.

---

## 7. Zwischenfazit

Die ersten Arbeitsschritte der Finalisierung wurden abgeschlossen. Der Hero wurde von einer randlosen, sehr dominanten Fläche zu einer kontrollierten Portfolio-Bühne weiterentwickelt. Der problematische Übergang bei ungefähr 1024px wurde durch angepasste Breakpoints korrigiert und die Hero-Typografie verkleinert.

Die CSS-Datei wurde strukturell überarbeitet. Wiederkehrende Werte werden zentral gepflegt, echte Doppelungen wurden entfernt, Media Queries bleiben komponentennah und die Hauptnavigation nutzt gezieltes natives CSS-Nesting. Die Berücksichtigung reduzierter Bewegung wurde in einem gemeinsamen globalen Block zusammengeführt.

Die eingebundenen Bilddateien wurden geprüft. Da sie bereits in angemessenen Größen vorliegen, konzentriert sich Phase 3 auf eine bessere Bilddarstellung statt auf eine unnötige erneute Komprimierung.

Die nächsten Ergänzungen dieses Dokuments erfolgen nach der tatsächlichen Umsetzung der Timeline, ihrer Scroll-Interaktion, der Micro-Animationen und der abschließenden Tests.