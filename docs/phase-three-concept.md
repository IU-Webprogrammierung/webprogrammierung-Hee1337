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
9. Abschlussbereich „Die nächste Etappe“ mit scrollabhängiger Fahrradstrecke und Formular-Demo,
10. Footer mit Impressum, Kontakt und ergänzender Navigation.

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
9. Kontaktabschluss mit Formular-Demo,
10. Footer.

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

### 4.4 Visuelle Weiterentwicklung der sportlichen Timeline

#### Ausgangsproblem

Die vier sportlichen Stationen waren in Phase 2 als gleichartige Cards in einem responsiven Grid angeordnet. Die Inhalte waren gut lesbar, der zeitliche Verlauf von Jugend über CrossFit und Hyrox bis zum Rennrad wurde visuell jedoch nur durch die Reihenfolge der Texte vermittelt. Ab 768px standen jeweils zwei Cards nebeneinander, wodurch die Laufbahn eher wie eine Sammlung einzelner Themen wirkte.

#### Begründung der Änderung

Die Gestaltung soll den Leitgedanken „Meine sportliche Laufbahn“ deutlicher unterstützen. Eine sichtbare Linie mit Markern macht die chronologische Reihenfolge unmittelbar erkennbar und verbessert gleichzeitig die Orientierung beim Scrollen.

#### Vorbereitung im HTML

Der Timeline-Bereich erhielt `data-timeline`. Die vier zugehörigen Artikel wurden mit `data-timeline-item` gekennzeichnet.

```html
<section id="laufbahn" class="timeline-section"
  aria-labelledby="laufbahn-heading" data-timeline>
```

```html
<article id="jugend" class="timeline-card"
  aria-labelledby="jugend-heading" data-timeline-item>
```

Die Datenattribute verändern weder Semantik noch Darstellung. Sie dienen als eindeutige Anknüpfungspunkte für CSS und JavaScript.

#### Technische Umsetzung

Das bisherige Grid wurde durch eine vertikale Flex-Anordnung ersetzt. Eine neutrale Grundlinie entsteht über ein Pseudoelement des Timeline-Containers. Jede Station besitzt einen Marker sowie eine kurze Verbindung zwischen Linie und Card.

Eine zweite, farbige Linie liegt über der Grundlinie. Ihre Höhe wird über die CSS-Variable `--timeline-progress` gesteuert.

```css
.timeline-grid {
  --timeline-progress: 0%;
}

.timeline-grid::after {
  height: var(--timeline-progress);
  background-color: var(--color-accent);
}
```

#### Responsives Verhalten

- **Bis 1023px:** Die Linie liegt links neben den Cards. Alle Stationen stehen untereinander.
- **Ab 1024px:** Die Linie liegt mittig. Ungerade und gerade Cards wechseln zwischen linker und rechter Seite.
- **Ab 1440px:** Überschrift und Timeline bleiben auf maximal 90rem begrenzt.

Die frühere zweispaltige Grid-Darstellung ab 768px wurde entfernt, damit die zeitliche Reihenfolge auch auf Tablets eindeutig bleibt.

#### Ergebnis

Die vier Sportstationen werden als zusammenhängende Entwicklung wahrgenommen. Linie, Marker und wechselnde Desktop-Anordnung verstärken den erzählerischen Charakter der Seite, ohne Inhalte auszublenden oder die mobile Lesbarkeit zu verschlechtern.

---

### 4.5 Scroll-aktive Timeline und Fortführung bis zum ersten Rennen

#### Ziel der Interaktion

Die Timeline soll beim Scrollen anzeigen, wie weit die sportliche Entwicklung bereits durchlaufen wurde. Die Interaktion dient damit nicht nur der Gestaltung, sondern auch der Orientierung innerhalb des langen Onepagers.

Da die Entwicklung nach dem Einstieg in den Rennradsport weitergeht, wurde die Darstellung über die ursprüngliche Timeline hinaus fortgeführt. Sie verbindet nun Rennrad-Setup, strukturiertes Training, Trainings-Glossar und den Abschnitt „Mein erstes Rennen“.

