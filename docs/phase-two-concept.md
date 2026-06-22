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
Der Hero-Bereich wird als eigenständige `section` umgesetzt. Das Hero-Bild wird als reine Sportcollage eingebunden und enthält keine fest eingebrannten Texte, keine Navigationselemente und kein Portraitbild.

Die Sportstationen im Hero-Bereich werden als echte HTML-Sprungmarken umgesetzt. Sie verweisen auf die passenden Inhaltsbereiche der Seite:

* Jugend / Handball verweist auf `#jugend`
* CrossFit verweist auf `#crossfit`
* Hyrox verweist auf `#hyrox`
* Rennrad verweist auf `#rennrad`

Das Portraitbild wird separat als eigenes `img`-Element eingebunden und nicht direkt in die Hero-Collage integriert.

**Geplante CSS-Umsetzung:**
Der Hero-Bereich erhält ein dunkles, hochwertiges Erscheinungsbild passend zum geplanten blau-schwarzen Theme. Die Sport-Sprungmarken werden per CSS über dem Hero-Bild positioniert und optisch wie interaktive Stationen gestaltet.

Das Portraitbild wird per CSS kreisförmig dargestellt, zum Beispiel über `border-radius: 50%`, und responsiv positioniert. Auf mobilen Geräten werden die Elemente vereinfacht und untereinander beziehungsweise kompakter dargestellt. Auf größeren Bildschirmen können Hero-Bild, Sprungmarken, Headline und Portrait stärker überlagert und layoutet werden.

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

## 6. Entscheidungen und Begründungen

In Phase 2 werden zentrale Struktur- und Gestaltungsentscheidungen bewusst dokumentiert. Dadurch soll nachvollziehbar werden, warum bestimmte HTML-Elemente, Layouttechniken und responsive Verhaltensweisen eingesetzt werden.

### 6.1 Timeline-Struktur für sportliche Stationen

Die sportlichen Stationen werden in einer gemeinsamen Timeline-Struktur zusammengefasst, weil sie inhaltlich eine chronologische Entwicklung darstellen. Der Bereich wird als übergeordnete `section` umgesetzt. Die einzelnen Stationen werden als `article`-Elemente aufgebaut, da jede Station einen eigenständigen Inhaltsblock innerhalb der Laufbahn bildet.

Für die Jahresangaben wird das `time`-Element verwendet. Dadurch sind die Jahreszahlen nicht nur visuelle Gestaltungselemente, sondern semantisch als Zeitangaben ausgezeichnet. Die Klasse `timeline-year` ermöglicht später eine gezielte Gestaltung der Jahresmarker per CSS.

Diese Struktur bereitet außerdem eine mögliche Erweiterung in Phase 3 vor, bei der die Timeline beim Scrollen animiert oder das jeweils aktive Jahr hervorgehoben werden kann.

### 6.2 Vorbereitung für responsive Mehrspaltenlayouts

Die Timeline-Artikel werden innerhalb eines gemeinsamen Containers gebündelt. Dadurch kann der Bereich später mit CSS Grid gestaltet werden. Mobil werden die Stationen einspaltig dargestellt. Ab Tablet- und Desktop-Breite können zwei oder drei Spalten umgesetzt werden.

Diese Entscheidung greift das Feedback aus Phase 1 auf, nach dem bei höheren Bildschirmauflösungen mehr Spalten in Betracht gezogen werden sollen.

### 6.3 Rennrad-Setup als ergänzende Infobox

Der Rennradbereich wird um eine Infobox zum persönlichen Rennrad-Setup ergänzt. Diese Informationen unterstützen den Haupttext, sind aber nicht zwingend Teil des eigentlichen Fließtextes. Deshalb wird die Infobox semantisch als `aside` umgesetzt.

Das `aside`-Element eignet sich für ergänzende Inhalte, die inhaltlich mit dem Hauptbereich verbunden sind, aber separat dargestellt werden können. Die Infobox enthält kurze Key-Facts zum Fahrrad, zur Schaltung, zum Trainingsbezug und zu den sportlichen Zielen.

Auf mobilen Geräten steht die Infobox unter dem Rennradtext. Auf größeren Bildschirmen kann sie später optisch als eigene Box gestaltet oder neben dem Text platziert werden. Dadurch wird der Rennradbereich informativer und visuell abwechslungsreicher, ohne die Hauptnavigation unnötig zu erweitern.

