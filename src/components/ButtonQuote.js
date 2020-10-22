import React from 'react';
import './ButtonQuote.css';

const ButtonQuote = ({clickQuote, customStyle}) => {
    return (
      <button id="new-quote" onClick={clickQuote} style={customStyle}>
        New Quote
      </button>
    );
}

export default ButtonQuote;