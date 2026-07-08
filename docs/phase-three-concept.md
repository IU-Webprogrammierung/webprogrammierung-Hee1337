# Konzeptfortschreibung Phase 3: Meine sportliche Laufbahn

## 1. Ausgangspunkt und Leitgedanke

Die Phase-3-Version baut auf der abgegebenen Phase-2-Version des Onepagers „Meine sportliche Laufbahn“ auf. Der Webauftritt ist bereits als responsive, statische HTML-/CSS-Website umgesetzt und enthält Header, Hero-Bereich, persönliche Vorstellung, sportliche Timeline, interaktives Rennrad-Setup, Trainingsbereich, Glossar, Rennen und Footer.

Der zentrale Leitgedanke der Konzeptfortschreibung bleibt:

> Das Konzept soll so konkret aufgebaut sein, dass eine externe Agentur die Website anhand der Beschreibung nachvollziehen und funktional nachbauen könnte.

Das bedeutet für Phase 3, dass nicht nur beschrieben wird, welche Elemente finalisiert werden, sondern auch warum Änderungen vorgenommen werden und wie sie technisch umgesetzt werden. Jede größere Anpassung wird deshalb mit Ziel, Begründung, Umsetzung und Status dokumentiert.

Phase 3 ist keine Neuerstellung der Website. Der vorhandene Stand wird gezielt finalisiert. Die Seite soll ruhiger, performanter, besser strukturiert und interaktiver wirken, ohne die bestehende Inhaltslogik zu verlieren.

## 2. Ziel der Phase-3-Version

Ziel der Phase 3 ist die finale Qualitätssteigerung des bestehenden Webauftritts. Im Vordergrund stehen technische und gestalterische Verfeinerungen, die das Feedback aus Phase 2 aufnehmen und die Bewertungskriterien der finalen Abgabe unterstützen.

Die Phase-3-Version verfolgt folgende Ziele:

* Hero-Bereich visuell beruhigen und kontrollierter darstellen,
* Bildwirkung und Bildgrößen optimieren,
* CSS-Struktur verbessern und gezielt moderne CSS-Techniken einsetzen,
* Timeline von einer einfachen Card-Struktur zu einer stärker erkennbaren Verlaufskomponente weiterentwickeln,
* scroll-aktive Timeline als zusätzliche Darstellungsform ergänzen,
* dezente Micro-Animationen für bessere Bedienrückmeldung einbauen,
* Barrierefreiheit und `prefers-reduced-motion` weiter berücksichtigen,
* README und finale Abgabeunterlagen nachvollziehbar vorbereiten.

Die Website soll weiterhin von 360px bis 1920px sinnvoll nutzbar bleiben. Änderungen werden deshalb nicht nur in einer Bildschirmgröße geprüft, sondern auf Smartphone-, Tablet- und Desktop-Ansichten bewertet.

## 3. Grundprinzip der Änderungen in Phase 3

Phase 3 folgt dem Prinzip: bestehende Struktur erhalten, gezielt verbessern, Änderungen begründen.

Für jede relevante Anpassung wird dokumentiert:

1. **Ausgangsproblem:** Was war am Phase-2-Stand noch nicht optimal?
2. **Begründung:** Warum wurde eine Änderung vorgenommen?
3. **Umsetzung:** Wie wurde die Änderung technisch gelöst?
4. **Responsive Auswirkung:** Was verändert sich auf Mobile, Tablet und Desktop?
5. **Status:** Ist die Änderung umgesetzt, geplant oder verschoben?

Dadurch kann eine externe Agentur nicht nur sehen, wie die finale Website aussehen soll, sondern auch nachvollziehen, welche gestalterischen und technischen Entscheidungen hinter der Umsetzung stehen.

## 4. Phase-3-Komponenten und Änderungen

### 4.1 Hero-Bereich: von Fullscreen-Wirkung zur kontrollierten Portfolio-Bühne

**Ausgangsproblem:**  
Der Hero-Bereich war in Phase 2 sehr dominant. Das Bild lief nahezu randlos über die volle Browserbreite und wirkte auf Desktop-Ansichten stark wie eine Fullscreen-Fläche. Dadurch nahm der Hero sehr viel visuelles Gewicht ein und konkurrierte mit den folgenden Inhaltsbereichen.

**Begründung der Änderung:**  
Der Hero soll weiterhin als starker visueller Einstieg funktionieren, aber ruhiger und hochwertiger wirken. Für eine Portfolio-Seite ist ein kontrollierter Bühnencharakter sinnvoller als ein fast bildschirmfüllendes Hero-Bild. Der Inhalt der Seite soll schneller sichtbar werden, ohne dass die emotionale Bildwirkung verloren geht.

