      function random(n) {
      	var rand = Math.floor( Math.random() * n );
		return rand;
      }
var quotes = "In three words I can sum up everything I've learned about life: it goes on.― Robert Frost | Insanity is doing the same thing, over and over again, but expecting different results.― Narcotics Anonymous | You only live once, but if you do it right, once is enough.― Mae West | To live is the rarest thing in the world. Most people exist, that is all.― Oscar Wilde | Life is what happens to you while you're busy making other plans.― Allen Saunders | Everything you can imagine is real.― Pablo Picasso | I'm not afraid of death.― Woody Allen   ";
		

		var arr = quotes.split(' | ');
		    alert(arr[random(7)]);