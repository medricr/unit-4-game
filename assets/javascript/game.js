// boolean variables for directing the game
var playerChosen=false;
var opponentChosen=false;
var playerDead=false;
var opponentDead=false;
var playerWin=false;

var opponentsKilled=0;

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
    this.img='<img id="char" class="center" src="' + img + '">';
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
    var newdiv=$('<div class="col-sm-3 text-center"></div>');  
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
        // append an hp tracker to the div
        $("#opponent" + playerId).append('<h4>HP: <span id="user-hp"></span></h4>');
        // and move that image to the appropriate section
        $("#opponent" + playerId).prependTo("#battle-row");
        // $("#defender-section").append('<h4>HP: <span id="user-hp"></span></h4>');
        alert("player: " + user.name);
    }
    // if the user has not chosen an opponent yet, repeat the process above for the attacker
    else if(!opponentChosen) {
        opponentChosen = true;
        var opId = this.id[this.id.length-1];
        opponent = characterArray[opId];
        $("#opponent" + opId).append('<h4>HP: <span id="opponent-hp"></span></h4>');

        $("#opponent" + opId).appendTo("#battle-row");
        // $("#attacker-section").append('<h4>HP: <span id="opponent-hp"></span></h4>');
        // $("#opponent" + opId).remove();
        alert("opponent: " + opponent.name);
    }
});

// when the user clicks on the attack button...
$(".atk-btn").on("click",function() {
    // increase the users attack power
    user.atkPwr += user.baseAtkPwr;
    // resolve the attack/counterattack exchange
    opponent.hp -= user.atkPwr;
    user.hp -= opponent.ctAtkPwr;
    // update user/opponent hp
    $("#user-hp").text(user.hp);
    $("#opponent-hp").text(opponent.hp);
    // if the opponent is dead
    if(opponent.hp <= 0) {
        alert("player wins!")
        // reset pertinant variables
        playerWin=true;
        opponentDead=true;
        opponentChosen=false;
        // track the number of enemies killed
        opponentsKilled++;
        // and delete the div, as it will not be used again
        $("#attacker-section").empty();
    }
    else if(user.hp <= 0) {
        alert("Player loses!")
    }

});



});