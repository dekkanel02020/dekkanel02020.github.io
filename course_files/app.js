

var userPick;
var cpuPick;


/*
 OGGETTI CON ATTRIBUTI
*/
var score = {
  userScore : 0,
  cpuScore : 0
}

/* Creazione di un oggetto con le propieta*/
var allOption = [
  {
    name:"sasso",
    image :"assets/sasso.png"
  },
  {
    name:"carta",
    image :"assets/carta.png"
  },
  {
    name:"forbice",
    image :"assets/forbice.png"
  }
]




var possibleUserPicks = document.getElementsByClassName("user-choice");

for (var i = 0; i < possibleUserPicks.length; i++) {

  possibleUserPicks[i].addEventListener("click",function (){

   userPick = this.dataset.name;
   GeneratePick();

   var cpuPickImage = "<img src='" + cpuPick.image + "'/>";
   var cpuPickText = "<h3>" + cpuPick.name + "</h3>";
   document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
   document.getElementById("result").innerHTML = ResolveProblem();
   document.getElementById("player-score").innerHTML = score.userScore;
   document.getElementById("cpu-score").innerHTML = score.cpuScore;



 })/*innerHTML = ENTRARE DENTRO AL DOCUMENTO*/

}


document.getElementById("button").addEventListener("click",function(){
  score.userScore = 0;
  score.cpuScore  = 0;
  document.getElementById("player-score").innerHTML = score.userScore;
  document.getElementById("cpu-score").innerHTML = score.cpuScore;
})


function GeneratePick(){
  cpuPick = allOption[Math.floor(Math.random() * allOption.length)];
}


function ResolveProblem(){
  if (userPick == cpuPick.name) {
   return "Hai Pareggiato";   /* usando return il codice non va avanti*/
 } else {
   if (userPick == "sasso") {
     if (cpuPick.name == "forbice") {

       score.userScore ++;
       return "Hai vinto!";
     }
     else {

      score.cpuScore ++;
        return "Hai perso!";
     }

   }
   if (userPick == "forbice") {
     if (cpuPick.name == "sasso") {

       score.cpuScore ++;
        return "Hai perso!";
     }
     else {
            score.userScore ++;
       return "Hai vinto!";

     }

   }
   if (userPick == "carta") {
     if (cpuPick.name == "forbice") {
         score.cpuScore ++;
        return "Hai perso!";

     }
     else {

      score.userScore ++;
      return "Hai vinto!";
     }

   }

 }

}
