var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;





for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
   fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }

}






function fight(enemyName) {





  while (playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");



    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    if (promptFight === "fight" || promptFight === "FIGHT") {

      enemyHealth = enemyHealth - playerAttack;

      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        platerMoney = playerMoney + 20;
        break;
      }



      else {
        window.alert(enemyName[i] + " still has " + enemyHealth + " health left.");
      }

      playerHealth = playerHealth - enemyAttack;

      console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      }

     
      
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }

  }

}
