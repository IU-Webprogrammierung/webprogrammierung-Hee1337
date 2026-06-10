Das Konzept sieht bereits ganz gut aus. Das Konzept soll so ausgestaltet sein, dass es von einer Agentur umgesetzt werden kann. Pflege es weiter und ergänze im Verlauf konkretere Angaben, die dann auch in den Wireframes sichtbar sind. Es könnten zb bei höherer Auflösung noch mehr Spalten in Betracht gezogen werden. Auch die Navigation könnte besser dargestellt sein. Der vorhandene Code sieht gut aus, er ist noch sparsam. Das Bild ist noch viel zu groß

# Konzeptfortschreibung Phase 2: Meine sportliche Laufbahn

## 1. Ausgangspunkt und Feedback aus Phase 1

Phase 1 des Projekts wurde erfolgreich eingereicht und abgeschlossen. Das Feedback: 
Das Konzept sieht bereits ganz gut aus. Das Konzept soll so ausgestaltet sein, dass es von einer Agentur umgesetzt werden kann. Pflege es weiter und ergänze im Verlauf konkretere Angaben, die dann auch in den Wireframes sichtbar sind. Es könnten zb bei höherer Auflösung noch mehr Spalten in Betracht gezogen werden. Auch die Navigation könnte besser dargestellt sein. Der vorhandene Code sieht gut aus, er ist noch sparsam. Das Bild ist noch viel zu groß

Zentraler Leitgedanke für Phase 2 ist daher:

> Das Konzept soll so konkret aufgebaut sein, dass eine externe Agentur die Website anhand der Beschreibung umsetzen könnte.

Aus dem Feedback ergeben sich für Phase 2 folgende Schwerpunkte:

* Das Konzept soll mit konkreteren Angaben zu Layout, Navigation, Komponenten und responsivem Verhalten ergänzt werden.
* Die Wireframes sollen genauer zeigen, wie sich die Seite auf mobilen Geräten, Tablets und großen Bildschirmen verhält.
* Bei höheren Bildschirmauflösungen sollen mehrspaltige Layouts geprüft und umgesetzt werden.
* Die Navigation soll deutlicher dargestellt und besser beschrieben werden.
* Der vorhandene HTML-Code soll erweitert werden, da er in Phase 1 noch bewusst sparsam gehalten war.
* Das Hero-Bild soll optimiert werden, da es aktuell zu groß eingebunden ist.

## 2. Ziel von Phase 2

In Phase 2 wird der bisherige HTML-Prototyp zu einem gestalteten, responsiven Webauftritt weiterentwickelt. Neben der visuellen Gestaltung liegt der Fokus auf einer klareren Seitenstruktur, einer besseren Navigation, sinnvoll erweiterten HTML-Elementen und einer nachvollziehbaren Umsetzung mit CSS.

Die Website soll weiterhin als scrollbarer Onepager funktionieren. Die einzelnen Inhaltsbereiche werden jedoch stärker als Komponenten geplant und gestaltet. Dadurch soll die Seite nicht nur optisch ansprechender, sondern auch für eine mögliche Umsetzung durch Dritte besser nachvollziehbar werden.

## 3. Geplante Komponenten für Phase 2

Die Website wird in Phase 2 stärker in wiederverwendbare und klar beschriebene Komponenten gegliedert. Jede Komponente erhält eine konkrete Aufgabe innerhalb des Onepagers und wird im weiteren Verlauf für mobile, Tablet- und Desktop-Ansichten beschrieben.

### 3.1 Hauptnavigation

### 3.1 Hauptnavigation

Die Hauptnavigation ist ein zentrales Orientierungselement des Onepagers. Sie ermöglicht den direkten Sprung zu den wichtigsten Inhaltsbereichen und bleibt inhaltlich auf die Hauptstationen der Seite begrenzt, damit sie übersichtlich bleibt.

#### Navigationspunkte

Die Navigation enthält folgende Sprungmarken:

* Das bin ich
* Jugend
* CrossFit
* Hyrox
* Rennrad
* Training
* Rennen
* Impressum

Jeder Navigationspunkt verweist auf einen klar benannten Inhaltsbereich innerhalb der Seite. Die Linktexte sollen kurz, eindeutig und verständlich bleiben.

#### Mobile Darstellung: 360px bis 767px

Auf kleinen Bildschirmen wird die Navigation platzsparend dargestellt. Der Seitentitel steht im oberen Bereich, darunter folgt eine kompakte Navigation. Für Phase 2 wird zunächst eine einfache mobile Navigation ohne JavaScript umgesetzt. Die Links werden untereinander oder in mehreren Zeilen angeordnet, sodass sie mit dem Finger gut erreichbar bleiben.

Die Navigation soll ausreichend Abstand zwischen den Links haben. Dadurch bleibt sie auch auf Touch-Geräten gut bedienbar. Ein Burger-Menü bleibt als mögliche Erweiterung für Phase 3 vorgesehen, wird in Phase 2 aber nur umgesetzt, wenn es technisch sauber und tastaturbedienbar realisiert werden kann.

#### Tablet-Darstellung: ab 768px

Ab 768px wird die Navigation horizontal dargestellt. Die Links stehen nebeneinander und können bei Bedarf umbrechen. Der Header erhält mehr Breite und Abstand, damit Seitentitel und Navigation klar voneinander getrennt wirken.

#### Desktop-Darstellung: ab 1024px

Ab 1024px wird die Navigation als horizontale Hauptnavigation im Header dargestellt. Die Navigationslinks werden gleichmäßig verteilt oder rechts neben dem Seitentitel ausgerichtet. Dadurch ist die Navigation auf größeren Bildschirmen deutlicher sichtbar und besser als zentrale Steuerung des Onepagers erkennbar.

#### Große Desktop-Auflösung: ab 1440px

Bei sehr breiten Bildschirmen bleibt die Navigation innerhalb einer maximalen Inhaltsbreite. Dadurch läuft sie nicht über die gesamte Bildschirmbreite auseinander. Die Seite wirkt kontrollierter und besser lesbar.

#### Technische Umsetzung

Die Navigation wird semantisch mit `nav`, `ul`, `li` und `a` umgesetzt. Das Element `nav` erhält `aria-label="Hauptnavigation"`, damit assistive Technologien den Zweck der Navigation eindeutig erkennen können.

Die Gestaltung erfolgt mit Flexbox. Mobile-first werden die Links zunächst kompakt untereinander oder umbrochen dargestellt. Ab 768px wird die Navigation über eine Media Query horizontal ausgerichtet.

#### Barrierefreiheit

Alle Navigationslinks müssen mit der Tastatur erreichbar sein. Der Fokuszustand wird in Phase 2 sichtbar gestaltet. Die Linktexte bleiben eindeutig und beschreiben den Zielbereich. Die Navigation darf keine reine Hover-Bedienung verwenden, da sie sonst auf Touch-Geräten und mit Tastatur schlechter nutzbar wäre.


### 3.2 Hero-Bereich

Der Hero-Bereich bildet den visuellen Einstieg in die Website. Er enthält eine prägnante Überschrift, einen kurzen Einführungstext und ein optimiertes Hero-Bild. Das Bild wird in Phase 2 technisch verkleinert und responsiv eingebunden, damit die Ladezeit verbessert wird.

### 3.3 Sportliche Laufbahn als Timeline oder Card-Bereich

Die sportlichen Stationen werden nicht mehr nur als einfache Textabschnitte verstanden, sondern als zusammenhängender Entwicklungsverlauf. Dafür wird eine Timeline- oder Card-Struktur geplant. Auf mobilen Geräten stehen die Stationen untereinander. Ab Tablet-Breite können zwei Spalten genutzt werden. Auf großen Desktop-Bildschirmen sind drei Spalten denkbar.

### 3.4 Bildergalerie