#### Scroll-Aktivierung der Haupt-Timeline

JavaScript berechnet eine gedachte Leselinie innerhalb des Viewports. Aus ihrer Position im Timeline-Grid entsteht ein Fortschrittswert zwischen 0 und 1. Dieser Wert wird an `--timeline-progress` übergeben.

```js
const timelineProgress = clamp(
  (activationLine - gridRectangle.top) /
    Math.max(gridRectangle.height, 1),
  0,
  1
);
```

Zusätzlich erhält die Timeline-Card, deren Mittelpunkt der Leselinie am nächsten liegt, die Klasse `is-active`. CSS hebt dadurch Card und Marker hervor.

#### Fortsetzung der Laufbahn

Unterhalb der ursprünglichen Timeline wurde ein gemeinsamer Wrapper ergänzt:

```html
<div class="journey-continuation" data-journey>
  <!-- Rennrad-Setup, Training, Glossar und Rennen -->
</div>
```

Die Stationen werden mit `data-journey-item` gekennzeichnet. Das Attribut kann direkt auf einer `.content-card` oder auf der umgebenden Section liegen.

Beim letzten Bereich befindet es sich auf:

```html
<section id="rennen" class="content-section"
  aria-labelledby="rennen-heading" data-journey-item>
```

JavaScript erkennt beide Varianten und ermittelt jeweils die sichtbare `.content-card`.

#### Zentrale Journey-Linie

Die Journey besitzt eine neutrale Grundlinie und eine darüberliegende farbige Fortschrittslinie. Die farbige Linie wird über `--journey-progress` skaliert und schließt optisch an die Haupt-Timeline an.

```css
.journey-continuation {
  --journey-progress: 0;

  &::after {
    transform:
      translateX(-50%)
      scaleY(var(--journey-progress));
    transform-origin: top;
  }
}
```

#### Umlaufende Kartenrahmen

Sobald der Kopf der farbigen Linie die Oberkante einer Journey-Card erreicht, beginnt ein Rahmen von der oberen Mitte aus gleichzeitig nach links und rechts um die Card zu laufen. Dafür wird ein `conic-gradient` verwendet. Seine sichtbare Länge steuert `--journey-card-angle`.

Da der Rahmen in zwei Richtungen läuft, entsprechen 180 Grad je Richtung einem vollständig geschlossenen Rahmen.

#### Synchronisierung von Linie und Karten

Während der Entwicklung zeigte sich, dass getrennte Berechnungen für Linie und Kartenrahmen zu sichtbaren Abweichungen führten. Ein Rahmen konnte bereits wachsen, obwohl die Linie die Card noch nicht erreicht hatte.

Die Logik wurde deshalb refaktoriert. Nun wird ein gemeinsamer Linienkopf berechnet. Dieser eine Wert steuert:

- die vertikale Fortschrittslinie,
- den Beginn und Verlauf jedes Kartenrahmens,
- die aktuell markierte Journey-Station.

```js
const rawCardProgress = clamp(
  (lineHead - cardTop) / cardHeight,
  0,
  1
);
```

Dadurch kann ein Kartenrahmen nicht mehr vor der Linie starten.

#### Abschluss der letzten Station

Am Seitenende fehlt natürlicherweise Scrollweg. Deshalb wird erst im letzten Abschnitt der Journey ein zusätzlicher Abschlusswert aus der verbleibenden Entfernung zum Seitenende berechnet. So schließen Linie und Rahmen von „Mein erstes Rennen“ vollständig, ohne den früheren Verlauf vorzeitig zu beschleunigen.

#### JavaScript-Struktur

Die JavaScript-Datei wurde neu gegliedert. Rennrad-Hotspots, Haupt-Timeline und Journey sind funktional getrennt. Timeline und Journey werden über einen gemeinsamen Scroll- und Resize-Mechanismus aktualisiert. `requestAnimationFrame()` verhindert dabei mehrere unnötige Berechnungen innerhalb eines Browser-Frames.

