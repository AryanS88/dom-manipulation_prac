let btn=document.querySelector('.button')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    person: "Martin Luther King Jr."
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    person: "Edmund Burke"
  },
  {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    person: "Mark Zuckerberg"
  }];
  btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
  })
