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

Die CSS-Datei wird strukturell überarbeitet. Wiederkehrende Werte sollen als Variablen zentral gepflegt, doppelte oder widersprüchliche Regeln entfernt und Media Queries den jeweiligen Komponenten zugeordnet werden. Natives CSS-Nesting wird komponentenbezogen eingesetzt, damit Basisgestaltung, Zustände und responsives Verhalten eines Bereichs gemeinsam nachvollzogen werden können.

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

Die zentrale Grundstruktur ist innerhalb eines gemeinsamen Komponentenblocks organisiert:

```css
#hero {
  position: relative;
  width: var(--content-width);
  margin: 1.5rem auto var(--spacing-section);
  overflow: hidden;
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-hero);

  & .hero-image {
    display: block;
    width: 100%;
    height: clamp(30rem, 68vh, 48rem);
    object-fit: cover;
    object-position: center center;
  }
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

### 4.2 Refactoring und komponentenbezogene Organisation der CSS-Datei

#### Ausgangsproblem

Die CSS-Datei war durch die schrittweise Entwicklung in Phase 2 gewachsen. Wiederkehrende Werte waren teilweise mehrfach als feste Einzelwerte eingetragen. Regeln derselben Komponente lagen an unterschiedlichen Stellen der Datei und die zugehörigen Media Queries befanden sich teilweise gesammelt am Dateiende.

Die Gestaltung funktionierte, aber eine externe Agentur hätte Basisgestaltung, Zustände und responsives Verhalten einzelner Bereiche zunächst zusammensuchen müssen. Zusätzlich enthielt die Datei doppelte oder später überschriebene Regeln.

#### Begründung der Änderung

Die CSS-Datei soll denselben Grundsatz erfüllen wie das Konzept: Ein Bereich muss vollständig nachvollziehbar sein, ohne seine Regeln über die gesamte Datei zusammensuchen zu müssen.

Deshalb wurden folgende Strukturziele festgelegt:

- wiederkehrende Werte zentral definieren,
- jede größere Seitenkomponente in einem eigenen Block organisieren,
- untergeordnete Elemente und Zustände mit nativem CSS-Nesting zuordnen,
- komponentenspezifische Media Queries direkt bei der Komponente belassen,
- nur tatsächlich doppelte oder widersprüchliche Regeln zusammenführen,
- globale Regeln weiterhin eindeutig global halten.

#### Zentralisierung wiederkehrender Werte

Im `:root`-Bereich wurden zusätzliche CSS-Variablen für gemeinsame Layout- und Komponentenwerte eingeführt:

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
}
```

Die gemeinsame Inhaltsbreite und die horizontalen Innenabstände werden von About-Bereich, Timeline und allgemeinen Content-Bereichen genutzt. Unterschiedliche Radiusstufen machen außerdem nachvollziehbar, welche Rundung für kleine Bedienelemente, Cards, den Hero und Pill-Elemente vorgesehen ist.

Eine zunächst angelegte, aber nicht verwendete Animationsvariable wurde beim abschließenden CSS-Check wieder entfernt. Dadurch enthält der Variablenbereich nur Werte, die tatsächlich eingesetzt werden.

#### Komponentenbezogene CSS-Struktur

Die CSS-Datei wurde nach den sichtbaren Bereichen der Website organisiert. Folgende Komponenten besitzen nun jeweils einen zusammenhängenden Block:

1. Header,
2. Hauptnavigation,
3. Hero,
4. „Das bin ich“,
5. Timeline,
6. allgemeine Content- und Trainingsbereiche,
7. Trainings-Glossar,
8. interaktives Rennrad-Setup,
9. Footer.

Innerhalb der Komponenten stehen:

- Grundlayout,
- Regeln für untergeordnete Elemente,
- Hover-, Fokus-, Offen- oder Aktivzustände,
- zugehörige responsive Anpassungen.

Beispiel für die Grundlogik:

```css
.about-section {
  width: var(--content-width);

  & .about-card {
    display: grid;
  }

  & .about-portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    & .about-card {
      grid-template-columns: minmax(0, 1fr) auto;
    }
  }
}
```