```js
initializeBikeSetup();

startViewportUpdates([
  createTimelineUpdater(),
  createJourneyUpdater()
]);
```

#### Semantik und progressive Erweiterung

Die aktuelle Journey-Station erhält `aria-current="step"`. Bei „Mein erstes Rennen“ wird das Attribut korrekt auf `section#rennen` gesetzt.

Ohne JavaScript bleiben Texte, Überschriften, Cards und die statische Grundstruktur sichtbar. Lediglich die scrollabhängige Füllung, die umlaufenden Rahmen und die aktive Hervorhebung entfallen.

#### Ergebnis

Die sportliche Entwicklung wird nun als durchgehender Weg dargestellt. Haupt-Timeline und nachfolgende Inhaltsbereiche bilden visuell und funktional ein gemeinsames System. Die gemeinsame Fortschrittsberechnung hält Linie, Kartenrahmen und aktive Station synchron.

---


### 4.6 Mobile CTAs und durchgehende Scroll-Orientierung vor der Timeline

#### Ausgangsproblem

Die vier Sportflächen innerhalb der mobilen Hero-Bildvariante waren vollständig klickbar. Titel, Untertitel und eine kurze horizontale Akzentlinie vermittelten jedoch nicht eindeutig, dass es sich um Sprunglinks handelt.

Auf Desktop-Geräten kann ein Hover-Zustand auf Interaktivität hinweisen. Auf Smartphones und Tablets fehlt diese Rückmeldung vor dem ersten Antippen. Dadurch bestand die Gefahr, dass die Flächen als reine Bildbeschriftungen wahrgenommen werden.

Zusätzlich begann die scrollabhängige Orientierung erst mit der eigentlichen Timeline. Hero und „Das bin ich“ wirkten dadurch wie vorgelagerte, nicht verbundene Bereiche.

#### Erste Überlegung und Anpassung

Zunächst wurde ein CTA testweise nur bei der Handball-Card ergänzt. Beim Vergleich wurde deutlich, dass diese Lösung ein falsches Muster erzeugt: Eine einzelne Card mit CTA wirkt klickbar, während die anderen drei wie nicht interaktive Inhalte erscheinen.

Deshalb erhielten alle vier mobilen Sport-Cards denselben Handlungsaufruf:

```html
<span class="station-action" aria-hidden="true">
  Zur Station
  <span>→</span>
</span>
```

Der Text ist mit `aria-hidden="true"` ausgezeichnet, weil die jeweilige Sportbezeichnung den Link bereits verständlich benennt. Der CTA dient als zusätzlicher visueller Hinweis und soll den zugänglichen Namen nicht unnötig verlängern.

#### Entscheidung über die Sichtbarkeit

Eine erste technische Überlegung war, den CTA über Eingabegeräteigenschaften einzublenden:

```css
@media (hover: none) and (pointer: coarse)
```

Diese Variante wurde verworfen. Sie hätte den CTA auch auf breiten Tablet- oder Touch-Laptop-Ansichten eingeblendet, obwohl dort bereits die kompakte breite Hero-Darstellung mit gut sichtbaren Sprungmarken verwendet wird.

Die finale Entscheidung koppelt den CTA an die mobile Bildvariante und damit an denselben Breakpoint:

```css
@media (max-width: 767px) {
  & .station-action {
    display: inline-flex;
  }
}
```

Damit gilt:

- mobile hochformatige Hero-Variante: dauerhafter CTA,
- breite Hero-Variante ab 768px: kompakte Sprungmarken ohne CTA,
- Desktop mit Maus: zusätzlicher Hover-Zustand,
- Tastatur: sichtbarer Fokuszustand.

#### Entfernung der mobilen Akzentlinie

Nach Einbau des CTA standen unter jeder mobilen Sportbezeichnung gleichzeitig ein Handlungsbutton und die bisherige horizontale Akzentlinie. Beide Elemente erfüllten eine ähnliche Aufgabe.

Die Linie wurde in der mobilen Ansicht deshalb entfernt:

```css
@media (max-width: 767px) {
  & .hero-station-navigation a::after {
    display: none;
  }
}
```