### 6.4 Trainingsprogression als Tabelle

Der Trainingsbereich enthält beispielhafte Trainingsdaten, die miteinander vergleichbar sind. Dazu gehören Woche, Einheit, Zielbereich und Ziel der Einheit. Da diese Informationen in Zeilen und Spalten sinnvoll zueinander in Beziehung gesetzt werden können, wird die Progression semantisch als Tabelle umgesetzt.

Die Tabelle erhält eine `caption`, damit der Zweck der Tabelle direkt erkennbar ist. Die Spaltenüberschriften werden mit `th` und `scope="col"` ausgezeichnet, damit die Zuordnung der Daten auch für assistive Technologien nachvollziehbar bleibt.

In Phase 2 wird die Tabelle per CSS optisch aufbereitet. Auf kleinen Bildschirmen muss sie so gestaltet werden, dass sie lesbar bleibt und nicht aus dem Layout herausragt. Dadurch ergänzt der Trainingsbereich die Seite nicht nur inhaltlich, sondern zeigt auch einen bewussten Einsatz tabellarischer HTML-Struktur.

### 6.5 Download-Link für Beispiel-Trainingsplan

Der Trainingsbereich wird um einen Download-Link für einen beispielhaften Trainingsplan ergänzt. Dadurch erhält der Bereich eine konkrete weiterführende Ressource und wirkt nicht nur beschreibend, sondern anwendungsbezogen.

Der Download wird semantisch als Link umgesetzt, weil er zu einer Datei führt. Ein `button` wäre an dieser Stelle nicht passend, da kein direkter Seitenprozess ausgelöst wird. Der Link erhält später per CSS eine Button-Optik, bleibt im HTML aber ein korrektes `a`-Element mit `download`-Attribut.

Die Datei wird im Projekt unter `assets/downloads/` vorgesehen. In Phase 2 wird zunächst die Struktur vorbereitet. Die eigentliche PDF-Datei kann später ergänzt oder durch einen finalen Trainingsplan ersetzt werden.

### 6.6 Hero-Bereich mit ergänzenden Sprungmarken

Der Hero-Bereich wird in Phase 2 als visueller Einstieg in die Website überarbeitet. Das Hero-Bild zeigt die sportlichen Stationen als Bildcollage und bleibt dabei frei von eingebrannten Texten, Navigationselementen und Portraitbestandteilen. Dadurch kann das Bild unabhängig von Inhalt und Interaktion optimiert und responsiv eingesetzt werden.

Die Beschriftungen der Sportarten werden zusätzlich als echte HTML-Links über dem Hero-Bereich umgesetzt. Sie dienen als ergänzende Sprungmarken zu den passenden Inhaltsbereichen der Seite:

* Jugend / Handball verweist auf `#jugend`
* CrossFit verweist auf `#crossfit`
* Hyrox verweist auf `#hyrox`
* Rennrad verweist auf `#rennrad`

Diese Sprungmarken ergänzen die Hauptnavigation im Header. Nutzer:innen können dadurch entweder über die klassische Navigation oder direkt über die visuelle Einstiegsebene zu den jeweiligen Bereichen springen.

Die Umsetzung als echte `a`-Elemente sorgt dafür, dass die Beschriftungen nicht nur dekorativ sind, sondern eine klare Funktion besitzen. Sie bleiben per Tastatur erreichbar, können mit sichtbaren Fokuszuständen gestaltet werden und lassen sich über CSS responsiv positionieren.

Das Portraitbild wird separat als eigenes `img`-Element eingebunden und per CSS kreisförmig dargestellt. Dadurch bleibt es unabhängig vom Hero-Bild austauschbar, responsiv anpassbar und semantisch sauber eingebunden.


### 6.7 Konkretisierung des Hero- und Navigationsbereichs

Auf Basis des Feedbacks aus Phase 1 wird der Hero- und Navigationsbereich in Phase 2 konkreter ausgearbeitet. Der Einstieg der Website soll nicht nur als dekorativer Bildbereich funktionieren, sondern die sportlichen Stationen direkt sichtbar machen und zusätzlich die Orientierung innerhalb des Onepagers unterstützen.

