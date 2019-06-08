const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = [];
let index = 0;

// Get Quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error);
    }
}

// Show new quote
function newQuote() {
    if (index<apiQuotes.length){
        const quote = apiQuotes[index]
        // Check if the author is unknown
        if(!quote.author){
            quoteAuthor.textContent = 'Unknown'
        } else {
            quoteAuthor.textContent = quote.author;
        }
        // Check if the quote has long text
        if(quote.text.length > 65){
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.textContent = quote.text;
        index++;
    } else {
        getQuotes();
        index = 0;
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();