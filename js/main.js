let myBtn = document.getElementById("btn");
let reloadQuote = document.getElementById('reload')
let reloadAuthor = document.getElementById("reload2");

myBtn.addEventListener("click", change)

let randomQuote = [

    {
        quote: "It’s hard to beat a person who never gives up",
        author: "Babe Ruth"
    },
    {
        quote: "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours",
        author: "Leah Busque",
    },
    {
        quote: "If people are doubting how far you can go, go so far that you can’t hear them anymore",
        author: " Michele Ruiz"

    },
    {
        quote: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success",
        author: "Arianna Huffington"
    },
    {
        quote: "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
        author: "Joss Whedon"
    },
    {
        quote: "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth",
        author: "William W. Purkey"
    },
    {
        quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten",
        author: " Neil Gaiman"
    },
    {
        quote: "Everything you can imagine is real",
        author: "Pablo Picasso"
    },
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us",
        author: "Helen Keller"
    },
    {
        quote: "Do one thing every day that scares you",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It’s no use going back to yesterday, because I was a different person then",
        author: "Lewis Carroll"
    },
    {
        quote: "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers",
        author: " Socrates"
    },
    {
        quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions",
        author: " Dalai Lama XIV"
    },
    {
        quote: "The hard days are what make you stronger",
        author: "Aly Raisman"
    },
    {
        quote: "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles",
        author: " Wayne Dyer"
    },
    {
        quote: "Keep your eyes on the stars, and your feet on the ground",
        author: "Theodore Roosevelt"
    },
    {
        quote: "You can waste your lives drawing lines. Or you can live your life crossing them",
        author: "Shonda Rhimes"
    },
    {
        quote: "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction",
        author: "George Lorimer"
    },
    {
        quote: "I now tried a new hypothesis: It was possible that I was more in charge of my happiness than I was allowing myself to be",
        author: "Michelle Obama"
    },
    {
        quote: "In a gentle way, you can shake the world",
        author: " Mahatma Gandhi"
    },
    {
        quote: "If opportunity doesn’t knock, build a door",
        author: " Kurt Cobain"
    },
    {
        quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart",
        author: "Roy T. Bennett"
    },
    {
        quote: "Work hard in silence, let your success be the noise",
        author: "Frank Ocean"
    },

];
function change() {
    let num = Math.floor(Math.random() * randomQuote.length);
    
    console.log(randomQuote[num].quote);
    console.log(randomQuote[num].author);

    reloadQuote.innerHTML = randomQuote[num].quote;
    reloadAuthor.innerHTML = randomQuote[num].author;
}