Dadurch wurden die Cards kompakter und die visuelle Hierarchie eindeutiger.

#### Scroll-Orientierung für Hero und Vorstellung

Hero und About-Card erhielten denselben aktiven Rahmen- und Schattenstil wie die späteren Timeline-Stationen. Eine neue JavaScript-Funktion ermittelt anhand derselben gedachten Leselinie, welcher Bereich aktiv ist:

```js
const createIntroStageUpdater = () => {
  const activationLine =
    window.innerHeight * 0.55;

  const heroIsActive =
    aboutTop > activationLine;

  const aboutIsActive =
    aboutTop <= activationLine &&
    timelineTop > activationLine;
};
```

Die Klassen werden mit `classList.toggle()` gesetzt. Sobald die Timeline die Leselinie erreicht, übernimmt das bestehende Timeline-System.

#### Warum keine vertikale Linie verwendet wird

Eine Verlängerung der Timeline-Linie bis in den Hero wurde bewusst verworfen. Hero und „Das bin ich“ sind Einführung und persönliche Einordnung, aber keine chronologischen Sportstationen.

Die einheitliche Akzentfarbe, der aktive Rahmen und der Schatten verbinden die Bereiche ausreichend, ohne eine falsche zeitliche Bedeutung zu erzeugen.

#### Ergebnis

Die Website zeigt nun vom Seitenanfang an eine zusammenhängende Orientierung. Mobile Nutzer:innen erkennen die Hero-Flächen eindeutig als Sprunglinks. Die Lösung berücksichtigt den Unterschied zwischen Touch- und Mausbedienung, ohne die breite Hero-Darstellung unnötig mit zusätzlichen Buttons zu überladen.

---

### 4.7 Micro-Animationen, Zustandswechsel und reduzierte Bewegung

#### Ziel

Animationen sollen nur eingesetzt werden, wenn sie Bedienung, Orientierung oder Zustandswechsel unterstützen. Die Website soll nicht durch permanente Bewegung ablenken.

#### Verfeinerte Bedienelemente

Folgende Elemente erhielten kurze Übergänge:

- Logo,
- Navigation und Menü-Toggle,
- Hero-Sprungmarken,
- Download-Link,
- Formular-Button,
- Timeline-Cards,
- Journey-Cards,
- Kontakt-Card und Formularkasten.

Die Übergänge beschränken sich überwiegend auf:

- Farbe,
- Hintergrundfarbe,
- Rahmenfarbe,
- Schatten,
- geringe Translation bei Hover oder aktivem Button.

Cards werden durch Scrollzustände nicht vergrößert oder verschoben. Dadurch bleibt das Layout stabil.

#### Timeline- und Journey-Zustände

Die aktive Timeline-Card und die aktive Journey-Card erhalten denselben zurückhaltenden Schatten. Die `transition` liegt jeweils im Grundzustand und nicht ausschließlich in der aktiven Klasse. Dadurch funktioniert die Überblendung beim Aktivieren und beim Verlassen.

#### Reduced Motion

Der globale Block `prefers-reduced-motion: reduce` wurde nach jeder neuen Animation erweitert.

Bei reduzierter Bewegung werden unter anderem deaktiviert:

- weiches Scrollen,
- Skip-Link-Übergang,
- Logo-, Navigations- und Button-Transitions,
- Timeline- und Journey-Schattenübergänge,
- Glossar-Pop-Animation,
- Hotspot-Puls,
- Detailkarten-Pop-Animation,
- Formular-Button-Übergänge.

Aktive Zustände bleiben sichtbar, wechseln jedoch sofort.

#### Ergebnis

Die Animationen bleiben funktional und begründet. Es gibt keine flächendeckenden Einblendungen oder dauerhaften Card-Bewegungen. Nutzer:innen mit reduzierter Bewegung erhalten weiterhin sämtliche Inhalte und Zustandsinformationen.

---

### 4.8 Abschlussbereich „Die nächste Etappe“

#### Ausgangsproblem

