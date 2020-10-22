import React from 'react';
import './Twitter.css';

const Twitter = ({customStyle}) => { 
    return ( 
        <div>
            <a id="tweet-quote" style={customStyle} href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" title="Tweet it"><i className="fab fa-twitter-square"></i></a>
        </div>
    );
}    

export default Twitter;