Das Hero-Bild wird als optimierte Sportcollage eingesetzt. Die Beschriftungen der Sportarten werden als echte HTML-Sprungmarken umgesetzt und ergänzen die Hauptnavigation im Header. Dadurch können Nutzer:innen sowohl über die klassische Navigation als auch direkt über den visuellen Einstieg zu den Bereichen Jugend / Handball, CrossFit, Hyrox und Rennrad springen.

Das Portraitbild wird separat vom Hero-Bild eingebunden und per CSS als Kreis gestaltet. Dadurch bleibt es unabhängig vom Hero-Bild austauschbar und kann je nach Bildschirmgröße anders positioniert werden.

Für den Hero-Bereich wird eine eigene responsive Logik festgelegt:

- **360px bis 767px:** Die Hero-Elemente werden gestapelt dargestellt. Bild, Sprungmarken, Headline, Introtext und Portrait stehen untereinander, damit die Inhalte auf kleinen Bildschirmen lesbar und bedienbar bleiben.
- **768px bis 1023px:** Das Layout bleibt vereinfacht, da für ein vollständiges Overlay-Layout noch zu wenig horizontale Fläche vorhanden ist.
- **ab 1024px:** Der Hero-Bereich nutzt das geplante Overlay-Layout. Sport-Sprungmarken, Headline, Introtext und Portrait werden über beziehungsweise auf dem Hero-Bild positioniert.
- **ab 1440px:** Die Positionierung wird für große Bildschirme weiter verfeinert. Der Hero bleibt über die gesamte Breite sichtbar, während Texte, Links und Portrait kontrolliert platziert werden.

Diese Konkretisierung greift das Feedback zur besseren Darstellung der Navigation und zur genaueren Ausarbeitung des Konzepts auf.

### 6.8 Responsive Bildvarianten im Hero-Bereich

Für den Hero-Bereich werden unterschiedliche Bildvarianten eingesetzt, damit die Darstellung auf verschiedenen Bildschirmgrößen sinnvoll bleibt. Das breite Desktop-Hero-Bild eignet sich gut für große Bildschirme, verliert auf kleinen hochformatigen Displays jedoch wichtige Bildbereiche. Deshalb wird für mobile Ansichten eine eigene hochformatige Bildversion verwendet.

Die technische Umsetzung erfolgt mit dem `picture`-Element. Dadurch kann der Browser abhängig von der Bildschirmbreite automatisch die passende Bildquelle auswählen. 
Bis 767px wird das mobile Hero-Bild geladen. Ab größeren Ansichten wird weiterhin die breite Desktop-Collage verwendet.

Diese Entscheidung verbessert die responsive Darstellung, weil die vier sportlichen Stationen auch auf kleinen Bildschirmen erkennbar bleiben. Gleichzeitig bleiben Texte, Navigation und Sprungmarken als echte HTML-Elemente erhalten und werden nicht in das Bild eingebrannt. Dadurch bleibt der Hero-Bereich flexibler, barriereärmer und leichter wartbar.

### 6.9 Mobile Hero-Overlays als klickbare Sprungmarken

Für die mobile Ansicht werden die Sportstationen direkt als klickbare Overlay-Flächen auf dem Hero-Bild dargestellt. Jede der vier Bildkacheln erhält eine eigene transparente Textfläche mit Sportart und kurzer Zusatzbeschreibung. Dadurch bleibt die visuelle Wirkung der mobilen Collage erhalten, während die Beschriftungen weiterhin als echte HTML-Inhalte umgesetzt werden.

Die Overlay-Flächen dienen gleichzeitig als Sprungmarken zu den jeweiligen Inhaltsbereichen der Seite. Sie sind groß genug gestaltet, um auf Touchscreens gut bedienbar zu sein, und ersetzen damit eingebrannte Bildtexte. Die Trennung von Bildinhalt und HTML-Text verbessert die Wartbarkeit, da Texte später unabhängig vom Bild angepasst werden können.

Diese Lösung verbindet die gestalterische Idee der mobilen Hero-Grafik mit einer semantisch saubereren Umsetzung. Die Navigation bleibt klickbar, responsiv und besser zugänglich als eine reine Bildbeschriftung.


### 6.10 Responsive Hauptnavigation

