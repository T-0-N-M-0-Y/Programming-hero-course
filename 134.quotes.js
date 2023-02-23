const quoteSummary = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = quote =>{
    console.log(quote);
    const blockQuotes = document.getElementById('quote')
    blockQuotes.innerHTML = quote.quote;
}
quoteSummary();