import React, {Component} from 'react';
// Wir importieren unsere selbst erstellte Komponente
import Button from './Button';
import Panel from './Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-heading">Bo starts with React</h2>
          {/* Klasse aufrufen -> Klasse Button!*/}
          {/* Wir übergeben Parameter, label ist hier wie Eigenschaft/Variable, Videobeispiel wurde label genommen */}
          <Button label="Klick mich!"></Button>
        </div>

        {/* wir verwenden wieder diese Komponente */}
        <Button label="Klick mich nicht!"></Button>
        <br /> <br /> <br /> <br /> <br />
        {/* Anmerkung: alle Parameter in einer Zeile */}
        <Panel title="1. Panel - Überschrift" inhalt="Lorem ipsum lorem olum was geht"></Panel>
        <br/>
        <Panel title="2. Panel - Überschrift" inhalt="Lorem ipsum"></Panel>
      </div>
    );
  }
}

export default App;