**Technische Umsetzung:**  
Der `#hero`-Bereich wird nicht mehr mit `width: 100%` randlos dargestellt, sondern mit einer begrenzten Breite:

```css
width: min(100% - 2rem, var(--max-width));
margin: 1.5rem auto var(--spacing-section);
```

Zusätzlich erhält der Hero einen Rahmen, abgerundete Ecken, Hintergrundfarbe und Schatten. Dadurch entsteht eine klar erkennbare Komponente:

```css
border: 1px solid var(--color-border);
border-radius: 1.5rem;
box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.45);
```

Die Bildhöhe wird reduziert, damit der Hero weniger wuchtig wirkt:

```css
height: clamp(30rem, 68vh, 48rem);
```

**Responsive Auswirkung:**  
Auf Desktop-Ansichten wirkt der Hero wie eine zentrierte Bühne innerhalb der maximalen Seitenbreite. Auf mobilen Ansichten bleibt die bestehende Bild-/Textlogik erhalten. Für den Bereich um 1024px wurde das Tablet-Verhalten verlängert, damit das Hero-Bild nicht zu stark abgeschnitten wird.

**Status:** umgesetzt.

### 4.2 Breakpoint-Anpassung beim Hero

**Ausgangsproblem:**  
Bei 1024px Breite wurde der Hero bereits wie ein Desktop-Hero behandelt. Das führte dazu, dass das Bild an dieser Zwischengröße ungünstig beschnitten wurde.

**Begründung der Änderung:**  
1024px liegt in diesem Layout optisch näher an einer Tablet- bzw. kleinen Laptop-Ansicht als an einer großen Desktop-Ansicht. Der Hero braucht in diesem Bereich eine kontrolliertere Höhe und Positionierung.

**Technische Umsetzung:**  
Die Tablet-Regeln werden bis 1199px erweitert. Der mittlere Desktop-Bereich beginnt erst ab 1200px. Dadurch wird die Darstellung zwischen 768px und 1199px stabiler.

**Responsive Auswirkung:**  
Bei 1024px bleibt das Bild vollständiger und ruhiger sichtbar. Ab 1200px darf der Hero wieder stärker in Richtung Desktop-Darstellung wechseln.

**Status:** umgesetzt.

### 4.3 Hero-Typografie

**Ausgangsproblem:**  
Die Hero-Headline war nach der ersten Layoutberuhigung immer noch sehr dominant. Sie nahm zu viel visuelles Gewicht ein und verdeckte große Teile des Bildes.

**Begründung der Änderung:**  
Die Überschrift soll weiterhin klar und sportlich wirken, aber nicht die gesamte Bildkomposition dominieren. Eine reduzierte Schriftgröße verbessert die Balance zwischen Text, Bild und Sprungmarken.

**Technische Umsetzung:**  
Die globale Schriftgröße der Hero-Headline wird reduziert:

```css
font-size: clamp(2.4rem, 4.6vw, 4.2rem);
```

Auch die speziellen Desktop-Werte werden kleiner gesetzt, damit die Überschrift auf großen Bildschirmen nicht übermäßig skaliert.

**Responsive Auswirkung:**  
Auf Desktop-Ansichten entsteht mehr Ruhe im Hero. Auf Tablet- und Mobile-Ansichten bleibt die Headline weiterhin gut lesbar, wirkt aber kompakter.

**Status:** umgesetzt.

### 4.4 Hero-Sprungmarken als Chips/Pills

**Ausgangsproblem:**  
Die Hero-Sprungmarken sind bereits echte HTML-Links und damit semantisch sinnvoll. Optisch wirken sie jedoch noch eher wie lose gesetzte Bildbeschriftungen.

**Begründung der Änderung:**  
Die Sprungmarken sollen eindeutiger als bedienbare Navigationselemente erkennbar sein. Eine Chip- bzw. Pill-Darstellung unterstützt die Gebrauchstauglichkeit, weil klickbare Bereiche deutlicher wahrnehmbar werden.

**Geplante technische Umsetzung:**  
Die Links der `.hero-station-navigation` erhalten Hintergrund, Border, Border-Radius, Innenabstand, Hover- und Fokuszustände. Die Gestaltung bleibt dezent, damit die Bildwirkung nicht zerstört wird.

**Responsive Auswirkung:**  
Auf Desktop-Ansichten werden die Chips über dem Bild positioniert. Auf mobilen Ansichten bleiben die bestehenden größeren Touch-Flächen erhalten.

