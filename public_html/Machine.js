//Game variables
var symbols=["Cherries","Orange","Plum","Bell","Melon","Bar"];
var selectedSymbols=[];
var winnings=0;
var totalBet=0;
var current=0;
var slot="";
var games=0;
var cheat=0;
//Generates the 3 random symbols and stores them in a array.
function randSymbol(){
    for(i=0;i<3;i++){
        rand=Math.floor(Math.random()*6);
        selectedSymbols.push(symbols[rand]);
    }
}
//Triggers when the player pulls the lever. 
//Will determine if the entered value is acceptable before continuing the game. 
//If value is acceptable game starts.
function leverPull(){
    bet=document.getElementById("bet").value;
    if (bet==="Yzma"){
        document.getElementById("pullLever").innerHTML="Pull The Lever Kronk";
    }
    if (bet===" "){
        alert("working");
    }
    else if (isNaN(bet)){
        document.getElementById("winnings").innerHTML="You must enter a numerical bet!";
    }
    else{
        document.getElementById("bet").disabled=true;
        document.getElementById("pullLever").disabled=true;
        randSymbol();
        slotPictures();
        winner();
        reset();
        games++;
    }
}
//Scans for the selected symbols and places them in the correct slots.
function slotPictures(){
    for(i=0;i<3;i++){
        slot="slot"+i;
        var picture=document.getElementById(slot);
        if (selectedSymbols[i]==="Cherries"){
            picture.src="cherries.jpg";
        }
        else if (selectedSymbols[i]==="Orange"){
            picture.src="orange.jpg";
        }
        else if (selectedSymbols[i]==="Plum"){
            picture.src="plum.jpg";
        }
        else if (selectedSymbols[i]==="Bell"){
            picture.src="bell.jpg";
        }
        else if (selectedSymbols[i]==="Melon"){
            picture.src="melon.jpg";
        }
        else{
            picture.src="bar.jpg";
        }
    }
}
//Determines if the player wins and displays a message.
function winner(){
    bet=document.getElementById("bet").value;
    if (selectedSymbols[0]===selectedSymbols[1]&&
        selectedSymbols[1]===selectedSymbols[2]){
        document.getElementById("winnings").innerHTML="You win $"+bet*3+"!";
        winnings=winnings+Number(bet*3);
        current=current+(bet*3);
    }
    else if (selectedSymbols[0]===selectedSymbols[1]||
        selectedSymbols[0]===selectedSymbols[2]||
        selectedSymbols[1]===selectedSymbols[2]){
        document.getElementById("winnings").innerHTML="You win $"+bet*2+"!";
        winnings=winnings+Number(bet*2);
        current=current+(bet*2);
    }
    else{
        document.getElementById("winnings").innerHTML="You lose!";
        current=current-bet;
    } 
    totalBet=totalBet+Number(bet);
    document.getElementById("displayBet").innerHTML="Amount available: $"+current;
}
//Gets the game ready to play again
function reset(){
    selectedSymbols=[];
    document.getElementById("bet").value=" ";
    bet=0;
    document.getElementById("again").disabled=false;
    document.getElementById("end").disabled=false;
}
//Directly ends the game
function endGame(){
    document.getElementById("again").disabled=true;
    document.getElementById("pullLever").disabled=true;
    document.getElementById("bet").disabled=true;
    document.getElementById("end").disabled=true;
    totalWinnings();
}
//Determines if the player wants to play again 
function playAgain(){
    again=confirm("Play again?");
    if (again){
        alert("Playing dangerous.");
        document.getElementById("bet").disabled=false;
        document.getElementById("pullLever").disabled=false;
        betChoice();
    }
    else{
        alert("Smart choice.");
        endGame();
    }
}
//Displays stats of the game
function totalWinnings(){
    document.getElementById("total").innerHTML="Total money bet: $"+totalBet+"<br>Total money won: $"+winnings+"<br>Total games played: "+games+"<br>Game Over! Reload page to play again!";
}
//Asks the player if they want to use their current winnings or insert more money.
function betChoice(){
    if (current>0){
        choice=confirm("Would you like to use your current winnings? \n\
Winnings available: $"+current);
        if(choice){
            do{
                amount=Number(prompt("How much would you like to use? Winnings available: $"+current));
                if (amount>current){
                    alert("That amount is not available!");
                }
            }while(amount>current)
            document.getElementById("bet").disabled=true;
            document.getElementById("bet").value=amount;
            document.getElementById("displayBet").innerHTML="Amount available: "+(current-amount);
        }
        else{
            alert("Insert more money.");
        }
    }
    else{
        alert("You need to insert more money.");
        current=0;
        document.getElementById("displayBet").innerHTML="Amount available: $"+current;
    }
}
//A fun little function
function cheater(){
    cheat++;
    if (cheat===1){
        alert("No cheating.");
    }
    else if (cheat===2){
        alert("I said no cheating.");
    }
    else if (cheat===3){
        alert("This won't work.");
    }
    else if (cheat===4){
        alert("Stop clicking.");
    }
    else if (cheat===5){
        alert("You really think this will work?");
    }
    else if (cheat===6){
        alert("I told you it wont work.");
    }
    else if (cheat===7){
        alert("How long are you going to try this?");
    }
    else if (cheat===8){
        alert("This won't give you anything special.");
    }
    else if (cheat===9){
        alert("Yep still clicking.");
    }
    else if (cheat>=10 && cheat<20){
        alert("Still here?...Yep, still here.");
    }
    else if (cheat===20){
        alert("TA DA! You won...");
    }
    else if (cheat===21){
        alert("nothing. You won nothing.");
    }
    else if (cheat>=23){
        alert("Play the game already.");
    }
}
function kenobi(){
    alert("General Kenobi.");
    document.getElementById("button1").style.color="red";
}