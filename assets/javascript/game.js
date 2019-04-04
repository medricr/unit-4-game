
var playerChosen=false;
var opponentDead=false;
var playerWin=false;
// the player card obejct that will be used to initialize the characters
function playerCard(atkPwr,ctAtkPwr,name,hp,img) {
    this.atkPwr=atkPwr;
    this.ctAtkPwr=ctAtkPwr;
    this.name=name;
    this.hp=hp;
    this.img='<img id="char" src="' + img + '">';
    this.isplayer=false;
}
$(document).ready(function() {

var characterArray = [
    opponent0=new playerCard(6,5,"Obi-Wan",100,"../unit-4-game/assets/images/abstract-4.jpg"),
    opponent1=new playerCard(4,7,"General Grevious",200,"../unit-4-game/assets/images/abstract-3.jpg"),
    opponent2=new playerCard(4,7,"Yoda",200,"../unit-4-game/assets/images/abstract-2.jpg"),
    opponent3=new playerCard(4,7,"Rey",200,"../unit-4-game/assets/images/abstract-1.jpg"),
];

jQuery.each(characterArray,function(i,val) {
    // Set up character selection row
    var newdiv=$('<div class="col-sm-3 text-center"></div>');
    newdiv.prepend(val.img);
    newdiv.attr("id","opponent" + i);
    $(".character-row").append(newdiv);

});

$(".col-sm-3").on("click",function () {
    playerChosen=true;


});


});