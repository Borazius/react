// Übungsaufgabe: Eigene Komponente "Panel erstellen" Udemy-Schulung: Abschnitt
// 3, Lektion 12 

// 1. Schritt: Wir kopieren die App.js und passen diese an

import React, {Component} from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return (
        // 2. Schritt: Wir erstellen die notwendigen Elemente
      <div className="Panel">
          {/* 3. Schritt: Wir implmentieren die variablen props */}
      <h2 className="Panel-heading">{this.props.title}</h2>
      <p className="Panel-content">{this.props.inhalt}</p>
    </div> 
    );
  }
}

export default Panel;