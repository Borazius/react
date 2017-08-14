import React, {Component} from 'react';
// Wir importieren unsere selbst erstellte Komponente
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-heading">Bo starts with React</h2>
          {/* Klasse aufrufen */}
          {/* Wir übergeben Parameter, label ist hier wie Eigenschaft/Variable, Videobeispiel wurde label genommen */}
          <Button label="Klick mich!"></Button>
        </div>

        {/* wir verwenden wieder diese Komponente */}
        <Button label="Klick mich nicht!"></Button>
      </div>
    );
  }
}

export default App;
