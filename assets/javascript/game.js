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
    this.img='<img id="char" class="center" src="' + img + '">';
    this.isplayer=false;
}
// create user and opponent variables as instances of playerCard
user = new playerCard();
opponent = new playerCard();
// the array holding all potential user characters/opponents
var characterArray = [
    opponent0=new playerCard(10,5,"Obi-Wan",100,"../unit-4-game/assets/images/obi_wan.jpg"),
    opponent1=new playerCard(4,10,"General Grievous",150,"../unit-4-game/assets/images/gen_grievous.jpg"),
    opponent2=new playerCard(8,4,"Master Yoda",200,"../unit-4-game/assets/images/yoda.jpg"),
    opponent3=new playerCard(6,8,"Darth Maul",125,"../unit-4-game/assets/images/darth_maul.jpg"),
];
// Set up character selection row
jQuery.each(characterArray,function(i,val) {
    // create a new div to hold the character image
    var newdiv=$('<div class="col-sm-3 text-center"></div>');  
    // put that image into the div
    newdiv.prepend(val.img);
    // add the character name
    newdiv.prepend(val.name);
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
    }
    // if the user has not chosen an opponent yet, repeat the process above for the attacker
    else if(!opponentChosen) {
        opponentChosen = true;
        var opId = this.id[this.id.length-1];
        opponent = characterArray[opId];
        $("#opponent" + opId).append('<h4>HP: <span id="opponent-hp"></span></h4>');
        $("#opponent" + opId).appendTo("#battle-row");
        $("#opponent" + opId).addClass("op");        
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
        alert("YOU WIN!!");
        // reset pertinant variables
        playerWin=true;
        opponentDead=true;
        opponentChosen=false;
        // and delete the div, as it will not be used again
        $(".op").remove();
    }
    else if(user.hp <= 0) {
        alert("YOU LOSE!!");
    }
$(".reset-btn").on("click",function() {location.reload()});
});
});