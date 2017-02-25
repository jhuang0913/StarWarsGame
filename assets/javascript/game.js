(function() {

    // function constructor containing all player information variables: name, HP points(life), attack(power), counter attack (counter)
    function Player(name, life, power, counter) {
        this.name = name,
            this.hp = life,
            this.attackPower = function() {
                return power += this.basePower;
            },

            this.counter = counter,
            this.basePower = power
    }

    // player variables and stats
    var firstPlayer = new Player("Obi-wan Kenobi", 110, 1, 10),
        secondPlayer = new Player("Luke Sky Walker", 120, 2, 15),
        thirdPlayer = new Player("Darth Sidius", 110, 3, 10),
        fourthPlayer = new Player("Darth Maul", 130, 15, 20);


    // array of players
    var players = [firstPlayer, secondPlayer, thirdPlayer, fourthPlayer];
    

    // character DOM variable
    var character = $('.character');

    // output variables for the DOM
    function output() {

        var lives = $(".hp"),
            names = $(".name"),
            counter = $(".counter");

        // map loop to set DOM variables
        players.map(function(element, index) {
            $(lives[index]).html(element.hp);
            $(names[index]).html(element.name);
            $(counter[index]).html(element.counter);
        });
    } // end of the output function

    output();

// Choosing enemy
function choosingEnemy(){
	var clickedOperator = false;


	$(".character").on('click', function(){

	// Just grab the first enemy
	if(clickedOperator === false){
		$('.myPlayerZone1').html(this);
		clickedOperator = true;
	}
	// if (clickedOperator === true){
	// 	$(".mainCharacter").appendTo(".enemiesAvailable1")

	// }
	else{
		$('.enemyZone1').html(this);
		console.log(this)

	}
}); // end of the character on click event

}

choosingEnemy(); // calling the choosing enemy function


// Reset the game
function reset(){
	for(var i = 0; i < character.length; i++){
		$(".mainCharacter").append(character[i]);
	}


 output();
 choosingEnemy();


 $(".playerDamage, .enemyDamage").css('display', 'none');
}




// Fighting with enemy
$(".attack").on('click', function(){


	if($(".myPlayerZone1").html().trim() !== '' && $('.enemyZone1').html().trim() !== ''){
		$(".playerDamage, .enemyDamage").css('display', 'block');
			
		//console.log(attack);

		players.map(function(e, i){
			var attack = $(".attackPower");
			$(attack[i]).html(e.attackPower());
			//console.log(e.attackPower());
		});


		// The enemy is attacking me
		var myHp = $(".myPlayerZone1 .character .hp").html(),
			enemyCounter = $(".enemyZone1 .character .counter").html(),
			enemyAttack = myHp -= enemyCounter;

		

		$(".myPlayerZone1 .character .hp").html(enemyAttack);

		



		// Player's attacking the enemy
		var myPlayer = $(".myPlayerZone1 .character .attackPower").html(),
			enemyHp = $(".enemyZone1 .character .hp").html(),
			myAttack = enemyHp -= myPlayer;

		$(enemyHp).css({
			"background":"#7FFFD4"
		});


		console.group();
		console.log("My life is :" + myHp);
		console.log("My attack power: " + myPlayer);
		console.log("The enemy life: " + enemyHp);
		console.log("The enemy attack: " + enemyCounter);

		console.groupEnd();

		$('.playerDamage').html("I cause " + myPlayer + " damages to the enemy");
		$('.enemyDamage').html("The enemy causes " + enemyCounter + " damages to you");


		$('.enemyZone1 .character .hp').html(myAttack);



		// Checking if I lose. 
		if(myHp <= 0){

			// call the reset function here. 
			alert("You lost!");

			$('.restart').css('display', 'block');

		}


		// Checking if the enemy lost.
		if(enemyHp <= 0){
			$(".enemyZone1").empty();


			if($('.mainCharacter').html().trim() == '' && $(".enemyZone").html().trim() == ''){
				alert("I win!!");
				$('.restart').css('display', 'block');

				
			} // end of the if statement

		} // end of the if statement.

	} // end of the main if statement 


});

// Restart the game
$('.restart').on('click', function(){
	reset();
	$('.restart').css('display', 'none');

}); // end of the restart click event











































































































})()