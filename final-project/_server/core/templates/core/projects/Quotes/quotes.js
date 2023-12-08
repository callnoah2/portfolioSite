document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const randomQuoteSection = document.getElementById('randomQuoteSection');
    const randomQuote = document.getElementById('randomQuote');
    const searchResults = document.getElementById('searchResults');
    const searchButton = document.querySelector('#searchForm button');
    const errorMessage = document.createElement('p');

    // Retrieve pinned quotes from localStorage
    let pinnedQuotes = JSON.parse(localStorage.getItem('pinnedQuotes')) || [];
    let unpinnedResults = []; // Move the declaration here

    // Add the class name to the error message element
    errorMessage.classList.add('error-message');

    // Append the error message to the search form
    searchForm.appendChild(errorMessage);

    // Event listener for the search form
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form submission and page reload

        const searchTerm = searchInput.value.trim();

        if (!searchTerm) {
            // Handle empty search term (display an error or handle as needed)
            displayErrorMessage('Please enter an author to search from');
            return;
        }

        // Fetch and display a random quote based on the search term
        try {
            clearErrorMessage();
            const searchResult = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${encodeURIComponent(searchTerm)}`);
            const resultData = await searchResult.json();

            // Display one random quote from the search results
            const randomIndex = Math.floor(Math.random() * resultData.results.length);
            const randomQuoteData = resultData.results[randomIndex];
            displaySearchResults([...pinnedQuotes, ...resultData.results]);

            // Clear search input
            searchInput.value = '';
        } catch (error) {
            console.error('Error fetching data:', error.message);
            // Handle error (display an error message or handle as needed)
        }
    });

    function displaySearchResults(results) {
        // Clear previous search results
        searchResults.innerHTML = '';
    
        // Split the results into pinned and unpinned quotes
        const [pinnedResults, currentUnpinnedResults] = results.reduce(
            (acc, quote) => {
                acc[pinnedQuotes.includes(quote) ? 0 : 1].push(quote);
                return acc;
            },
            [[], []]
        );
    
        // Assign the current unpinned results to the global variable
        unpinnedResults = currentUnpinnedResults;
    
        // Display only the number of pinned quotes as present in the pinnedQuotes array
        const displayedPinnedQuotes = pinnedQuotes.slice(0, pinnedResults.length);
        
        // Display pinned quotes at the top
        displayedPinnedQuotes.forEach((quote) => {
            const quoteElement = createQuoteElement(quote, true);
            searchResults.appendChild(quoteElement);
        });
    
        // Display unpinned quotes below pinned quotes
        currentUnpinnedResults.forEach((quote) => {
            const quoteElement = createQuoteElement(quote, false);
            searchResults.appendChild(quoteElement);
        });
    
        // Adjust the height and width of all quote boxes based on viewport size
        const quoteBoxes = document.querySelectorAll('.quote-box');
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const boxWidth = viewportWidth > 800 ? 400 : viewportWidth - 40;
        const boxHeight = 'auto';
    
        quoteBoxes.forEach(box => {
            box.style.width = `${boxWidth}px`;
            box.style.height = boxHeight;
        });
    }

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

        // Add keydown event to handle enter key for pin/unpin
        quoteElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                togglePin(quote);
            }
        });

        return boxElement;
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            const quoteElements = document.querySelectorAll('.quote');
            const firstQuoteIndex = 0;
            const lastQuoteIndex = quoteElements.length - 1;

            if (document.activeElement.classList.contains('quote')) {
                const index = Array.from(quoteElements).indexOf(document.activeElement);
                let nextIndex;

                if (event.shiftKey) {
                    // If Shift key is pressed, move backward
                    nextIndex = index === firstQuoteIndex ? lastQuoteIndex : index - 1;
                } else {
                    // If Shift key is not pressed, move forward
                    nextIndex = index === lastQuoteIndex ? firstQuoteIndex : index + 1;
                }

                quoteElements[nextIndex].focus();
                event.preventDefault(); // Prevent the default tab behavior
            }
        }
    });

    function togglePin(quote) {
        // Check if the quote is already pinned
        const isPinned = pinnedQuotes.some(pinnedQuote => (
            pinnedQuote.author.toLowerCase() === quote.author.toLowerCase() &&
            pinnedQuote.content.toLowerCase() === quote.content.toLowerCase()
        ));
    
        if (isPinned) {
            // Quote is already pinned, so remove it
            pinnedQuotes = pinnedQuotes.filter(pinnedQuote => (
                !(
                    pinnedQuote.author.toLowerCase() === quote.author.toLowerCase() &&
                    pinnedQuote.content.toLowerCase() === quote.content.toLowerCase()
                )
            ));
        } else {
            // Quote is not pinned, so add it to the beginning of the pinned quotes if not already there
            if (!pinnedQuotes.some(pinnedQuote => (
                pinnedQuote.author.toLowerCase() === quote.author.toLowerCase() &&
                pinnedQuote.content.toLowerCase() === quote.content.toLowerCase()
            ))) {
                pinnedQuotes.unshift(quote);
            }
        }
    
        // Save pinned quotes to local storage
        localStorage.setItem('pinnedQuotes', JSON.stringify(pinnedQuotes));
    
        // Display search results after updating pinned quotes
        displaySearchResults([...pinnedQuotes, ...unpinnedResults]);
    }
    
    fetchRandomQuote();


    async function fetchRandomQuote() {
        try {
            const randomQuoteResult = await fetch('https://usu-quotes-mimic.vercel.app/api/random');
            const randomQuoteData = await randomQuoteResult.json();

            // Display the random quote with author
            randomQuote.innerHTML = `<p>Author: ${randomQuoteData.author}</p><p>${randomQuoteData.content}</p>`;
        } catch (error) {
            console.error('Error fetching random quote:', error.message);
            // Handle error (display an error message or handle as needed)
        }
    }

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
    }

    function clearErrorMessage() {
        errorMessage.textContent = '';
    }
});