**Status:** geplant.

### 4.5 CSS-Refactoring und gezieltes CSS-Nesting

**Ausgangsproblem:**  
Das CSS ist funktional, aber durch die schrittweise Entwicklung gewachsen. Einige Media Queries und Komponentenblöcke können klarer sortiert werden.

**Begründung der Änderung:**  
Eine klarere CSS-Struktur verbessert Wartbarkeit und Nachvollziehbarkeit. Für die Bewertung ist nicht nur entscheidend, dass die Seite funktioniert, sondern auch, dass der Code konsistent und übersichtlich aufgebaut ist.

**Geplante technische Umsetzung:**  
Das CSS wird komponentenweise sortiert:

1. Grundvariablen und Basislayout,
2. Header und Navigation,
3. Hero,
4. About,
5. Timeline,
6. Content-Bereiche,
7. Glossar,
8. Trainingstabelle,
9. Rennrad-Setup,
10. Footer,
11. Media Queries und Motion-Reduktion.

CSS-Nesting wird nur dort eingesetzt, wo es die Lesbarkeit verbessert, zum Beispiel bei Navigation, Hero, Timeline, Glossar oder Bike-Setup. Es wird nicht blind auf jede Regel angewendet.

**Responsive Auswirkung:**  
Das sichtbare Layout soll sich durch das Refactoring möglichst nicht verändern. Ziel ist eine strukturelle Verbesserung ohne Funktionsverlust.

**Status:** geplant.

### 4.6 Bildoptimierung

**Ausgangsproblem:**  
Aus dem Feedback nach Phase 2 ergibt sich, dass Bilder teilweise noch zu groß sind. Das betrifft nicht nur die sichtbare Darstellung, sondern vermutlich auch Dateigrößen und Bildabmessungen.

**Begründung der Änderung:**  
Optimierte Bilder verbessern Ladezeit, Performance und technische Qualität der Website. Gerade bei großen Hero-Bildern kann eine unnötig große Datei die Seite verlangsamen.

**Geplante technische Umsetzung:**  
Die vorhandenen Bilder werden geprüft und bei Bedarf in passenden Größen und als WebP-Versionen exportiert. Besonders relevant sind:

* Desktop-Hero,
* Mobile-Hero,
* Rennrad-Setup-Bild,
* Portraitbild.

Falls WebP-Versionen verwendet werden, werden sie über `picture` und `source` eingebunden. Die bestehenden `alt`-Texte bleiben erhalten oder werden bei Bedarf präzisiert.

**Responsive Auswirkung:**  
Mobile Geräte sollen kleinere, passend zugeschnittene Bilddateien laden. Desktop-Ansichten erhalten weiterhin ausreichend hohe Bildqualität, aber keine unnötig großen Quelldateien.

**Status:** geplant.

### 4.7 Timeline als visuelle Verlaufskomponente

**Ausgangsproblem:**  
Die sportlichen Stationen werden bereits als Timeline-/Card-Bereich dargestellt. Visuell ist die Timeline in Phase 2 aber noch stark eine Grid-Kartenstruktur.

**Begründung der Änderung:**  
Die sportliche Laufbahn ist inhaltlich ein zeitlicher Entwicklungsverlauf. Eine echte Timeline mit Linie, Punkten und aktiven Zuständen unterstützt diese Erzählung besser als reine Cards.

**Geplante technische Umsetzung:**  
Die bestehenden `article`-Elemente bleiben erhalten. Sie werden um ein Datenattribut ergänzt, zum Beispiel:

```html
<article id="jugend" class="timeline-card" data-timeline-item>
```

CSS ergänzt eine vertikale Linie, Timeline-Punkte und aktive Kartenzustände. Die vorhandenen Inhalte bleiben semantisch unverändert.

**Responsive Auswirkung:**  
Mobil wird die Timeline einspaltig mit Linie links neben den Cards dargestellt. Auf größeren Ansichten kann eine zentrale oder seitliche Achse eingesetzt werden, ohne die Lesbarkeit der Texte zu verschlechtern.

**Status:** geplant.

### 4.8 Scroll-aktive Timeline mit JavaScript

**Ausgangsproblem:**  
Der Verlauf der sportlichen Stationen ist bisher statisch. Beim Scrollen gibt es keine aktive Orientierung, welche Station gerade im Fokus steht.

