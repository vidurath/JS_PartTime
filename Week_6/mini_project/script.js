let quotes = [
  {
    id: "0",
    author: "Benjamin Franklin",
    quote: "If you fail to plan, you are planning to fail",
  },
  {
    id: "1",
    author: "author 1",
    quote: "quote 1",
  },
  {
    id: "2",
    author: "author 2",
    quote: "quote 2",
  },
  {
    id: "3",
    author: "author 3",
    quote: "quote 3",
  },
  {
    id: "4",
    author: "author 4",
    quote: "quote 4",
  },
];

function generate_quote() {
  //   console.log("Generating quote...");
  let newQuoteNum = 0;
  for (let i = 0; i < quotes.length; i++) {
    newQuoteNum = Math.floor(Math.random() * quotes.length);
  }
  console.log(quotes[newQuoteNum]);

  //   let max_index = quotes.length - 1;

  //   let random_index = getRandomIndex(max_index);
  //   console.log(random_index);

  //   let random_quote = quotes

  let container = document.createElement("div");
  container = quotes[newQuoteNum];

  //   let newquote = quotes[newQuoteNum];

  var randomNumber = Math.floor(Math.random() * 10);

  let x = quotes[newQuoteNum];

  document.getElementById("quoteDisplay").innerHTML = x["quote"];
}

let button = document.getElementById("btnQuote");
button.onclick = generate_quote;

function getRandomIndex(max) {
  return Math.round(Math.random() * max);
}


let add_btn = document.getElementById(''add_quote);

function add_new_quote(){

    let form = document.forms.new_quote;
    
    let new_quote = {
        id : quotes.length,
        quotes: form.quote.value,
        author: form.author.value
    }

    quotes.push(new_quote);
}

let num_char_space = document.getElementById('num_char_space');
num_char_space.onclick = getNumCharSpace;

function getNumCharSpace(){
    for (let obj of quotes){
        console.log(obj.quote.length);
    }
}
