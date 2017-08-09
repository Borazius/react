import React, {Component} from 'react';
// Wir importieren unsere selbst erstellte Komponente
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bo starts with React</h2>
          {/* Klasse aufrufen */}
          <Button></Button>
        </div>

        {/* wir verwenden wieder diese Komponente */}
        <Button></Button>
      </div>
    );
  }
}

export default App;
