# Konzeptfortschreibung Phase 2: Meine sportliche Laufbahn

## 1. Ausgangspunkt und Feedback aus Phase 1

Phase 1 des Projekts wurde erfolgreich eingereicht und abgeschlossen. Aus dem Tutor:innen-Feedback ergeben sich für Phase 2 mehrere konkrete Arbeitsaufträge: Das Konzept soll so weiterentwickelt werden, dass es von einer externen Agentur nachvollzogen und umgesetzt werden könnte. Außerdem sollen Layout, Navigation, Wireframes, responsives Verhalten und Komponenten konkreter beschrieben werden. Bei größeren Bildschirmauflösungen sollen mehrspaltige Layouts geprüft werden. Die Navigation soll deutlicher dargestellt werden, der HTML-Code soll über das sparsame Grundgerüst aus Phase 1 hinaus erweitert werden und das Hero-Bild soll optimiert werden.

Zentraler Leitgedanke der Konzeptfortschreibung ist daher:

> Das Konzept soll so konkret aufgebaut sein, dass eine externe Agentur die Website anhand der Beschreibung nachvollziehen und umsetzen könnte.

Das bedeutet für Phase 2, dass Layout, Navigation, Komponenten, Breakpoints, Bildverwendung, Interaktionen und technische Entscheidungen nicht nur allgemein benannt, sondern möglichst konkret beschrieben werden. Das Konzept dokumentiert außerdem nicht nur die ursprüngliche Planung, sondern auch Anpassungen im Verlauf der Umsetzung. Wenn eine Idee verändert, verschoben oder verworfen wurde, wird dies kenntlich gemacht und begründet. Dadurch bleibt nachvollziehbar, welche Bestandteile tatsächlich umgesetzt wurden, welche Entscheidungen aus Gründen der Responsivität, Bedienbarkeit oder Lesbarkeit angepasst wurden und welche Erweiterungen als mögliche Phase-3-Option bestehen bleiben.

Aus dem Feedback ergeben sich für Phase 2 folgende Schwerpunkte:

* konkretere Angaben zu Layout, Navigation, Komponenten und responsivem Verhalten,
* stärkere Orientierung an Mobile-, Tablet- und Desktop-Ansichten,
* Prüfung und Umsetzung von Mehrspaltenlayouts bei größeren Bildschirmgrößen,
* bessere Darstellung und Begründung der Navigation,
* Erweiterung des HTML-Codes durch sinnvoll eingesetzte semantische Elemente,
* Optimierung des Hero-Bereichs und der Bildverwendung,
* nachvollziehbare Dokumentation von umgesetzten, angepassten und verschobenen Ideen.

## 2. Ziel der Phase-2-Version

In Phase 2 wird der bisherige HTML-Prototyp zu einem gestalteten, responsiven Webauftritt weiterentwickelt. Die Website bleibt als scrollbarer Onepager angelegt, wird aber stärker in klar unterscheidbare Inhaltsbereiche und wiederverwendbare Komponenten gegliedert.

Ziel ist ein Zwischenstand, der gestalterisch, technisch und strukturell deutlich konkreter ist als das Grundgerüst aus Phase 1. Die Seite soll auf Smartphone-, Tablet- und Desktop-Ansichten sinnvoll funktionieren. Dafür werden Media Queries, CSS Grid, Flexbox, responsive Bildvarianten, semantische HTML-Elemente und gezielte Interaktionen eingesetzt.

Inhaltlich zeigt der Onepager die sportliche Entwicklung von Christopher Berg. Die Seite beginnt mit einem visuellen Hero-Bereich, führt dann über die persönliche Vorstellung in die sportliche Laufbahn, ergänzt technische und trainingsbezogene Inhalte und endet mit Renn-Erfahrung, Projektinformationen und Impressum.

## 3. Komponenten und Aufbau der Phase-2-Version

Die Website wird in Phase 2 in mehrere Hauptbereiche gegliedert. Jeder Bereich erfüllt eine eigene Funktion innerhalb des Onepagers und wird über die Hauptnavigation oder ergänzende Sprungmarken erreichbar gemacht.

### 3.1 Hauptnavigation

Die Hauptnavigation dient der Orientierung innerhalb des Onepagers. Sie wurde in Phase 2 bewusst verschlankt und verweist nur auf die zentralen Inhaltsbereiche:

