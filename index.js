const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')

let apiQuotes =[]

// Show New Quote
function newQuote() {
    // To Pick A Random Quote From apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //Check if author field is blank and replace
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }

    if (quoteText.length > 50) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quotte')
    }
    quoteText.textContent = quote.text    
}

async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'
    try {
        const res = await fetch(apiURL)
        apiQuotes = await res.json()
        // console.log(apiQuotes)
        newQuote()
    } catch (error) {
        // Catch Errror Here

    }

}

// OnLoad
getQuotes()