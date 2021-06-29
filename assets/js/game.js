var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//-------------------------First Message -------------------------------------
var fight = function(enemyName) {
                                }

//-------------------------Second Message ------------------------------------
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");



while(enemyHealth > 0) {
// ----------------- Adding for function to repeat enemies one after another-----

    for(var i = 0; i < enemyNames.length; i++) { 
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
   
// -----------From here add situation that will repeat again & again ---------------
 
    if (promptFight === "fight" || promptFight === "FIGHT")  {

        enemyHealth = enemyHealth - playerAttack;

    console.log(
      playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0) {
           window.alert(enemyNames[i] + " has died!");
                              } 
        else {
           window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
             }




         playerHealth = playerHealth - enemyAttack;

    console.log(
      enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
                                   }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
             }

        }
 // ---------------  this is closing parenthesis for  FIGHT 

    else if (promptFight === "skip" || promptFight === "SKIP") {
       var confirmSkip = window.confirm("Are you sure you'd like to quit?");

       if (confirmSkip) {
       window.alert(playerName + " has decided to skip this fight. Goodbye!");
       playerMoney = playerMoney - 2;
       }
    
    else    {
       window.alert("You need to choose a valid option. Try again!");
         }
      }

    }
}
