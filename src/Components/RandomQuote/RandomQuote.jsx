import React, { useState } from 'react'
import "./RandomQuote.css"
import XlogoIcon from "../Assets/Xlogo.png"
import reloadIcon from "../Assets/reload.png"

export const RandomQuote = () => {

    let quotes = [];

    const tweet = () => {
        window.open(`http://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    }

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const [quote,setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal",
        author: "Johann Wolfgang Von Goethe" 
    });

    loadQuotes();
  return (

    <div className='container'>
        <div className='quote'>{quote.text}</div>
        <div>
            <div className='line'></div>
            <div className="bottom">
                <div className="author">- {quote.author.split(',')[0]}</div>
                <div className="icons">
                <img src={reloadIcon} alt="" onClick={()=>{random()}}/>
                <img src={XlogoIcon} alt="" onClick={()=>{tweet()}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