* Das bin ich
* Laufbahn
* Setup
* Training
* Glossar
* Rennen
* Impressum

Einzelne Detailstationen wie Jugend, CrossFit, Hyrox und Rennrad werden nicht zusätzlich in der Hauptnavigation aufgeführt. Diese Stationen bleiben über die Hero-Overlays und innerhalb des Timeline-Bereichs erreichbar. Dadurch entsteht eine klare Trennung zwischen Hauptnavigation und Detailnavigation.

#### Mobile Darstellung: 360px bis 767px

Auf kleinen Bildschirmen wird die Navigation platzsparend als aufklappbares Menü dargestellt. Die Umsetzung erfolgt mit dem nativen HTML-Element `details` und einem `summary` als sichtbarem Menüauslöser. Dadurch kann die Navigation ohne zusätzliches JavaScript geöffnet und geschlossen werden.

Die einzelnen Links werden innerhalb des aufgeklappten Menüs untereinander dargestellt. Sie erhalten ausreichend Abstand und gut bedienbare Klickflächen, damit sie auf Touch-Geräten nutzbar bleiben. Die Navigation bleibt per Tastatur erreichbar und erhält sichtbare Fokuszustände.

#### Tablet- und Desktop-Darstellung: ab 768px

Ab 768px wird das mobile Toggle-Menü ausgeblendet. Stattdessen wird eine eigene horizontale Navigationsliste angezeigt. Diese Trennung sorgt dafür, dass die Desktop-/Tablet-Navigation unabhängig vom geschlossenen mobilen Menü sichtbar bleibt.

Die Links werden rechts im Header dargestellt. Auf Desktop-Ansichten werden sie zusätzlich durch dezente Trennstriche gegliedert. Dadurch bleibt der Header übersichtlich, obwohl mehrere zentrale Seitenbereiche direkt erreichbar sind.

#### Technische Umsetzung

Die Hauptnavigation wird mit `nav`, `ul`, `li` und `a` umgesetzt. Das `nav`-Element erhält `aria-label="Hauptnavigation"`. Für die mobile Darstellung werden zusätzlich `details` und `summary` verwendet. Die Darstellung erfolgt mit Flexbox und Media Queries. Fokus- und Hoverzustände werden per CSS gestaltet.

### 3.2 Hero-Bereich

Der Hero-Bereich bildet den visuellen Einstieg der Website. Er enthält eine große Sportcollage, eine prägnante Headline und ergänzende Sprungmarken zu den Sportstationen.

Das Hero-Bild enthält keine eingebrannten Texte. Die Beschriftungen der Sportarten werden als echte HTML-Elemente umgesetzt. Dadurch bleiben sie wartbar, responsiv anpassbar und per Tastatur erreichbar.

Für mobile Ansichten wird eine eigene hochformatige Bildvariante über das `picture`-Element eingebunden. Die vier Sportstationen werden auf kleinen Bildschirmen als transparente klickbare Overlay-Flächen auf dem Bild dargestellt. Auf größeren Ansichten wird ein breiteres Desktop-Bild verwendet.

Das zunächst im Hero vorgesehene Portraitbild wurde im Verlauf der Umsetzung in den Bereich „Das bin ich“ verschoben. Dadurch wirkt der Hero stärker als visueller Einstieg über die Sportarten, während das Portrait im persönlichen Bereich inhaltlich passender platziert ist.

### 3.3 Persönliche Vorstellung: „Das bin ich“

Der Bereich „Das bin ich“ stellt die Person hinter der Website vor. Er wird als eigene Card-Komponente umgesetzt und enthält Fließtext sowie ein rund dargestelltes Portraitbild.

Auf mobilen Ansichten werden Text und Portrait untereinander angezeigt. Ab Desktop-Breite werden Text und Portrait nebeneinander angeordnet. Der Bereich nutzt denselben visuellen Stil wie die weiteren Content-Cards der Seite, damit die Gestaltung konsistent bleibt.

### 3.4 Sportliche Laufbahn als Timeline-/Card-Bereich

Die sportlichen Stationen werden als zusammenhängender Entwicklungsverlauf dargestellt. Der Bereich „Meine sportlichen Stationen“ enthält die Stationen Jugend/Handball, CrossFit, Hyrox und Rennrad.

