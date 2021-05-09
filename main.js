const quotes = [
{
  quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
  author: " Linus Torvalds"
},

{
  quote: "If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You.",
  author: "Steve Jobs"
},
{
  quote: "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.",
  author: "Thich Nhat Hanh"
},
{
  quote: "There is no exquisite beauty without some strangeness in the proportion..",
  author: "Edgar Allan Poe"
},
{
  quote: "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
  author: "John Lennon "
},
{
  quote: "We are all in the gutter, but some of us are looking at the stars.",
  author: "Oscar Wilde"
},
{
  quote: "Talk is cheap. Show me the code. ",
  author: "â€• Linus Torvalds"
},
{
  quote: "In programming, the hard part isn't solving problems, but deciding what problems to solve.",
  author: "Paul Graham "
},

{
  quote: "Programming is key concept who want to understand and must have interested of ourself.",
  author: " Code Express"
},
{
  quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.",
  author: "Winston Churchill"
},
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

//Get Random text of Quotes
let random = Math.floor(Math.random() * quotes.length);
// console.log(random);

//Now Show Text On Screen
document.querySelector('.quote').innerText = quotes[random].quote;
document.querySelector('.author').innerText = quotes[random].author;

});