**Begründung der Änderung:**  
Eine scroll-aktive Timeline ist eine passende Phase-3-Erweiterung, weil sie eine zusätzliche Darstellungsform und Interaktion einführt. Sie unterstützt die inhaltliche Erzählung der sportlichen Entwicklung.

**Geplante technische Umsetzung:**  
JavaScript misst den sichtbaren Bereich der Timeline, berechnet den Scrollfortschritt und setzt eine CSS-Variable, zum Beispiel:

```css
--timeline-progress
```

Zusätzlich erhält die aktuell sichtbare Karte eine Klasse wie `.is-active`. Die Animation wird so umgesetzt, dass Inhalte auch ohne JavaScript verständlich bleiben.

**Barrierefreiheit:**  
Bei `prefers-reduced-motion: reduce` wird die Bewegung reduziert oder deaktiviert. Die Timeline bleibt auch ohne Animation lesbar.

**Status:** geplant.

### 4.9 Micro-Animationen für Bedienrückmeldung

**Ausgangsproblem:**  
Einige Elemente besitzen bereits Hover- oder Fokuszustände, aber die Bedienrückmeldung kann noch konsistenter und feiner wirken.

**Begründung der Änderung:**  
Micro-Animationen sollen nicht dekorativ überladen, sondern Rückmeldung geben: Was ist klickbar? Was ist aktiv? Was wurde geöffnet? Was verändert sich gerade?

**Geplante technische Umsetzung:**  
Dezente Übergänge werden ergänzt für:

* Hero-Sprungmarken,
* Content-Cards,
* Button-Link,
* Glossar-Einträge,
* Bike-Setup-Hotspots,
* Bike-Detailkarte,
* Navigation.

Alle Animationen bleiben kurz und zurückhaltend. `prefers-reduced-motion` wird berücksichtigt.

**Responsive Auswirkung:**  
Auf Touch-Geräten steht nicht Hover, sondern Fokus, aktive Zustände und ausreichende Touch-Fläche im Vordergrund. Auf Desktop-Ansichten unterstützen Hover-Animationen die Bedienbarkeit.

**Status:** geplant.

## 5. Responsive Zielstruktur der finalen Version

### 5.1 Mobile: 360px bis 767px

* Header mit Logo und aufklappbarer Navigation,
* Hero mit mobiler Bildvariante und großen Touch-Flächen,
* Inhalte einspaltig untereinander,
* Timeline einspaltig mit sichtbarer Verlaufslinie,
* Trainingstabelle horizontal scrollbar,
* Rennrad-Hotspots kleiner dargestellt,
* Footer gestapelt.

### 5.2 Tablet und kleine Laptops: 768px bis 1199px

* horizontale Navigation,
* Hero mit kontrollierter Bildhöhe und reduzierter Headline,
* Timeline weiterhin lesbar und nicht zu eng,
* Inhalte mit größeren Abständen,
* Hero-Bild wird weniger stark beschnitten als im ursprünglichen 1024px-Zustand.

### 5.3 Desktop: ab 1200px

* Hero als zentrierte Portfolio-Bühne,
* klare Desktop-Positionierung von Headline und Sprungmarken,
* About-Bereich mit Text und Portrait nebeneinander,
* Rennrad-Setup zweispaltig mit sticky Detailkarte,
* Timeline als stärker visuelle Verlaufskomponente.

### 5.4 Große Desktops: ab 1440px bis 1920px

* maximale Inhaltsbreite bleibt erhalten,
* Hero skaliert kontrolliert und wird nicht zu hoch,
* textlastige Bereiche bleiben lesbar,
* Cards und Timeline werden nicht unnötig breitgezogen.

## 6. Umsetzungsmatrix Phase 3

| Bereich | Änderung | Warum? | Wie? | Status |
|---|---|---|---|---|
| Hero | Breite begrenzen, Rahmen, Radius, Schatten | weniger wuchtig, hochwertigere Bühne | `width: min(...)`, Border, Radius, Shadow | umgesetzt |
| Hero | Bildhöhe reduzieren | mehr Inhalt schneller sichtbar | `height: clamp(30rem, 68vh, 48rem)` | umgesetzt |
| Hero | 1024px-Verhalten korrigieren | Bild wurde ungünstig beschnitten | Tablet-Regeln bis 1199px, Desktop ab 1200px | umgesetzt |
| Hero | Headline verkleinern | Text dominierte Bild zu stark | kleinere `clamp()`-Werte | umgesetzt |
| Hero-Sprungmarken | Chips/Pills | Links klarer als Bedienelemente zeigen | Background, Radius, Fokus/Hover | geplant |
| CSS | Struktur refaktorieren | Wartbarkeit verbessern | Komponenten sortieren, doppelte Media Queries prüfen | geplant |
| CSS | gezieltes Nesting | moderne CSS-Technik sinnvoll einsetzen | nur komponentenweise | geplant |
| Bilder | WebP/kleinere Größen | Performance verbessern | Export, `picture`, `srcset` prüfen | geplant |
| Timeline | visuelle Linie und Punkte | Verlauf stärker sichtbar machen | CSS-Pseudo-Elemente, aktive Zustände | geplant |
| Timeline | Scroll-Animation | zusätzliche Darstellungsform | JS + CSS-Variable + `.is-active` | geplant |
| UX | Micro-Animationen | bessere Rückmeldung | kurze Transitions, reduced motion | geplant |
| Doku | README und Konzept erweitern | Bewertungsbasis stärken | Phase-3-Abschnitt ergänzen | fortlaufend |