Für ausgewählte sportliche Momente wird eine kleine Bildergalerie geplant, zum Beispiel mit Bildern aus Hyrox, Rennrad oder Wettkampfsituationen. Die Galerie soll aus mehreren Bildern mit beschreibenden Alternativtexten und optionalen Bildunterschriften bestehen. Technisch wird sie als Liste mit `figure`- und `figcaption`-Elementen umgesetzt.

### 3.5 Rennrad-Setup als Infobox

Der Bereich Rennrad wird um eine kompakte Infobox ergänzt. Diese kann Informationen zum Fahrrad, zur Ausstattung oder zum Trainingsbezug enthalten. Auf mobilen Geräten steht die Infobox unter dem Text. Auf größeren Bildschirmen kann sie neben dem Text platziert werden.

### 3.6 Trainingsbereich mit Tabelle und Download-Link

Der Trainingsbereich wird in Phase 2 stärker strukturiert. Eine Tabelle kann beispielhafte Trainingsdaten oder eine Progression darstellen. Zusätzlich wird ein Download-Link für einen beispielhaften Trainingsplan geplant. Dieser Link wird optisch wie ein Button gestaltet, bleibt semantisch aber ein Link.

### 3.7 Footer und Impressum

Der Footer bleibt am Ende des Onepagers und enthält das Impressum beziehungsweise die notwendigen Projektangaben. In Phase 2 wird er visuell klarer vom Hauptinhalt getrennt.

## 4. Responsive Layoutlogik und Breakpoints

Die Website wird mobile-first umgesetzt. Das bedeutet, dass die einspaltige mobile Darstellung die Grundlage bildet. Größere Layouts werden anschließend über Media Queries erweitert.

### 4.1 Mobile Ansicht: 360px bis 767px

Auf mobilen Geräten werden alle Inhaltsbereiche einspaltig untereinander dargestellt. Die Reihenfolge folgt der inhaltlichen Chronologie der sportlichen Laufbahn. Texte, Bilder, Tabellen und Infoboxen nehmen die verfügbare Breite ein und erhalten ausreichend Innen- und Außenabstand.

Die Navigation wird kompakt dargestellt und bleibt vollständig bedienbar. Bilder werden responsiv eingebunden, damit sie nicht über den Bildschirm hinausragen.

### 4.2 Tablet Ansicht: ab 768px

Ab 768px erhält die Seite mehr horizontale Struktur. Die Navigation wird horizontal ausgerichtet. Die sportlichen Stationen können als zweispaltige Card-Struktur dargestellt werden.

Der Hero-Bereich erhält mehr Raum. Bild und Text können weiterhin untereinander stehen oder visuell stärker voneinander getrennt werden. Galerieelemente werden ab dieser Breite in zwei Spalten angeordnet.

### 4.3 Desktop Ansicht: ab 1024px

Ab 1024px wird das Layout stärker auf Desktop-Nutzung optimiert. Die sportlichen Stationen können als zwei- oder dreispaltiges Grid dargestellt werden. Der Trainingsbereich erhält ausreichend Breite für eine Tabelle. Die Rennrad-Infobox kann neben dem Fließtext platziert werden.

Die Seite erhält eine maximale Inhaltsbreite, damit Textzeilen gut lesbar bleiben und Inhalte nicht über die gesamte Bildschirmbreite auseinanderlaufen.

### 4.4 Große Desktop Ansicht: ab 1440px

Ab 1440px kann die Card-Struktur auf bis zu drei Spalten erweitert werden. Die Galerie kann ebenfalls mehrspaltig dargestellt werden. Die maximale Inhaltsbreite bleibt bestehen, damit das Layout kontrolliert wirkt.

### 4.5 Technische Umsetzung

Die Layouts werden mit Flexbox und CSS Grid umgesetzt. Flexbox wird vor allem für Navigation, Header-Struktur und kleinere Ausrichtungen genutzt. CSS Grid wird für Card-Bereiche, Galerie und mehrspaltige Desktop-Layouts eingesetzt.

