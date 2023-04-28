const quotes = [
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
];

function generateQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