## 7. Barrierefreiheit und Bedienbarkeit in Phase 3

Die bestehenden Maßnahmen aus Phase 1 und Phase 2 bleiben erhalten. In Phase 3 werden sie vor allem im Zusammenhang mit Animationen und Interaktionen weiter abgesichert.

Wichtige Punkte:

* Hero-Sprungmarken bleiben echte Links,
* Hotspots bleiben echte Buttons,
* aktive Zustände werden nicht nur optisch, sondern auch semantisch sinnvoll abgebildet,
* Fokuszustände bleiben sichtbar,
* `prefers-reduced-motion` wird für Animationen berücksichtigt,
* Inhalte bleiben auch ohne JavaScript verständlich,
* mobile Touch-Flächen bleiben ausreichend groß,
* responsive Tests erfolgen bei 360px, 768px, 1024px, 1440px und 1920px.

## 8. Dokumentation und finale Abgabe

Am Ende der Phase 3 wird die README.md um einen eigenen Abschnitt zur Finalisierung erweitert. Dort werden die eingesetzten Technologien, Methoden, Animationen, Refactorings, Bildoptimierungen, Tests und Barrierefreiheitsmaßnahmen beschrieben.

Zusätzlich wird eine Screenshot-PDF mit maximal 12 Screenshots vorbereitet. Die Screenshots sollen unterschiedliche Breakpoints und zentrale Komponenten zeigen:

1. Mobile Hero,
2. Mobile Navigation,
3. Tablet-Ansicht,
4. Desktop Hero,
5. Timeline,
6. scroll-aktive Timeline,
7. Rennrad-Setup,
8. Trainingstabelle,
9. Glossar,
10. Footer.

Für die finale Abgabe wird der lokale Projektordner als ZIP inklusive `.git`-Ordner eingereicht. Der finale Stand muss im `main`-Branch auf GitHub vorhanden sein.

## 9. Laufende Änderungsnotizen für Phase 3

### Änderung 1: Hero-Layout beruhigt

Der Hero wurde von einer randlosen Fullscreen-Wirkung zu einer zentrierten Portfolio-Bühne umgebaut. Die Änderung wurde vorgenommen, weil der Hero in Phase 2 sehr wuchtig wirkte und die nachfolgenden Inhalte zu stark nach unten verdrängte.

### Änderung 2: 1024px-Breakpoint korrigiert

Bei 1024px wurde das Bild ungünstig beschnitten. Deshalb wurde das Tablet-Verhalten bis 1199px erweitert und der Desktop-Zustand erst ab 1200px aktiviert. Dadurch wird die Bildkomposition in kleinen Desktop-/Tablet-Zwischenbreiten stabiler.

### Änderung 3: Hero-Headline reduziert

Die Headline wurde verkleinert, weil sie nach der Layoutberuhigung weiterhin zu dominant wirkte. Die neue Skalierung erhält die starke Wirkung, lässt aber mehr Bild und Raum sichtbar.

## 10. Zusammenfassung

Phase 3 finalisiert den bestehenden Webauftritt gezielt, statt ihn neu aufzubauen. Die wichtigsten Ziele sind ein ruhigerer Hero, bessere Bildperformance, sauberere CSS-Struktur, eine ausdrucksstärkere Timeline, sinnvolle Micro-Animationen und eine nachvollziehbare Dokumentation.

Die Konzeptfortschreibung hält fest, warum Änderungen vorgenommen wurden und wie sie technisch umgesetzt werden. Dadurch bleibt der Projektverlauf transparent und der finale Stand kann sowohl von Tutor:innen als auch von einer externen Agentur nachvollzogen werden.
