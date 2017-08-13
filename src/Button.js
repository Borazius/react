import React, {Component} from 'react';

// erstelle eine Klasse Button und erbe von der Klasse Components
class Button extends Component {
  render() {
    // Wir machen das hier um in der Console die props abzulesen, hier in diesem
    // Fall ist props: Object, label: "Klick mich"

    console.log(this);

    return (
      <div className="btn">
        <h1>Ich bin ein Button</h1>
        {/* normaler HTML-Button, daher kleingeschrieben */}
        <button>
          {/* statt Text "klick mich" hier JavaScript mit props */}
          {/* Greife auf die Eigenschaft "label" zu */}
          <strong>{this.props.label}</strong>
        </button>
      </div>
    );
  }
}
//müssen die Klasse exportieren damit andere Klassen diese nutzen können
export default Button;
