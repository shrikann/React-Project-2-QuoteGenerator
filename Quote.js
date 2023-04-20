import React from 'react'
import {useState,useEffect} from 'react';
import "./app.css";
function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
  
    useEffect(() => {
      fetchQuote();
    }, []);
  
    async function fetchQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    }
  
    function generateQuote() {
      fetchQuote();
    }
  
    return (
      
      
      <div className="container">
        <h1><b><i>Inspiring Quotes</i></b></h1>
        <div className="quote-box">
          {quote && <p className="quote">{quote}</p>}
          {author && <h6><i><p className="author">- {author}</p></i></h6>}
          <button className="quote-button" onClick={generateQuote}>
            Inspire
          </button>
            
          </div>
            
      </div>
    );
  }
  
  export default Quote;