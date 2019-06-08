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
        index++;
    } else {
        getQuotes();
        index = 0;
    }
}
// On load
getQuotes();