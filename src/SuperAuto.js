// In diesem Beispiel geht es um Objektorientierung und Vererbung
// Extends ist das Schlüsselwort für Vererbung
// class SuperAuto extends Auto bedeutet:
// SuperAuto kann alles was Klasse Auto kann (Methoden).
// Der SuperAuto kann wie Auto fahren() und bremsen()
// und zusätzlich fliegen()


// Damit wir die Eigenschaften und Methoden der Klasse Auto vererben können,
// müssen wir zunächst die Klasse Auto importieren!

import Auto from './Auto';


class SuperAuto extends Auto{
    fliegen(){
        alert ('fliegen() wurde ausgeführt!');
    }
}

export default SuperAuto;