Jede Station wird als eigenständiges `article`-Element umgesetzt. Jahresangaben werden mit `time` ausgezeichnet. Dadurch sind die Stationen nicht nur visuell, sondern auch semantisch als einzelne Inhaltsblöcke innerhalb einer gemeinsamen Laufbahn strukturiert.

Mobil werden die Stationen einspaltig angezeigt. Ab Tablet-Breite wird ein zweispaltiges Grid verwendet. Eine vier- oder dreispaltige Darstellung wurde geprüft, aber zugunsten der Lesbarkeit verworfen, weil die Karten textlastig sind und bei zu vielen Spalten zu schmal würden.

### 3.5 Rennrad-Setup

Der Rennradbereich enthält zwei Ebenen:

1. eine ergänzende Setup-Infobox im Timeline-Artikel,
2. eine eigene interaktive Rennrad-Setup-Komponente.

Die Infobox ergänzt den Rennradtext mit kurzen Fakten zum Rad, zur Schaltung, zu Bremsen, Gewicht, Training und Zielen. Sie wird als `aside` umgesetzt, weil sie den Haupttext unterstützt, aber inhaltlich separat dargestellt werden kann.

Die interaktive Setup-Komponente bildet ein eigenes Highlight der Phase-2-Version. Ein Bild des Rennrads wird mit klickbaren Hotspots versehen. Beim Anklicken wird eine Detailkarte aktualisiert, die die jeweilige Komponente erklärt. Die Hotspots werden als echte `button`-Elemente umgesetzt und per JavaScript gesteuert.

### 3.6 Trainingsbereich

Der Trainingsbereich erklärt den Einstieg in strukturiertes Rennradtraining. Er enthält mehrere Absätze, eine semantische Tabelle und einen Download-Link für einen beispielhaften Trainingsplan.

Die Tabelle stellt eine beispielhafte Sweetspot-Progression dar. Sie nutzt `caption`, `thead`, `tbody`, `th`, `td` und `scope="col"`, damit die tabellarische Struktur nachvollziehbar bleibt. Auf kleinen Bildschirmen wird die Tabelle scrollbar gehalten, damit sie nicht aus dem Layout herausragt.

Der Download-Link wird semantisch als `a`-Element mit `download`-Attribut umgesetzt, erhält aber per CSS eine Button-Optik.

### 3.7 Trainings-Glossar

Das Trainings-Glossar wurde in Phase 2 als eigener zusätzlicher Inhaltsbereich ergänzt. Es erklärt zentrale Begriffe wie FTP, Sweetspot, VO₂max, Zone 2, Kadenz und Watt pro Kilogramm.

Die Umsetzung erfolgt mit `details` und `summary`. Dadurch entsteht eine native HTML-Interaktion ohne JavaScript. Die Begriffe können aufgeklappt werden, bleiben per Tastatur bedienbar und erweitern den HTML-Anteil der Seite sinnvoll.

Die Glossareinträge werden optisch als Cards gestaltet und erhalten dezente Animationen für das Öffnen. Nutzer:innen können dadurch Begriffe nach Bedarf lesen, ohne dass der Bereich zu viel Platz einnimmt.

### 3.8 Rennen

Der Bereich „Mein erstes Rennen“ beschreibt die erste Rennerfahrung und den daraus entstandenen Trainingsfokus. Er wird als kompakte Content-Card umgesetzt und bildet inhaltlich den Übergang von sportlicher Entwicklung zu zukünftigen Zielen.

### 3.9 Footer und Impressum

Das Impressum wurde aus dem normalen Inhaltsfluss herausgelöst und in einen semantischen `footer` verschoben. Dadurch endet die Seite mit einem klaren Seitenabschluss.

Der Footer enthält Projektinformationen, Kontaktangaben, ergänzende Footer-Navigation und den Hinweis, dass es sich um ein Studienprojekt handelt. Kontaktinformationen werden mit `address` ausgezeichnet. Auf größeren Bildschirmen wird der Footer mehrspaltig dargestellt, auf mobilen Geräten werden die Inhalte gestapelt.

### 3.10 Bildergalerie als verschobene Erweiterung

