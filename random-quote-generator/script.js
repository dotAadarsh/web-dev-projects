// IIFE
(function () {
    const quotes = [
        {
            quote: "Programming isn't about what you know; it's about what you can figure out.",
            author: "Chris Pine"
        },
        {
            quote: "The only way to learn a new programming language is by writing programs in it.",
            author: "Dennis Ritchie"
        },
        {
            quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
            author: "Joyce Wheeler"
        },
        {
            quote: "Testing leads to failure, and failure leads to understanding.",
            author: "Burt Rutan"
        },
        {
            quote: "The best error message is the one that never shows up.",
            author: "Thomas Fuchs"
        }
    ];

    const btn = document.getElementById("generate-btn");
    btn.addEventListener("click", function () {
        let random = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });
})();
