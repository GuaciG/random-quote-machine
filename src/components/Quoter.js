import React from 'react';
import CurrentDate from './CurrentDate';
import Quote from './Quote';
import Twitter from './Twitter';
import ButtonQuote from './ButtonQuote';
import { quotes } from './data/data';
import { colors } from './data/dataColors';
import './Quoter.css';

class Quoter extends React.Component {
    constructor(props){
        super(props);
        //state when you open the App. getRandomQuoteIndex y getRandomColorIndex 
        //will be call each time, so have different quote and color every time
        this.state = {
            randomQuote: quotes[this.getRandomQuoteIndex()], 
            randomColor: colors[this.getRandomColorIndex()]
        };
        //connet the method to "this" with bind 
        this.handleClick = this.handleClick.bind(this);
    }

    //you get new quote and color with each onClick event in the new-quote button. 
    handleClick = () => {

        this.setState ({
            randomQuote: quotes[this.getRandomQuoteIndex()], 
            randomColor: colors[this.getRandomColorIndex()]
        });
    }
    
    //Here you get random index inside both quotes and colors arrays.
    //quotes:
    getRandomQuoteIndex = () => {
        return Math.floor(Math.random() * quotes.length);  
    }
    //colors:
    getRandomColorIndex = () => {
      return Math.floor(Math.random() * colors.length);
    }

    render(){
       
        return (
            <div>
                <div id="container" style={{backgroundColor: this.state.randomColor, transition: "background-color 1.5s"}}>
                    <div id="quote-box">
                        <CurrentDate />
                        <Quote 
                            customStyle={{color: this.state.randomColor, transition: "color 1.5s"}}
                            data={this.state.randomQuote}/>
                        <div className="container-buttons">
                            <ButtonQuote 
                                clickQuote={this.handleClick} 
                                customStyle={{backgroundColor: this.state.randomColor, transition: "background-color 1.5s"}}/>
                            <Twitter 
                                customStyle={{color: this.state.randomColor, transition: "color 1.5s"}}/>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
};

export default Quoter;