Das `&` verweist auf den übergeordneten Komponentenblock. Dadurch bleibt erkennbar, dass Card, Portrait und Desktop-Regel zum Bereich „Das bin ich“ gehören.

#### Einsatz von nativem CSS-Nesting

Das Nesting wurde zunächst an der Navigation erprobt und anschließend auf alle größeren Komponenten übertragen. Dabei wurde bewusst keine unnötig tiefe Verschachtelung verwendet.

Die Hauptkomponente bildet jeweils die äußere Ebene. Untergeordnete Selektoren werden nur so weit verschachtelt, wie es für ihre eindeutige Zuordnung erforderlich ist. Globale Elemente wie `:root`, `html`, `body`, `@keyframes` und `prefers-reduced-motion` bleiben außerhalb der Komponentenblöcke.

Diese Struktur ermöglicht einer Agentur, das vollständige Verhalten eines Bereichs an einer Stelle zu lesen und bei Bedarf zu verändern.

#### Komponentenbezogene Media Queries

Media Queries wurden nicht in einem einzigen globalen Breakpoint-Abschnitt gesammelt. Sie stehen direkt innerhalb der Komponente, deren Darstellung sie verändern.

Beispiele:

- Navigation ab 768px,
- Hero für Smartphone, Tablet/Laptop und Desktop,
- About-Bereich ab 1024px,
- Timeline ab 768px und 1440px,
- Rennrad-Setup unter 768px und ab 1024px,
- Footer ab 1024px.

Gleiche Breakpoints für unterschiedliche Komponenten bleiben bewusst getrennt. Dadurch ist beispielsweise die Footer-Regel ab 1024px direkt im Footer-Block auffindbar und nicht in einem entfernten Sammelblock.

#### Bereinigung doppelter und widersprüchlicher Regeln

Im Verlauf des Refactorings wurden unter anderem folgende Stellen bereinigt:

- zwei Navigations-Media-Queries ab 768px,
- zwei Timeline-Regeln ab 1440px,
- wiederholte mobile Hero-Regeln,
- ausgelagerte Breakpoints für About, Bike-Setup und Footer,
- veraltete oder nicht mehr zutreffende Kommentare,
- eine nicht verwendete CSS-Variable.

Das Ziel war nicht, identische Breakpoint-Zahlen pauschal zusammenzufassen. Entfernt oder vereinigt wurden nur Regeln, die tatsächlich dieselbe Komponente und denselben Zustand betrafen.

#### Globale Animationen und Keyframes

Die Animationen `glossary-pop`, `bike-detail-pop` und `hotspot-pulse` bleiben als globale `@keyframes` außerhalb der Komponentenblöcke. Die Komponenten verweisen lediglich auf diese Animationen.

Diese Trennung wurde gewählt, weil `@keyframes` eigenständige globale Definitionen sind und nicht wie normale untergeordnete Elementselektoren behandelt werden.

#### Sichtbarer Skip-Link

Der bereits im HTML vorhandene Skip-Link erhielt im Rahmen des abschließenden CSS-Checks eine eigene Gestaltung. Im Normalzustand liegt er außerhalb des sichtbaren Bereichs. Sobald er per Tastatur fokussiert wird, erscheint er oben links mit deutlich erkennbarem Kontrast und Fokusrahmen.

```css
.skip-link {
  position: fixed;
  transform: translateY(-200%);
  transition: transform var(--transition-fast);
}

.skip-link:focus-visible {
  transform: translateY(0);
}
```

Dadurch ist die vorhandene semantische Funktion nicht nur technisch vorhanden, sondern auch praktisch per Tastatur nutzbar.

#### Reduzierte Bewegung

Die Regeln für reduzierte Bewegung bleiben als globaler Block am Dateiende bestehen, weil sie mehrere Komponenten gleichzeitig betreffen.

Bei `prefers-reduced-motion: reduce` werden:

- weiches Scrollen deaktiviert,
- die Bewegung des Skip-Links nicht animiert,
- Glossar-Übergänge deaktiviert,
- die Glossar-Pop-Animation entfernt,
- das Pulsieren der Rennrad-Hotspots abgeschaltet,
- die Detailkarten-Animation deaktiviert.

Nach dem komponentenbezogenen Nesting wurden die Selektoren im Reduced-Motion-Block an die höhere Spezifität der Komponentenregeln angepasst. Dadurch überschreiben sie die Animationen weiterhin zuverlässig.

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .skip-link,
  #trainings-glossar .glossary-item,
  #trainings-glossar .glossary-item summary::after {
    transition: none;
  }

  #trainings-glossar .glossary-item[open] p,
  #rennrad-setup .bike-hotspot,
  #rennrad-setup .bike-detail-card.is-visible {
    animation: none;
  }
}
```

#### Responsives Verhalten

Das Refactoring sollte das sichtbare Verhalten der Website nicht grundlegend verändern. Nach jedem Komponentenumbau wurden die relevanten Breakpoints und Interaktionen kontrolliert.

Besonders geprüft wurden:

- Wechsel zwischen mobiler und horizontaler Navigation bei 768px,
- Hero-Darstellung an den Übergängen 767/768px, 1199/1200px und 1439/1440px,
- About-Layout ab 1024px,
- ein- und zweispaltige Timeline,
- horizontales Scrollen der Trainingstabelle,
- Glossarzustände,
- Rennrad-Hotspots und Detailkarte,
- Footer-Layout ab 1024px.

#### Ergebnis

Das CSS-Refactoring ist abgeschlossen. Der sichtbare Webauftritt blieb dabei weitgehend unverändert, die Codebasis wurde jedoch deutlich nachvollziehbarer.

Die wichtigsten Ergebnisse sind:

- zentrale und tatsächlich verwendete CSS-Variablen,
- vollständige komponentenbezogene Organisation,
- natives CSS-Nesting für alle größeren Seitenbereiche,
- direkt zugeordnete Media Queries,
- weniger doppelte oder überschreibende Regeln,
- klar getrennte globale Keyframes und Reduced-Motion-Regeln,
- sichtbarer und tastaturbedienbarer Skip-Link,
- bessere Wartbarkeit für die weitere Timeline- und Animationsentwicklung.

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
- Skip-Link,
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

Die ersten beiden großen Arbeitspakete der Finalisierung wurden abgeschlossen.

Der Hero wurde von einer randlosen, sehr dominanten Fläche zu einer kontrollierten Portfolio-Bühne weiterentwickelt. Der problematische Übergang bei ungefähr 1024px wurde durch angepasste Breakpoints korrigiert und die Hero-Typografie verkleinert.

Die CSS-Datei wurde vollständig komponentenbezogen neu organisiert. Header, Navigation, Hero, About-Bereich, Timeline, allgemeine Content-Bereiche, Glossar, Rennrad-Setup und Footer enthalten nun ihre untergeordneten Elemente, Zustände und Media Queries in zusammenhängenden Blöcken. Wiederkehrende Werte werden zentral gepflegt, echte Doppelungen wurden entfernt und globale Animationen sowie Reduced-Motion-Regeln bleiben klar getrennt.

Zusätzlich wurde der vorhandene Skip-Link visuell und per Tastatur nutzbar gemacht. Die Regeln für reduzierte Bewegung wurden nach dem Nesting so angepasst, dass sie die komponentenspezifischen Animationen weiterhin zuverlässig deaktivieren.

Die eingebundenen Bilddateien wurden geprüft. Da sie bereits in angemessenen Größen vorliegen, konzentriert sich Phase 3 auf eine bessere Bilddarstellung statt auf eine unnötige erneute Komprimierung.

Als nächster Entwicklungsschritt wird die bestehende Card-Darstellung der sportlichen Stationen zu einer visuellen Timeline mit Linie und Markern weiterentwickelt. Anschließend folgen die scroll-aktive Hervorhebung, gezielte Micro-Animationen und die abschließende Dokumentation der Tests und Abgabevorbereitung.