Eine Bildergalerie mit `figure` und `figcaption` war als mögliche Phase-2-Erweiterung vorgesehen. Sie wurde in Phase 2 bewusst nicht umgesetzt, weil stattdessen das Trainings-Glossar und die interaktive Rennrad-Setup-Komponente priorisiert wurden.

Diese Entscheidung wurde getroffen, weil Glossar und Setup-Komponente den HTML-Anteil stärker erweitern und mehr funktionalen Mehrwert bieten als eine zusätzliche Galerie. Die Galerie bleibt als mögliche Phase-3-Erweiterung bestehen.

## 4. Responsive Layoutlogik und Breakpoints

Die Website wird mobile-first aufgebaut. Die mobile Darstellung bildet die Grundlage. Größere Ansichten werden über Media Queries erweitert.

### 4.1 Mobile Ansicht: 360px bis 767px

In der mobilen Ansicht werden die Hauptbereiche einspaltig untereinander dargestellt. Die Navigation erscheint als aufklappbares Menü. Das Hero-Bild nutzt eine eigene hochformatige Bildvariante. Die Sportstationen liegen als klickbare Overlay-Flächen auf dem Hero-Bild.

Content-Bereiche, Cards, Glossar, Training und Rennen nehmen die volle verfügbare Breite ein. Die Trainingstabelle wird horizontal scrollbar gehalten. Die Hotspots im Rennrad-Setup werden verkleinert, damit sie auf kleinen Bildschirmen nicht zu dominant wirken.

### 4.2 Tablet Ansicht: ab 768px

Ab 768px wird die Navigation horizontal dargestellt. Die Timeline nutzt ein zweispaltiges Grid. Die Inhalte bleiben weiterhin gut lesbar und erhalten größere Abstände.

Der Hero-Bereich nutzt eine angepasste Bilddarstellung mit kompakteren Text- und Linkpositionen. Die mobile Toggle-Navigation wird ausgeblendet, die Desktop-/Tablet-Navigation wird eingeblendet.

### 4.3 Desktop Ansicht: ab 1024px

Ab 1024px werden mehrere Komponenten stärker auf Desktop-Nutzung optimiert. Der „Das bin ich“-Bereich zeigt Text und Portrait nebeneinander. Das Rennrad-Setup nutzt ein zweispaltiges Layout: Bild und Hotspots stehen links, die Detailkarte rechts. Die Detailkarte bleibt über `position: sticky` beim Scrollen im sichtbaren Bereich.

Der Footer wird mehrspaltig dargestellt. Die Navigation bleibt schlank und rechts im Header ausgerichtet.

### 4.4 Große Desktop Ansicht: ab 1440px

Ab 1440px wird die Hero-Positionierung weiter verfeinert. Die Timeline bleibt bewusst maximal zweispaltig und wird in ihrer Breite begrenzt, damit die textlastigen Karten lesbar bleiben. Diese Entscheidung ersetzt eine ursprünglich denkbare Drei- oder Vier-Spalten-Lösung.

### 4.5 Eingesetzte Layouttechniken

Flexbox wird vor allem für Header, Navigation, Footer und kleinere Ausrichtungen eingesetzt. CSS Grid wird für Card-Bereiche, Timeline, Content-Strukturen und das Rennrad-Setup verwendet. Media Queries steuern die Breakpoints bei 768px, 1024px und 1440px.

## 5. Textuelle Wireframe- und Layoutbeschreibung

Die Wireframe-Logik wird in Phase 2 konkreter beschrieben, damit die Seite auch ohne unmittelbaren Blick in den Code nachvollziehbar bleibt.

### 5.1 Mobile Wireframe

Die mobile Reihenfolge lautet:

1. Header mit Logo und aufklappbarem Menü,
2. Hero-Bereich mit mobilem Bild, Overlay-Sprungmarken und mobiler Headline,
3. „Das bin ich“-Card mit Text und Portrait,
4. Timeline mit vier einspaltigen Stationen,
5. interaktives Rennrad-Setup,
6. Training mit Tabelle und Download-Link,
7. Trainings-Glossar,
8. Rennen-Card,
9. Footer mit Impressum und Projektinfo.

### 5.2 Tablet Wireframe