Die Seite endete zunächst nach dem Abschnitt „Mein erstes Rennen“. Inhaltlich war die Entwicklung damit verständlich, dramaturgisch wirkte der Übergang zum Footer jedoch abrupt.

Der letzte Renntext beschreibt neue Trainingsziele. Daraus entstand die Idee, den Blick nicht nur zurück, sondern auf die nächste sportliche Etappe zu richten.

#### Inhaltliches Ziel

Der neue Abschlussbereich soll:

- einen Ausblick auf kommende Rennen geben,
- Besucher:innen aktiv einbeziehen,
- die bisherige vertikale Laufbahn in eine neue horizontale Strecke überführen,
- eine zusätzliche HTML- und JavaScript-Interaktion zeigen.

Der Bereich trägt deshalb die Überschrift „Dein Tipp für mein nächstes Rennen“.

#### Formular als lokale Demonstration

Das Formular enthält:

- Name als Pflichtfeld,
- optionale E-Mail-Adresse,
- Themenauswahl,
- Textfeld mit Mindestlänge,
- Absende-Button,
- Hinweis auf die lokale Demonstration,
- Statusmeldung mit `aria-live="polite"`.

Es wurde bewusst kein externer Formulardienst eingebunden. Ein realer Versand hätte eine externe Abhängigkeit, Datenschutzfragen und gegebenenfalls Backend-Konfiguration erfordert.

Die finale Lösung demonstriert native Validierung und JavaScript-Verarbeitung, überträgt oder speichert aber keine Daten:

```js
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  statusMessage.textContent =
    "Vielen Dank! Dein Tipp wurde in dieser Demo erfolgreich verarbeitet.";

  contactForm.reset();
});
```

#### Entwicklung der Fahrradgrafik

Zunächst wurde ein stark reduziertes Inline-SVG aus Kreisen und Linien verwendet. Die Grafik war technisch leicht animierbar, wirkte aber im Vergleich zur übrigen Gestaltung zu schematisch.

Sie wurde durch ein detaillierteres Rennrad-SVG ersetzt und als externe Datei eingebunden:

```html
<img
  class="contact-bike"
  src="assets/icons/rad-icon.svg"
  alt=""
>
```

Das leere `alt`-Attribut ist korrekt, weil das Fahrrad rein dekorativ ist und keine zusätzliche Inhaltsinformation vermittelt.

#### Erste Animationsidee und Verwerfung

Die erste Version nutzte einen `IntersectionObserver`. Sobald der Kontaktbereich sichtbar wurde, fuhr das Rad einmal automatisch bis zum Ziel.

Diese Lösung wurde verworfen, weil:

- die Bewegung unabhängig vom tatsächlichen Scrollen begann,
- das Rad teilweise schon losfuhr, bevor der Bereich bewusst erreicht wurde,
- die Animation beim Zurückscrollen nicht nachvollziehbar zurücklief,
- die Fahrt wie eine automatische, losgelöste Bewegung wirkte.

Zusätzlich zeigte die SVG-Datei zunächst in die falsche Richtung. Sie wurde über `scaleX(-1)` horizontal gespiegelt.

#### Scrollgebundene Fahrradfahrt

Die finale Lösung berechnet den Fortschritt aus der Position der horizontalen Strecke im Viewport:

```js
routeProgress = clamp(
  (animationStart - routeRectangle.top) /
    Math.max(animationStart - animationEnd, 1),
  0,
  1
);
```

Der Startwert wurde während des visuellen Tests angepasst. Ein zunächst verwendeter Wert von `0.85` ließ das Fahrrad zu früh losfahren. Die finale Abstimmung verwendet ungefähr `0.70` der Viewporthöhe.

Aus `routeProgress` entstehen:

- die horizontale Fahrradposition,
- die Füllung der Strecke,
- die Helligkeit der äußeren Kontakt-Card,
- der Abschlusszustand des Formulars.

```js
const bikePosition =
  travelDistance * routeProgress;

contactSection.style.setProperty(
  "--bike-position",
  `${bikePosition}px`
);

contactSection.style.setProperty(
  "--route-progress",
  routeProgress.toFixed(4)
);

contactSection.style.setProperty(
  "--contact-progress",
  routeProgress.toFixed(4)
);
```

