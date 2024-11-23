var arrayOfQuotes = [
  // anonymous objects as array elemnts each one contains 2 properties
  //You don’t need to assign a name to the object because you’re referencing it through the array index
  //arrayOfQuotes[0]
  {
    author: "--Daniel Gilbert",
    quote: '"The truth is, bad things don\'t affect us as profoundly as we expect them to. That\'s true of good things, too. We adapt very quickly to either."',
  },
  //arrayOfQuotes[1]
  {
    author: "--Napoleon Hill",
    quote: '"Strength and growth come only through continuous effort and struggle."',
  },
  //arrayOfQuotes[2]
  { author: "--Frank Sinatra", 
    quote: '"The best revenge is massive success."' ,
  },
  //arrayOfQuotes[3]
  {
    author: "--Bang Chan",
    quote: '"Make someone smile everyday, but never forget you\'re someone too."',
  },
  //arrayOfQuotes[4]
  {
    author: "--Stephanie Garber, CARAVAL",
    quote: '"Every person has the power to change their fate if they are brave enough to fight for what they desire more than anything."',
  },
  //arrayOfQuotes[5]
  {
    author: "--Mary Davis",
    quote: '"The more grateful I am, the more beauty I see."',
  },
  //arrayOfQuotes[6]
  {
    author: "--Libba Bary",
    quote: '"Sometimes we seek that which we are not yet ready to find."',
  },
  //arrayOfQuotes[7]
  {
    author: "--Martha Stewart",
    quote: '"I love the challenge of starting at zero every day and seeing how much I can accomplish."',
  },

//arrayOfQuotes[8]
{
  author: "--Leigh Bardugo",
  quote: '"Better terrible truths than kind lies."',
},

//arrayOfQuotes[9]
{
  author: "--Tim Cook",
  quote: '"The sidelines are not where you want to live your life. The world needs you in the arena."',
},

];


function randomQuoteGenerator() {
  // Generate a random index based on the length of the array
  //// math.floor is used with math.random to return random integers 
  ////example: (0.2348487 x 10) ≈ 2
  var randomArrayIndex = Math.floor(Math.random() * arrayOfQuotes.length);

  document.getElementById("quotes").innerHTML = arrayOfQuotes[randomArrayIndex].quote;
  document.getElementById("authors").innerHTML = arrayOfQuotes[randomArrayIndex].author;
}


