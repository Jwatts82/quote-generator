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
    authorText.textContent = quote.author
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