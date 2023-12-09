import React, { useEffect, useState } from 'react';
import './quotes.css';

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [randomQuote, setRandomQuote] = useState('Loading...');
  const [searchResults, setSearchResults] = useState([]);
  const [pinnedQuotes, setPinnedQuotes] = useState([]);
  const [unpinnedResults, setUnpinnedResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Retrieve pinned quotes from localStorage
    const storedPinnedQuotes = JSON.parse(localStorage.getItem('pinnedQuotes')) || [];
    setPinnedQuotes(storedPinnedQuotes);
  }, []);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      displayErrorMessage('Please enter an author to search from');
      return;
    }

    try {
      clearErrorMessage();
      const searchResult = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${encodeURIComponent(searchTerm)}`);
      const resultData = await searchResult.json();

      // Display one random quote from the search results
      const randomIndex = Math.floor(Math.random() * resultData.results.length);
      const randomQuoteData = resultData.results[randomIndex];
      displaySearchResults([...pinnedQuotes, ...resultData.results]);

      // Clear search input
      setSearchTerm('');
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle error (display an error message or handle as needed)
    }
  };

  const displaySearchResults = (results) => {
    // Split the results into pinned and unpinned quotes
    const [pinnedResults, currentUnpinnedResults] = results.reduce(
      (acc, quote) => {
        acc[pinnedQuotes.includes(quote) ? 0 : 1].push(quote);
        return acc;
      },
      [[], []]
    );

    // Assign the current unpinned results to the state variable
    setUnpinnedResults(currentUnpinnedResults);

    // Display only the number of pinned quotes as present in the pinnedQuotes array
    const displayedPinnedQuotes = pinnedQuotes.slice(0, pinnedResults.length);

    // Display pinned quotes at the top
    setSearchResults([...displayedPinnedQuotes, ...currentUnpinnedResults]);
  };


  function createQuoteElement(quote, isPinned) {
    const quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');
    quoteElement.tabIndex = 0;
  
    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${quote.author}`;
    quoteElement.appendChild(authorElement);
  
    const contentElement = document.createElement('p');
    contentElement.textContent = quote.content;
    quoteElement.appendChild(contentElement);
  
    // Add a separate box element for each quote
    const boxElement = document.createElement('div');
    boxElement.classList.add('quote-box');
    boxElement.style.backgroundColor = isPinned ? '#b01cc1' : getComputedStyle(searchButton).backgroundColor; // Use a different color for pinned quotes
    boxElement.style.color = isPinned ? 'black' : 'white';
    boxElement.appendChild(quoteElement);
  
    // Add click event to pin/unpin the quote
    boxElement.addEventListener('click', () => {
      togglePin(quote);
    });
    
    quoteElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          togglePin(quote);
        }
      });
    
      return boxElement;
    }

  const togglePin = (quote) => {
    // Implement the logic to toggle pin/unpin
    // ...

    // Update state variables as needed
    // ...

    // Save pinned quotes to local storage
    localStorage.setItem('pinnedQuotes', JSON.stringify(pinnedQuotes));

    // Display search results after updating pinned quotes
    displaySearchResults([...pinnedQuotes, ...unpinnedResults]);
  };

  const fetchRandomQuote = async () => {
    try {
      const randomQuoteResult = await fetch('https://usu-quotes-mimic.vercel.app/api/random');
      const randomQuoteData = await randomQuoteResult.json();

      // Update state with random quote data
      setRandomQuote(`<p>Author: ${randomQuoteData.author}</p><p>${randomQuoteData.content}</p>`);
    } catch (error) {
      console.error('Error fetching random quote:', error.message);
      // Handle error (display an error message or handle as needed)
    }
  };

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  // Fetch a random quote on component mount
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="container">
      {/* Title Section */}
      <h1>Quotable Quotes</h1>

      {/* Search Bar and Random Quote Section */}
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search by author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div id="randomQuoteSection">
        <p id="randomQuote" dangerouslySetInnerHTML={{ __html: randomQuote }} />
      </div>

      {/* Search Results Section */}
      <div id="searchResults">
        {/* Quotes will be dynamically added here */}
        {searchResults.map((quote) => createQuoteElement(quote, pinnedQuotes.includes(quote)))}
      </div>

      {/* Display error message if present */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Quotes;