Beim Zurückscrollen laufen Fahrrad, Linie und Card-Hervorhebung entsprechend zurück.

#### Übergang von der Journey zum Kontaktbereich

Der Kontaktbereich wurde zunächst als reguläres `data-journey-item` in den bestehenden Journey-Wrapper aufgenommen. Dadurch entstanden gleichzeitig:

- vertikale Fortschrittslinie,
- umlaufender Card-Rahmen,
- horizontale Fahrradstrecke mit eigener Füllung.

Diese Kombination wurde im Test als visuell überladen bewertet und verworfen.

Die finale Lösung:

- lässt den Kontaktbereich innerhalb von `.journey-continuation`,
- entfernt `data-journey-item`,
- führt die vertikale Linie optisch bis zur Card,
- legt die deckende Contact-Card mit höherem `z-index` über die Linie,
- verzichtet auf den umlaufenden Journey-Rahmen,
- übergibt die visuelle Führung anschließend an die horizontale Fahrradstrecke.

Damit entsteht eine klare Bedeutungsaufteilung:

- vertikale Linie: bisheriger sportlicher Weg,
- horizontale Strecke: nächste Etappe.

#### Fortschrittsabhängige Hervorhebung

Die äußere Kontakt-Card wird nicht über eine separate Animation aufgehellt. Rahmen und Schatten hängen direkt an `--contact-progress`.

Bei Fahrtbeginn bleibt die Card zurückhaltend. Mit wachsendem Fortschritt werden Rahmen und Akzentschatten stärker. Im Ziel erreicht die Card ihre höchste Helligkeit.

Sobald `routeProgress >= 0.995` gilt, erhält der Kontaktbereich `is-complete`. Dadurch wird erst dann der innere Formularkasten hervorgehoben:

```css
.contact-section.is-complete .contact-form {
  background-color: rgba(255, 255, 255, 0.07);
  border-color: rgba(231, 201, 169, 0.85);
}
```

Die visuelle Reihenfolge lautet damit:

1. Journey erreicht den Abschlussbereich,
2. Fahrrad und horizontale Linie bewegen sich,
3. äußere Card wird proportional heller,
4. Fahrrad erreicht das Ziel,
5. Formular wird als nächste Handlung hervorgehoben.

#### Reduced Motion

Bei `prefers-reduced-motion: reduce` wird keine scrollabhängige Fahrt gezeigt. JavaScript setzt den Fortschritt direkt auf 1.

Dadurch:

- steht das Fahrrad am Ziel,
- ist die Strecke vollständig gefüllt,
- ist der Endzustand des Formulars sichtbar,
- gehen keine Informationen verloren.

#### Responsives Verhalten

- Die Kontakt-Card verwendet dieselbe Inhaltsbreite wie die übrigen Bereiche.
- Überschrift und Abstände skalieren mit `clamp()`.
- Die Fahrradgröße passt sich über `clamp()` an.
- Formularfelder belegen immer die verfügbare Breite.
- Das Textfeld bleibt vertikal vergrößerbar.
- Die horizontale Strecke berechnet ihre Fahrdistanz aus der tatsächlichen Breite von Strecke, Fahrrad und Zielmarkierung.

#### Ergebnis

Der Abschlussbereich verbindet Inhalt, Interaktion und Animation zu einem nachvollziehbaren Ende. Die Seite endet nicht mehr abrupt, sondern zeigt eine nächste Etappe und bietet eine lokale Interaktionsmöglichkeit.

---

### 4.9 Finale Layoutkorrekturen

#### Breite der Renn-Card

Die Card „Mein erstes Rennen“ war durch die zusätzliche Klasse `content-card--compact` schmaler als die übrigen Journey-Cards.

Da der Abschnitt Teil derselben visuellen Reise ist, wurde die Sonderklasse entfernt. Die Renn-Card verwendet nun dieselbe volle Breite wie Setup, Training und Glossar.