Auf Tablet-Ansichten wird die Navigation horizontal angezeigt. Die Timeline nutzt zwei Spalten. Die meisten Content-Bereiche bleiben als Cards untereinander, erhalten aber größere Breite und mehr Abstand.

### 5.3 Desktop Wireframe

Auf Desktop-Ansichten wird die Seite stärker horizontal strukturiert. Die Hauptnavigation steht rechts im Header. Der „Das bin ich“-Bereich zeigt Text und Portrait nebeneinander. Das Rennrad-Setup zeigt Bild/Hotspots und Detailkarte nebeneinander. Footer und einzelne Inhaltsbereiche nutzen mehrspaltige Anordnungen, bleiben aber innerhalb einer maximalen Inhaltsbreite.

## 6. Umsetzungsmatrix und aktueller Phase-2-Stand

Damit das Konzept als konkrete Arbeitsgrundlage genutzt werden kann, werden die geplanten Komponenten mit ihrer technischen Umsetzung und dem aktuellen Stand abgeglichen.

### 6.1 Hauptnavigation

**HTML-Umsetzung:**  
`nav`, `ul`, `li`, `a`, zusätzlich `details` und `summary` für die mobile Navigation.

**CSS-Umsetzung:**  
Mobile Toggle-Navigation, horizontale Desktop-/Tablet-Navigation, Flexbox, Trennstriche, Hover- und Fokuszustände.

**Status:** umgesetzt und angepasst.  
Die Navigation wurde verschlankt und bildet nur noch die zentralen Inhaltsbereiche ab. Detailstationen sind über Hero-Overlays und Timeline erreichbar.

### 6.2 Hero-Bereich

**HTML-Umsetzung:**  
`section`, `picture`, `source`, `img`, zusätzliche Hero-Navigation mit echten `a`-Elementen.

**CSS-Umsetzung:**  
Desktop-Hero mit breitem Bild, mobile Bildvariante, Overlay-Links, mobile transparente Touch-Flächen, responsive Textvarianten.

**Status:** umgesetzt und angepasst.  
Das Portrait wurde aus dem Hero in den Bereich „Das bin ich“ verschoben.

### 6.3 Persönliche Vorstellung

**HTML-Umsetzung:**  
`section`, Textblock, `figure`, `img`.

**CSS-Umsetzung:**  
Card-Layout, rundes Portrait, einspaltig mobil, zweispaltig ab Desktop.

**Status:** umgesetzt und ergänzt.

### 6.4 Sportliche Laufbahn

**HTML-Umsetzung:**  
`section`, mehrere `article`-Elemente, `time` für Jahresangaben, ergänzendes `aside` im Rennrad-Artikel.

**CSS-Umsetzung:**  
Responsive Timeline-Cards mit CSS Grid. Einspaltig mobil, zweispaltig ab Tablet. Große Mehrspaltenvarianten wurden zugunsten der Lesbarkeit verworfen.

**Status:** umgesetzt.

### 6.5 Rennrad-Setup

**HTML-Umsetzung:**  
`section`, `figure`, `figcaption`, `button`-Hotspots, `article` als Detailkarte.

**CSS- und JavaScript-Umsetzung:**  
Absolute Hotspot-Positionierung, responsive Größenanpassung, aktive Zustände, Detailkarten-Animation, kleines Vanilla JavaScript zur Aktualisierung von Titel und Beschreibung.

**Status:** umgesetzt und erweitert.

### 6.6 Trainingsbereich

**HTML-Umsetzung:**  
`section`, Absätze, semantische Tabelle mit `caption`, `thead`, `tbody`, `th`, `td`, Download-Link mit `download`.

**CSS-Umsetzung:**  
Content-Card, responsive Tabelle mit horizontalem Scrollen, Button-Optik für den Download-Link.

**Status:** umgesetzt.

### 6.7 Trainings-Glossar

**HTML-Umsetzung:**  
Eigener Abschnitt mit `details`, `summary`, `sub` und erklärenden Texten.

**CSS-Umsetzung:**  
Aufklappbare Glossar-Cards, Plus-/Minus-Indikator, Hover-/Fokuszustände und dezente Pop-Animation.

**Status:** neu ergänzt und umgesetzt.

### 6.8 Footer und Impressum

**HTML-Umsetzung:**  
`footer`, `address`, ergänzende Footer-Navigation und Projektinfo.

