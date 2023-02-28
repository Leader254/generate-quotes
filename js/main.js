// get a reference to the button
let clickBtn = document.getElementById('btn');

// add an event listener to the button
clickBtn.addEventListener('click', function generateQuote(){

    // make a request to the API
    fetch('https://api.quotable.io/random')
    .then (response => response.json())
    .then (data => {
        let quote = data.content;
        let author = data.author;

        // display the quote and the author on the page
        let quoteElement = document.getElementById('quote');
        let authorElement = document.getElementById('author');

        quoteElement.textContent = `"${quote}"`;
        authorElement.textContent = `- ${author}`;
    })
    .catch (error => console.log(error));
});

