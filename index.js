// Get Quotes From API
let apiQuotes =[]

// Show New Quote
function newQuote() {
    // To Pick A Random Quote From apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)

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