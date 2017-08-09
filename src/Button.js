import React, {Component} from 'react';

// erstelle eine Klasse Button und erbe von der Klasse Components
class Button extends Component {
  render() {
    return (
      <div className="btn">
        <h1>Ich bin ein Button</h1>
        {/* normaler HTML-Button, daher kleingeschrieben */}
        <button>
          <strong>
            Klick mich!</strong>
        </button>
      </div>
    );
  }
}
//müssen die Klasse exportieren damit andere Klassen diese nutzen können
export default Button;
