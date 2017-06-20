$(document).ready(function(){

  var displayedQuote;
  var currInd;
  
function random_col(){
  var col = [];
  var c = "0123456789ABCDEF";
  var i = 0;
  while(i<6){
    var b = parseInt(Math.random()*16);
    var a = c[b];
    col.push(a);
    i++;
  }
  var res = "#" + col.join("");
  
  if(res !== "#ffffff" ){
     return res; 
  }
  else{
    return "#088A85";
  }
  
}

function set_col(){
  var col = random_col();
  $("div").css("color", col);
  $("#ggg").css("background-color", col);
}
var quotes = [
  {quote:"Technology can be our best friend, and technology can also be the biggest party pooper of our lives. It interrupts our own story, interrupts our ability to have a thought or a daydream, to imagine something wonderful, because we're too busy bridging the walk from the cafeteria back to the office on the cell phone. ", author:"Steven Spielberg"},
  {quote:"Anything that was in the world when you were born is normal and natural. Anything invented between when you were 15 and 35 is new and revolutionary and exciting, and you’ll probably get a career in it. Anything invented after you’re 35 is against the natural order of things.", author:"Douglas Adams"}, 
  {quote:"Technology and the machine resurrected San Francisco while Pompeii still slept in her ashes.", author:"Silas Bent"}, 
  {quote:"It makes sense to examine Plato and pottery together in order to understand the Greek world, Descartes and the mechanical clock together in order to understand Europe in the seventeenth and eighteenth centuries. In the same way, it makes sense to regard the computer as a technological paradigm for the science, the philosophy, even the art of the coming generation.", author:"Jay David Bolter"}, 
  {quote:"Technology and innovation must act as a means of just social change—to reduce social gaps and inequality, to ensure that every person on this planet has a chance to enjoy the fruits thereof, and to make the world a better place.", author:"Yoel Esteron"}, 
  {quote:"Civilization advances by extending the number of important operations which we can perform without thinking of them.", author:"Alfred North Whitehead"}, 
  {quote:"It has become appallingly obvious that our technology has exceeded our humanity.", author:"Albert Einstein"}, 
  {quote:"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.", author:"Carl Sagan"}, 
  {quote:"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.", author:"Bill Gates"}, 
  {quote:"The science of today is the technology of tomorrow.", author:"Edward Teller"}, 
  {quote:"Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.", author:"Steve Jobs"}, 
  {quote:"Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.", author:"Neil deGrasse Tyson"}, 
  {quote:"Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without the talking about the other. ", author:"Bill Gates"}, 
  {quote:"The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.", author:"Bill Gates"}, 
  {quote:"Good, bad or indifferent, if you are not investing in new technology, you are going to be left behind.", author:"Philip Green"}, 
  {quote:"Social media is not about the exploitation of technology but service to community.", author:"Simon Mainwaring"}, 
  {quote:"The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential.", author:"Steve Ballmer"}, 
  {quote:"The Internet is so big, so powerful and pointless that for some people it is a complete substitute for life.", author:"Andrew Brown"}, 
  {quote:"The real problem is not whether machines think but whether men do.", author:"B.F.Skinner"}, 
  {quote:"I have mixed feelings about how fast things are changing as a result of technology. There's no denying that through technology there are amazing things being created that help people with diseases or help people's dreams come true. But there's also this obsession. Social media is the most dangerous of them all.", author:"Amanda Crew"},
  {quote:"Sharing is good, and with digital technology, sharing is easy.", author:"Richard Stallman"}, 
  {quote:"Our intuition about the future is linear. But the reality of information technology is exponential, and that makes a profound difference. If I take 30 steps linearly, I get to 30. If I take 30 steps exponentially, I get to a billion.", author:"Ray Kurzweil"}, 
  {quote:"Getting information off the Internet is like taking a drink from a fire hydrant.", author:"Mitchell Kapor"}, 
  {quote:"In the 20th century, we had a century where at the beginning of the century, most of the world was agricultural and industry was very primitive. At the end of that century, we had men in orbit, we had been to the moon, we had people with cell phones and colour televisions and the Internet and amazing medical technology of all kinds.", author:"David Gerrold"}, 
  {quote:"Technology is a compulsive and addictive way to live. Verbal communication cannot be lost because of a lack of skill. The ability to listen and learn is key to mastering the art of communication. If you don't use your verbal skills and networking, it will disappear rapidly. Use technology wisely. ", author:"Rick Pitino"}, 
  {quote:"Science and technology revolutionize our lives, but memory, tradition and myth frame our response.", author:"Arthur M. Schlesinger"}, 
  {quote:"The Internet is the most important single development in the history of human communication since the invention of call waiting.", author:"Dave Barry"}, 
  {quote:"Technology... is a queer thing. It brings you great gifts with one hand, and it stabs you in the back with the other.", author:"Carrie Snow"}, 
  {quote:"Men have become the tools of their tools.", author:"Henry David Thoreau"}, 
  {quote:"We have also arranged things so that almost no one understands science and technology. This is a prescription for disaster. We might get away with it for a while, but sooner or later this combustible mixture of ignorance and power is going to blow up in our faces.", author:"Carl Segan"}, 
  {quote:"Civilization has given us enormous successes: going to the moon, technology. But then this is the civilisation that took us to debt, environmental crisis, every single crisis. We need a civilization where we say goodbye to these things.", author:"Muhammad Yunus"}, 
  {quote:"Our technological powers increase, but the side effects and potential hazards also escalate.", author:"Alvin Toffler"}, 
  {quote:"Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.", author:"Jacques Ellul"}
];
function updateQuotes(){
  var ind;
  do{
    ind = Math.floor(Math.random()*quotes.length);
  }
  while(currInd==ind);
  
  displayedQuote = quotes[ind];
  $("#quotes").html(displayedQuote.quote);
  $("#author").html("---" + displayedQuote.author);
  curr_ind = ind;
}

$(function(){
  $("#generator").click(function(){
    updateQuotes();
    set_col();
});
});

  
  var encoded = encodeURI(displayedQuote.quote);
  $("#tweetit").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + encoded);
});

});
