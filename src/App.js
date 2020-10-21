import React from 'react';
import CurrentDate from './components/CurrentDate';
import Footer from './components/Footer';
import './App.css';


const quotes = [
  {quote: 'The supreme art of war is to subdue the enemy without fighting.', author: 'Sun Tzu'},
  {quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.', author: 'Walt Whitman'},
  {quote: 'Being entirely honest with oneself is a good exercise.', author: 'Sigmund Freud'},
  {quote: 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.', author: 'Samuel Beckett'},
  {quote: 'Not all those who wander are lost.', author: 'J. R. R. Tolkien'},
  {quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.', author: 'Thomas A. Edison'},
  {quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', author: 'Benjamin Franklin'},
  {quote: 'A leader is one who knows the way, goes the way, and shows the way.', author: 'John C. Maxwell'},
  {quote: 'Very little is needed to make a happy life - it is all within yourself, in your way of thinking.', author: 'Marcus Aurelius'},
  {quote: 'If opportunity doesn\'t knock, build a door.', author: 'Milton Berle'},
  {quote: 'The secret of getting ahead is getting started.', author: 'Mark Twain'},
  {quote: 'Problems are not stop signs, they are guidelines.', author: 'Robert H. Schuller'}
];

//Array with some colors to get random states. This data needs the App.
const colors = [
"#0d688c","#bf9411","#ff3399","#009900","#990033","#52527a","#339933","#5900b3","#cc9900","#660066","#003366","#336600"
];

//Parente component type class ES6 extending React.Component
class App extends React.Component {
  constructor(props){
    super(props);
    //new local state when you open the App. getRandomQuoteIndex y getRandomColorIndex will be call each time.
    this.state = {
      quoteIndex: this.getRandomQuoteIndex(),
      colorIndex: this.getRandomColorIndex()
    };
    //bind the method to "this" here 
    this.handleClick = this.handleClick.bind(this);
  }
  //you also get new quote and color with onClick event handled by new-quote button. 
  handleClick(){
    this.setState ({
      quoteIndex: this.getRandomQuoteIndex(),
      colorIndex: this.getRandomColorIndex()
    });
  }
  
  //Here you get random index inside both quotes and colors.
  //quotes:
  getRandomQuoteIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  }
  //colors:
  getRandomColorIndex = () => {
    return Math.floor(Math.random() * colors.length);
  }
//Finally, render method to show the components.
//First, get the quote in the random index and color in the random index.
//And each thing in its place.  
  render(){
    const randomQuote = quotes[this.state.quoteIndex];
    const randomColor = colors[this.state.colorIndex];
    
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <div id="container" style={{backgroundColor: randomColor, transition: "background-color 2s"}}>
          <div id="quote-box">
            <CurrentDate />
            <p id="text" style={{color: randomColor, transition: "color 2s"}}><i className="fas fa-quote-left" style={{fontSize: 26, color: randomColor, transition: "color 2s"}}></i>{" "}{randomQuote.quote}</p>
            <p id="author" style={{color: randomColor, transition: "color 2s"}}>-{randomQuote.author}</p>
            <div className="container-buttons">
              <button id="new-quote" onClick={this.handleClick} style={{backgroundColor: randomColor, transition: "background-color 2s"}}>New Quote</button>
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" title="Tweet it"><i className="fab fa-twitter-square" style={{fontSize: 40, color: randomColor, transition: "color 2s"}}></i></a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
