// boolean variables for directing the game
var playerChosen=false;
var opponentChosen=false;
var playerDead=false;
var opponentDead=false;
var playerWin=false;

// the player card obejct that will be used to initialize the characters
function playerCard(atkPwr,ctAtkPwr,name,hp,img) {
    // character attack power
    this.baseAtkPwr=atkPwr;
    // character cumulative attack power
    this.atkPwr=atkPwr;
    // character counter attack power
    this.ctAtkPwr=ctAtkPwr;
    // character name
    this.name=name;
    // character health
    this.hp=hp;
    // character placard
    this.img='<img id="char" src="' + img + '">';
    this.isplayer=false;
}

// create user and opponent variables as instances of playerCard
user = new playerCard();
opponent = new playerCard();

// the array holding all potential user characters/opponents
var characterArray = [
    opponent0=new playerCard(6,5,"Obi-Wan",100,"../unit-4-game/assets/images/abstract-4.jpg"),
    opponent1=new playerCard(4,7,"General Grevious",200,"../unit-4-game/assets/images/abstract-3.jpg"),
    opponent2=new playerCard(4,7,"Yoda",200,"../unit-4-game/assets/images/abstract-2.jpg"),
    opponent3=new playerCard(4,7,"Rey",200,"../unit-4-game/assets/images/abstract-1.jpg"),
];

// Set up character selection row
jQuery.each(characterArray,function(i,val) {
    // create a new div to hold the character image
    var newdiv=$('<div class="col-sm-3 text-center"><h4>HP: <span id="hp"></span></h4></div>');  
    // put that image into the div
    newdiv.prepend(val.img);
    // give the image an ID that matches its index in characterArray
    newdiv.attr("id","opponent" + i);
    

    // place the new div into the character Row
    $(".character-row").append(newdiv);
});

// program is ready to fire
$(document).ready(function() {

// when the user clicks on a character image...
$(".col-sm-3").on("click",function () {

    // if the user has not chosen a character yet...
    if(!playerChosen) {
        playerChosen = true;
        var playerId = this.id[this.id.length - 1];
        // get the users selection based on the picture they clicked
        user = characterArray[playerId];
        // and move that image to the appropriate section
        $("#opponent" + playerId).appendTo("#defender-section");
        alert("player: " + user.name);
    }
    // if the user has not chosen an opponent yet, repeat the process above for the attacker
    else if(!opponentChosen) {
        opponentChosen = true;
        var opId = this.id[this.id.length-1];
        opponent = characterArray[opId];
        $("#opponent" + opId).appendTo("#attacker-section");
        // $("#opponent" + opId).remove();
        alert("opponent: " + opponent.name);
    }
});

// when the user clicks on the attack button...
$(".atk-btn").on("click",function() {
    user.atkPwr += user.baseAtkPwr;
    opponent.hp -= user.atkPwr;
    user.hp -= opponent.ctAtkPwr;
    if(opponent.hp >= 0) {
        playerWin=true;
        opponentDead=true;
    }
})



});