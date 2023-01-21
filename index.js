const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes =[]

// Show Loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

// Show New Quote
function newQuote() {
    loading()
    // To Pick A Random Quote From apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //Check if author field is blank and replace
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }

    if (quoteText.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text  
    complete()  
}

async function getQuotes() {
    loading()
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

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}


newQuoteButton.addEventListener('click', newQuote) 
twitterBtn.addEventListener('click', tweetQuote)

// OnLoad
getQuotes()