Die geplanten Breakpoints sind:

* ab 768px für Tablet-Layout
* ab 1024px für Desktop-Layout
* ab 1440px für große Desktop-Ansichten

Alle Breakpoints werden in der CSS-Datei kommentiert, damit nachvollziehbar bleibt, warum sich das Layout an diesen Stellen verändert.


## 5. Verbindliche Umsetzungsmatrix

Damit das Konzept als konkrete Arbeitsgrundlage genutzt werden kann, werden die geplanten Komponenten mit ihrer späteren technischen Umsetzung verknüpft. Alle hier aufgeführten Komponenten sollen in Phase 2 entweder umgesetzt oder im Konzept bewusst angepasst werden.

### 5.1 Hauptnavigation

**Geplante HTML-Umsetzung:**
Die Navigation wird mit `nav`, `ul`, `li` und `a` umgesetzt. Die Links führen als Sprungmarken zu den jeweiligen Inhaltsbereichen.

**Geplante CSS-Umsetzung:**
Die Navigation wird mobile-first gestaltet. Auf kleinen Bildschirmen wird sie kompakt dargestellt. Ab 768px wird sie horizontal mit Flexbox ausgerichtet. Sichtbare Fokuszustände werden ergänzt.

**Status:** geplant

### 5.2 Hero-Bereich

**Geplante HTML-Umsetzung:**
Der Hero-Bereich wird mit `section`, `h2`, `p` und `img` umgesetzt.

**Geplante CSS-Umsetzung:**
Das Hero-Bild wird responsiv eingebunden und in seiner Dateigröße optimiert. Der Bereich erhält klare Abstände und eine maximale Inhaltsbreite.

**Status:** geplant

### 5.3 Sportliche Laufbahn

**Geplante HTML-Umsetzung:**
Die sportlichen Stationen werden mit `section`, `article`, Überschriften und Fließtexten strukturiert.

**Geplante CSS-Umsetzung:**
Die Stationen werden als Card- oder Timeline-Struktur gestaltet. Ab Tablet- und Desktop-Breite wird ein Grid-Layout mit mehreren Spalten eingesetzt.

**Status:** geplant

### 5.4 Bildergalerie

**Geplante HTML-Umsetzung:**
Die Galerie wird mit `ul`, `li`, `figure`, `img` und `figcaption` umgesetzt.

**Geplante CSS-Umsetzung:**
Die Galerie wird als responsives Grid gestaltet. Mobil erscheint sie einspaltig, ab größeren Ansichten zwei- bis dreispaltig.

**Status:** geplant

### 5.5 Rennrad-Setup-Infobox

**Geplante HTML-Umsetzung:**
Die Infobox wird mit `aside`, `h3` und einer Liste oder kurzen Key-Facts umgesetzt.

**Geplante CSS-Umsetzung:**
Die Infobox wird optisch vom Haupttext abgesetzt. Auf größeren Bildschirmen kann sie neben dem Text stehen.

**Status:** geplant

### 5.6 Trainingsbereich

**Geplante HTML-Umsetzung:**
Der Trainingsbereich wird mit `section`, `table`, `caption`, `thead`, `tbody` und einem Download-Link umgesetzt.

**Geplante CSS-Umsetzung:**
Die Tabelle wird responsiv gestaltet. Der Download-Link wird optisch wie ein Button gestaltet, bleibt semantisch aber ein Link.

**Status:** geplant

### 5.7 Footer und Impressum

**Geplante HTML-Umsetzung:**
Der Footer wird mit `footer`, einer Überschrift und ergänzendem Text umgesetzt.

**Geplante CSS-Umsetzung:**
Der Footer wird visuell klar vom Hauptinhalt getrennt.

**Status:** geplant

Diese Umsetzungsmatrix dient während Phase 2 als Kontrollliste. Vor der Abgabe wird geprüft, ob die beschriebenen Komponenten tatsächlich in HTML und CSS umgesetzt wurden.



