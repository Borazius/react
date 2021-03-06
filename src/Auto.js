// Anmerkung: Wir hatten diesen Code-Abschnitt zunächst in der index.js
// implemntiert. Wir haben eine auto-.js-Datei erstellt und den Code
// hierher verlagert. Code so besser strukturiert (React-> modulbasiert)

// 1. Wir erstellen testweise eine Beispielklasse mit
// 2. eigenen Methoden (Prototyp)
class Auto {

  // 5. wir wollen nun der Klasse/Instanzen Eigenschaften übergeben
  // Constructor sind Funktionen, die ausgeführt werden sobald eine
  // neue Instanz / Objekt mit "new" erzeugt wird!!
  // diesem Konstruktor kann man auch Parameter übergeben 
  // (siehe Zeilen wo die Objekte mit "new" erzeugt werden)
  constructor(ps){
  this.ps = ps;
}

// 7. Wir wollen das unsere Methode den dazugehörigen Parameter übergibt
// Warum this? --->
  fahren() {
    alert('fahren() wurde ausgeführt ' + this.ps);
  }

  bremsen() {
    alert('bremsen() wurde ausgeführt ');
  }
}

// 3. Nun erstellen wir Instanzen / Objekte einer Klasse
// Z.B. hat ein Familie mehrere Autos
//erstelle verschiedene Objekte aus der Klasse Auto
// wir erstellen 5 Instanzen

// 6. Wir übergeben den erzeugten Objekte Parameter bzw. eigene Eigenschaften/Merkmale
let daimler = new Auto(220);
let bmw = new Auto(150);
// let porsche = new Auto(270);
// let vw = new Auto(90);
// let opel = new Auto(50);

// 4. diese Objekte haben können nun die Methoden der Klasse nutzen

daimler.fahren();
bmw.fahren();
// porsche.fahren();
// vw.fahren();
// opel.fahren();

// Damit wir diese Datei woanders importieren können müssen wir diesen
// für den Export verfügbar machen:

export default Auto;
