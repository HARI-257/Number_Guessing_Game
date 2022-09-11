var msg1 = document.getElementById('msg1');
var msg2 = document.getElementById('msg2');
var msg3 = document.getElementById('msg3');
var result=Math.ceil(Math.random()*100);
console.log(result);
var num_of_guesses=0;
var guessed_num=[];
var btn=document.getElementById('btn');
var Play=()=>{
    var user_guess =document.getElementById('Guesses').value;
    if(user_guess < 1 || user_guess > 100){
        alert("Idiot!... I said Enter number between 1 and 100");
    }
    else{
        guessed_num.push(user_guess);
        num_of_guesses = num_of_guesses + 1;
        if(user_guess < result)
        {
            msg1.innerHTML="Your Guess is low";
            msg2.innerHTML="Number of guesses : "  + num_of_guesses;
            msg3.innerHTML="Guessed numbers are : " + guessed_num ;
        }
        else if(user_guess > result)
        {
            msg1.innerHTML="Your Guess is High";
            msg2.innerHTML="Number of guesses : "  + num_of_guesses;
            msg3.innerHTML="Guessed numbers are : " + guessed_num ;
        }
        else{
            msg1.innerHTML="Your guess is correct you won  ";
            msg2.innerHTML="Number of guesses : "  + num_of_guesses;
            msg3.innerHTML="Guessed numbers are : " + guessed_num ;
        }
    }
};

btn.addEventListener('click',Play);

var multi=document.getElementById("multi");
multi.onclick=function(){
    document.body.classList.toggle("dark-mode");
}
