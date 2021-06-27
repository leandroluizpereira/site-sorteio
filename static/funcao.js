function sorteio(){
 
    var rand = Math.random()*6 ;

          if (rand <=1){
          
             document.getElementById("nome").innerHTML="Leandro foi sorteado";
             console.log("Leandro "+rand);
            
}
else if (rand <=2){
    document.getElementById("nome").innerHTML="João foi sorteado";
    console.log("João "+rand);
   }
   else if (rand <=3){
    document.getElementById("nome").innerHTML="Maria foi sorteado";
    console.log("Maria "+rand);
   }
   else if (rand <=4){
    document.getElementById("nome").innerHTML="Suellen foi sorteado";
    console.log("Suellen "+rand);
   }
   else if (rand <=5){
    document.getElementById("nome").innerHTML="Paulo foi sorteado";
    console.log("Paulo "+rand);
   }
   else if (rand <=6){
    document.getElementById("nome").innerHTML="Ciclano foi sorteado";
    console.log("Ciclano "+rand);
   }
   else {
    document.getElementById("nome").innerHTML="tente novamente !";
   }
   
}
 