**CSS-Umsetzung:**  
Visuelle Trennung vom Hauptinhalt, gestapeltes Layout mobil, mehrspaltiges Layout ab Desktop.

**Status:** umgesetzt.

### 6.9 Bildergalerie

**HTML-/CSS-Planung:**  
Eine Galerie mit `figure`, `figcaption` und responsivem Grid war ursprünglich vorgesehen.

**Status:** bewusst in Phase 2 verschoben.  
Die Erweiterung bleibt als mögliche Phase-3-Option bestehen.

## 7. Entscheidungen und Begründungen

### 7.1 Verschlankung der Hauptnavigation

Die Hauptnavigation wurde im Verlauf von Phase 2 bewusst reduziert. Anfangs waren auch einzelne Sportstationen wie Jugend, CrossFit, Hyrox und Rennrad als direkte Navigationspunkte vorgesehen. Diese Lösung wirkte auf Desktop-Ansichten zu gedrängt und hätte auf mobilen Geräten unnötig viele Links erzeugt.

Die Hauptnavigation verweist deshalb nur noch auf die größeren Inhaltsbereiche. Detailnavigation findet über die Hero-Overlays und die Timeline statt. Dadurch bleibt die Hauptnavigation übersichtlich, ohne dass Inhalte schlechter erreichbar werden.

### 7.2 Hero-Bereich mit responsiven Bildvarianten

Das breite Desktop-Hero-Bild eignet sich gut für große Bildschirme, verliert auf kleinen hochformatigen Displays jedoch wichtige Bildbereiche. Deshalb wird für mobile Ansichten eine eigene hochformatige Bildversion eingesetzt.

Die technische Umsetzung mit `picture` und `source` ermöglicht es dem Browser, abhängig von der Bildschirmbreite die passende Bildquelle zu laden. Texte und Sprungmarken bleiben echte HTML-Elemente und werden nicht in das Bild eingebrannt. Dadurch bleiben Inhalte wartbar, barriereärmer und responsiv kontrollierbar.

### 7.3 Mobile Hero-Overlays

Die mobilen Hero-Overlays verbinden Bildwirkung und Navigation. Jede Bildkachel erhält eine transparente klickbare Fläche mit Sportart und kurzer Zusatzbeschreibung. Diese Flächen sind echte Links und dienen als Sprungmarken zu den entsprechenden Bereichen.

Diese Lösung wurde gewählt, weil sie die mobile Hero-Grafik visuell nutzt, aber gleichzeitig semantisch sauberer ist als eingebrannte Bildtexte.

### 7.4 Portrait im „Das bin ich“-Bereich

Das Portrait wurde aus dem Hero-Bereich entfernt und in den Bereich „Das bin ich“ verschoben. Dadurch wird der Hero stärker als sportlicher Einstieg genutzt, während das Portrait inhaltlich dort erscheint, wo die persönliche Vorstellung stattfindet.

Diese Anpassung verbessert die klare Trennung der Bereiche: Der Hero führt visuell in die Sportarten ein, die About-Card stellt die Person vor.

### 7.5 Timeline-Struktur für sportliche Stationen

Die Timeline-Struktur wurde gewählt, weil die sportlichen Stationen eine chronologische Entwicklung darstellen. Die einzelnen Stationen sind eigenständige Inhaltsblöcke und werden deshalb als `article` umgesetzt. Die Jahresangaben erhalten das `time`-Element.

Eine sehr breite Mehrspaltenansicht wurde verworfen, weil die Karten viel Text enthalten. Maximal zwei Spalten verbessern die Lesbarkeit und greifen trotzdem das Feedback auf, größere Auflösungen stärker zu nutzen.

### 7.6 Trainingsprogression als Tabelle

Die Trainingsprogression enthält vergleichbare Daten zu Woche, Einheit, Zielbereich und Trainingsziel. Diese Inhalte stehen sinnvoll in Zeilen- und Spaltenbeziehung und werden deshalb als Tabelle umgesetzt.

Die Tabelle erhält eine `caption` und Spaltenüberschriften mit `th` und `scope="col"`. Auf kleinen Bildschirmen wird horizontales Scrollen ermöglicht, damit die Tabelle lesbar bleibt.