Die Hauptnavigation wurde in Phase 2 konkretisiert und für unterschiedliche Bildschirmgrößen angepasst. Auf größeren Ansichten wird die Navigation als horizontale Linkliste im Header dargestellt. Dadurch sind alle zentralen Seitenbereiche direkt erreichbar und die Orientierung auf Desktop- und Tablet-Ansichten bleibt übersichtlich.

Für kleine Bildschirme wird ein aufklappbares Menü eingesetzt. Die Umsetzung erfolgt mit dem HTML-Element `details` und einem `summary` als sichtbarem Menüauslöser. Dadurch kann die Navigation ohne JavaScript ein- und ausgeklappt werden. Das reduziert die technische Komplexität und sorgt trotzdem für eine platzsparende mobile Darstellung.

Damit die Desktop-Navigation unabhängig vom geschlossenen mobilen Menü sichtbar bleibt, werden für Mobile und Desktop getrennte Navigationslisten verwendet, die per CSS je nach Breakpoint ein- oder ausgeblendet werden. Diese Entscheidung verbessert die Stabilität der Darstellung und macht das responsive Verhalten klar nachvollziehbar.

Zusätzlich wurden Fokus- und Hoverzustände gestaltet, damit die Navigation nicht nur visuell zum Portfolio passt, sondern auch per Tastatur besser bedienbar bleibt.

### 6.11 Trainings-Glossar als interaktiver HTML-Bereich

Das Trainings-Glossar wurde als eigener Inhaltsbereich ergänzt, um zentrale Begriffe des strukturierten Rennradtrainings verständlich zu erklären. Dadurch erhält die Seite einen zusätzlichen Abschnitt, der nicht nur gestalterisch, sondern auch inhaltlich zur Orientierung beiträgt.

Die Umsetzung erfolgt mit den nativen HTML-Elementen `details` und `summary`. Dadurch können einzelne Begriffe ohne JavaScript auf- und zugeklappt werden. Diese Lösung erweitert den HTML-Anteil der Seite sinnvoll, weil sie echte Interaktion mit semantischen Elementen verbindet.

Die Begriffe werden in einer Card-Struktur dargestellt und durch CSS visuell an das restliche Layout angepasst. Zusätzlich werden einfache Zustands- und Animationseffekte genutzt, damit das Öffnen der Einträge für Nutzerinnen und Nutzer deutlicher wahrnehmbar ist.

### 6.12 Interaktive Rennrad-Setup-Komponente

Der Bereich „Mein Rennrad-Setup“ wurde als interaktive Highlight-Komponente ergänzt. Ein Bild des Rennrads wird mit klickbaren Hotspots versehen, die zentrale Komponenten wie Schaltung, Laufräder, Reifen, Powermeter und Scheibenbremsen erklären.

Die Hotspots werden als echte `button`-Elemente umgesetzt. Dadurch sind sie nicht nur visuelle Markierungen, sondern bedienbare interaktive Elemente. Beim Anklicken wird eine Detailkarte aktualisiert, die den jeweiligen Bestandteil des Setups genauer beschreibt. Die Umsetzung nutzt bewusst nur kleines Vanilla JavaScript, um die Interaktion gezielt und ohne zusätzliches Framework zu steuern.

Die Komponente erweitert die Seite um `figure`, `figcaption`, `button`, `article`, JavaScript-Zustände und CSS-Animationen. Gleichzeitig bleibt sie responsive: Auf mobilen Ansichten werden die Hotspots kleiner dargestellt und beziehen sich durch einen eigenen Bild-Wrapper korrekt auf das Rennradbild.

### 6.13 Footer und Impressum

Das Impressum wurde aus dem normalen Inhaltsfluss herausgelöst und in einen eigenen Footer verschoben. Dadurch endet die Seite nicht mit einem losgelösten Inhaltsabschnitt, sondern mit einem klaren Seitenabschluss.

Der Footer bündelt Impressum, Projektinformationen, Kontaktangaben und ergänzende Navigation. Die Umsetzung nutzt das semantische HTML-Element `footer` sowie `address` für die Kontaktinformationen. Damit wird die Seitenstruktur klarer und der rechtlich-organisatorische Bereich von den inhaltlichen Hauptabschnitten getrennt.

Auf größeren Bildschirmen wird der Footer mehrspaltig dargestellt, während die Inhalte auf kleinen Bildschirmen untereinander angeordnet werden. Dadurch bleibt der Abschluss der Seite responsiv und konsistent zum restlichen Layout.







