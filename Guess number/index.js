const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1) + minNum);
let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("PLease enter a valid number");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("To low!Try again");
        }
        else if(guess>answer){
            window.alert("Too high! Try again");
        }
        else{
            window.alert(`Correct! You guessed it in ${attempt} attempt(s)`);
            running=false;
        }
    }
}