#### Ausrichtung von Header und Hero

Auf großen Bildschirmen endete die Navigation weiter rechts als die Hero-Fläche. Dadurch fehlte eine gemeinsame Fluchtlinie.

Ab 768px verwendet `.header-inner` deshalb dieselbe Inhaltsbreite wie der Hero:

```css
@media (min-width: 768px) {
  & .header-inner {
    width: var(--content-width);
    margin: 0 auto;
    padding: 1.25rem 0;
  }
}
```

Logo, Navigation und Hero schließen seitdem links und rechts bündig ab.

#### Ergebnis

Die letzten sichtbaren Breitenunterschiede wurden beseitigt. Header, Hero und Content-Bereiche folgen einer gemeinsamen Layoutlogik.

---

### 4.10 Zusammenfassung angepasster und verworfener Ansätze

| Ansatz | Entscheidung | Begründung |
|---|---|---|
| CTA nur auf einer mobilen Hero-Card | verworfen | ließ nur eine Card klickbar wirken |
| CTA nach Eingabegerät statt Bildvariante | verworfen | hätte auch breite Touchansichten unnötig erweitert |
| CTA auf allen mobilen Sport-Cards | umgesetzt | konsistenter und verständlicher Bedienhinweis |
| mobile Akzentlinie zusätzlich zum CTA | entfernt | doppelte visuelle Aussage und zusätzlicher Platzbedarf |
| vertikale Linie bereits in Hero und About | verworfen | diese Bereiche sind keine chronologischen Stationen |
| getrennte Berechnung von Journey-Linie und Rahmen | refaktoriert | führte zu sichtbarer Desynchronisierung |
| Kontakt als reguläre Journey-Card mit umlaufendem Rahmen | verworfen | vertikale Linie, Rahmen und Fahrradstrecke wirkten gleichzeitig überladen |
| einmalige Fahrradfahrt per `IntersectionObserver` | verworfen | Bewegung war vom Scrollen entkoppelt |
| scrollabhängige Fahrradfahrt | umgesetzt | nachvollziehbar, reversibel und mit der Linie synchron |
| sofortiger heller Kontakt-Rahmen | verworfen | Zustandswechsel war zu schwach begründet und zu abrupt |
| Helligkeit proportional zum Fahrradfortschritt | umgesetzt | gemeinsame visuelle Ursache und klare Steigerung |
| echtes versendendes Kontaktformular | verworfen | kein Backend, externe Abhängigkeit und Datenschutzaufwand |
| lokale Formulardemo | umgesetzt | zeigt Validierung und JS-Reaktion ohne Datenübertragung |

---

## 5. Stand der Finalisierung

Die gestalterische und technische Umsetzung der Website ist abgeschlossen.

Umgesetzt und dokumentiert sind:

- Hero-Überarbeitung,
- Prüfung der Bilddateien,
- komponentenbezogenes CSS-Refactoring,
- visuelle und scroll-aktive Timeline,
- erweiterte Journey bis zum ersten Rennen,
- mobile CTAs,
- Scroll-Orientierung für Hero und About,
- Micro-Animationen,
- Reduced-Motion-Verhalten,
- Kontaktabschluss mit Fahrradstrecke,
- lokale Formular-Demo,
- finale Breiten- und Ausrichtungskorrekturen.

Vor der Abgabe folgen noch:

- abschließender Testdurchlauf,
- Dokumentation der konkreten Testergebnisse,
- Übertragung der Konzeptfortschreibung in die finale Abgabeunterlage,
- Erstellung des Screenshot-PDF,
- Prüfung ungenutzter Dateien,
- Kontrolle von Git-Verlauf und `main`-Branch,
- Erstellung und Prüfung der ZIP-Datei inklusive `.git`.

Geplante Funktionen werden weiterhin nicht als bereits getestet oder abgeschlossen beschrieben. Die Dokumentation bleibt dadurch wahrheitsgetreu.

---

## 6. Testplan und finale Abgabe

### 6.1 Responsive Tests

Die Website wird bei folgenden Breiten geprüft:

- 360px,
- 767px,
- 768px,
- 1024px,
- 1199px,
- 1200px,
- 1440px,
- 1920px.

Besonders kontrolliert werden:

- Wechsel der Hero-Bildvariante,
- Ein- und Ausblenden der mobilen CTAs,
- Umschaltung der Navigation,
- Bildausschnitt des Hero,
- About-Layout,
- mobile und wechselnde Desktop-Timeline,
- horizontale Trainingstabelle,
- Rennrad-Setup,
- Journey-Rahmen,
- vollständige Renn-Card,
- Fahrradstrecke,
- Formularbreite und Textumbrüche,
- gemeinsame Fluchtlinien von Header und Hero.

### 6.2 Funktionsprüfungen

- alle Hauptnavigationseinträge,
- Hero-Sprungmarken,
- mobile Navigation,
- Skip-Link,
- Rennrad-Hotspots,
- `aria-pressed`,
- Detailkarte,
- Trainingsplan-Download,
- Glossar,
- Haupt-Timeline,
- Journey-Linie,
- Kartenrahmen,
- Rückwärtsscrollen,
- Kontaktstrecke,
- Zielzustand,
- native Formularvalidierung,
- Erfolgsmeldung,
- Formular-Reset,
- JavaScript-Konsole.

### 6.3 Barrierefreiheit

- vollständige Tastaturbedienung,
- sichtbare Fokuszustände,
- verständliche Link- und Buttonnamen,
- semantische Überschriftenstruktur,
- Alternativtexte,
- dekoratives SVG ohne unnötige Screenreader-Ausgabe,
- `aria-live`-Bereiche,
- `aria-current`,
- `aria-pressed`,
- Touchflächen,
- `prefers-reduced-motion: reduce`.

### 6.4 Finale Abgabebestandteile

1. finaler Projektstand im `main`-Branch,
2. mindestens 30 nachvollziehbare Commits,
3. aktualisierte `README.md`,
4. finale Konzept- und Reflexionsdokumentation,
5. Screenshot-PDF mit maximal zwölf Screenshots,
6. lokaler Projektordner als ZIP inklusive `.git`,
7. Kontrolle der Dateigröße und Dateibenennung,
8. zusätzlich verlangte Portfoliobestandteile aus Phase 1 und Phase 2,
9. elektronische eidesstattliche Erklärung über myCampus.

---

## 7. Technisches Fazit vor dem Abgabecheck

Phase 3 hat den vorhandenen Onepager nicht vollständig neu gestaltet, sondern gezielt weiterentwickelt.

Der Hero wurde kontrollierter in das Layout eingebunden. Die CSS-Datei wurde komponentenbezogen refaktoriert und wiederkehrende Werte wurden zentralisiert. Die sportlichen Inhalte wurden zu einer echten visuellen Timeline und einer daran anschließenden Journey weiterentwickelt.

JavaScript übernimmt gezielt Aufgaben, die mit statischem HTML und CSS nicht gleichwertig lösbar wären:

- aktive Scrollzustände,
- synchronisierte Timeline- und Journey-Fortschritte,
- interaktive Hotspots,
- lokale Formularreaktion,
- scrollabhängige Fahrradstrecke.

Während der Umsetzung wurden mehrere Ideen nicht nur ergänzt, sondern nach visuellen Tests wieder reduziert oder verworfen. Besonders der Kontaktabschluss zeigt diesen Prozess: Eine technisch mögliche Kombination aus vertikaler Linie, umlaufendem Rahmen und horizontaler Strecke wurde zugunsten einer klareren visuellen Übergabe vereinfacht.

Die finale Website verbindet:

- semantisches HTML,
- responsive Layouttechniken,
- native Interaktionen,
- bewusst eingesetztes JavaScript,
- Barrierefreiheit,
- nachvollziehbare Animationen,
- dokumentierte Reflexion des Entwicklungsprozesses.

Die technische Umsetzung ist abgeschlossen. Der letzte Arbeitsschritt besteht aus formaler Abnahme, dokumentierten Tests und der Erstellung der Abgabedateien.