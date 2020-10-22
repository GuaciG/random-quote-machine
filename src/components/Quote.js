import React from 'react';
import './Quote.css';


const Quote = ({data, customStyle}) => {
    return (
        <div>
            <p id="text" style={customStyle}>
                <i className="fas fa-quote-left"></i>
                    {" "}{data.quote}
            </p>

            <p id="author" style={customStyle}>-{data.author}</p>
        </div>
    );
}

export default Quote;