### 7.7 Trainings-Glossar als interaktiver HTML-Bereich

Das Glossar erweitert die Seite um native HTML-Interaktion. `details` und `summary` ermöglichen aufklappbare Begriffserklärungen ohne JavaScript. Dadurch wird der HTML-Anteil sinnvoll erweitert und die Seite inhaltlich verständlicher.

Die Glossareinträge werden als Cards gestaltet und erhalten dezente Animationen. Bewegung wird über `prefers-reduced-motion` berücksichtigt.

### 7.8 Interaktives Rennrad-Setup

Das Rennrad-Setup wurde als Highlight-Komponente ergänzt, um den HTML-Code zu erweitern und die Seite funktional interessanter zu machen. Die Hotspots sind echte `button`-Elemente und aktualisieren eine Detailkarte.

Für diese Komponente wird bewusst kleines Vanilla JavaScript eingesetzt, weil hier ein Zustand gesteuert werden muss: Der aktive Hotspot wird markiert, die Detailkarte wird aktualisiert und `aria-pressed` wird angepasst. Ein Framework wäre für diese Aufgabe nicht notwendig.

### 7.9 Footer und Impressum

Das Impressum wurde in den Footer verschoben, damit der inhaltliche Hauptbereich nicht mit organisatorischen Angaben endet. Der Footer fasst Projektinfo, Kontakt und ergänzende Navigation zusammen und nutzt dafür semantische HTML-Elemente.

### 7.10 Verschobene Bildergalerie

Eine Bildergalerie war ursprünglich als Erweiterung geplant. Sie wurde zugunsten des Glossars und der interaktiven Setup-Komponente verschoben. Diese beiden Komponenten bieten in Phase 2 mehr Mehrwert, weil sie den HTML-Anteil stärker erweitern und zusätzliche Interaktion ermöglichen.

## 8. Barrierefreiheit und Bedienbarkeit

Die Seite berücksichtigt mehrere grundlegende Maßnahmen zur Barrierefreiheit:

* `lang="de"` im HTML-Dokument,
* Skip-Link zum Hauptinhalt,
* semantische Hauptbereiche mit `section`, `article`, `aside`, `figure`, `footer` und `address`,
* `aria-label` für Navigationen,
* `aria-labelledby` für zentrale Inhaltsbereiche,
* Alternativtexte für Bilder,
* sichtbare Fokuszustände für Links, Menü, Glossar und Hotspots,
* Tastaturbedienbarkeit der Navigation, Glossareinträge und Hotspots,
* `prefers-reduced-motion` für reduzierte Animationen,
* semantische Tabelle mit `caption` und Spaltenüberschriften.

## 9. Stand der Phase-2-Umsetzung

Die Website wurde in Phase 2 gestalterisch, strukturell und technisch deutlich konkretisiert. Aus dem ursprünglichen HTML-Grundgerüst entstand ein responsiver Onepager mit klar gegliederten Inhaltsbereichen, wiederkehrenden Card-Komponenten, optimierten Bildvarianten und interaktiven Elementen.

Besonders weiterentwickelt wurden der Hero-Bereich, die Hauptnavigation, die persönliche Vorstellung, die sportliche Timeline, der Trainingsbereich, das Trainings-Glossar, das interaktive Rennrad-Setup sowie der Footer mit Impressum und Projektinformationen. Die Umsetzung berücksichtigt unterschiedliche Bildschirmgrößen und nutzt Media Queries, Grid und Flexbox, um die Inhalte auf mobilen Geräten, Tablets und Desktop-Ansichten sinnvoll darzustellen.

Einige ursprünglich angedachte Erweiterungen wurden im Verlauf bewusst angepasst. Eine separate Bildergalerie wurde zugunsten des Trainings-Glossars und der interaktiven Rennrad-Setup-Komponente verschoben. Auch die Hauptnavigation wurde nach der Umsetzung verschlankt, damit sie nur die zentralen Seitenbereiche abbildet und nicht mit Detailstationen überladen wird.

Die Phase-2-Version liegt im GitHub-Repository als aktueller Entwicklungsstand des Webauftritts vor. Das Konzept dokumentiert die gestalterischen, technischen und strukturellen Entscheidungen und dient als Grundlage für die weitere Ausarbeitung in Phase 3.


