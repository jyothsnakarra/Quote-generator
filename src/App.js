import React, { useState, useEffect } from 'react';
import tumblr from "../src/images/tumblr.png"
import twitter from "../src/images/twitter.png"
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');

  useEffect(() => {
    getQuote()
    changeBgColor();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const changeBgColor = () => { 
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
    setBgColor(randomColor); 
    };


   const handleClick = () => {
    getQuote();
    changeBgColor();
   }
  return (
    <>
    
    <div className='body' style={{backgroundColor: bgColor,}}>
    <div id="quote-box" >
      <div id="text" style={{color: bgColor}}><p>“ {quote}</p></div>
      <br />
      <div id="author" style={{color: bgColor}}><p> ~ {author}</p></div>

      <div id="buttons" >
        <div className="social-media">
          <a href="www.twitter.com" id="twet-quote" style={{backgroundColor: bgColor}}>
            <span><img src={twitter}  alt="" /></span>
          </a>
          <a href="wwww.tumlr.com" id="tumlr-quote" style={{backgroundColor: bgColor}}>
            <span><img src={tumblr}  alt="" /></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote" style={{backgroundColor: bgColor}}>New Quote</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;