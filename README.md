# unit-4-game
browser based fighting game

This game is asimple, brower based RPG, wherein the player will choose on of 5 characters
to fight with. This character will have two main stats, HP and ATK. The players ATK increases by its
base with every swing, while the HP is lost by taking damage from other characters. The player
wins by reducing the HP of all remaining enemies to zero.

The layout of the index will be a rough apporoximation of the following: 

=====================================================================================================
                                    HEADER
CHARACTER SELECTION

    CHARACTER IMAGES

DEFENDER SECTION

    PLAYER IMAGE
    ATTACK BUTTON

OPPONENT SECTION

    OPPONENT IMAGE W/STATS
=====================================================================================================

# Unit-4-Game / game.js / design documentation
===========================================
UNIT 4 GAME PSEUDOCODE
===========================================
Variables
+++++++++++++++++++++++++++++++++++++++++++
    playerChosen (bool)
    opponentDead (bool)
    player win (bool)

Objects
+++++++++++++++++++++++++++++++++++++++++++
    STAT BLOCK {
        name (string)
        atk power (int)
        counter atk power (int)
        hp (int)
        isplayer (bool)
    }

    PLAYER (stat-block (object)) {
        player assumes pertanent stats of argument
    }

Functions
+++++++++++++++++++++++++++++++++++++++++++
    resolve-combat(user(), opponent()) {
        opponent.hp - user.atk-power
        user.hp - opponent.atk-power
        if opponent is dead
            return opponent dead
        else if player dead
            return player dead
        else
            return draw
    }

    opponent-dead() {
        if no opponents left
            return PLAYER WINS
        else
            when player clicks another image
                switch defeated opponent with new opponent
                opponentDead = false
    }

    initialize-game() {
        populate image slots with players
    }



===========================================

Document Ready
    When user clicks on an image
        the first time they click
            Assign that characters stats to the player
            move that image into the player area
            set playerchosen to yes
        
        the next time they click   
            assign that characters stats to the opponent
            move that image into the attacker area
            set opponentDead to false
    
    when user clicks attack
        resolve combat
        if player is dead
            PLAYER LOSES
        if opponent is killed
            replace opponent with the next one that the player selects
    repeat until all opponents are dead or player is dead

