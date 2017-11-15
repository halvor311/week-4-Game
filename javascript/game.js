var crystalNumbers = [];
var score = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

    var getNumber = Math.floor(Math.random() * 101 + 19);
    console.log(getNumber);
    $(".target").html("target: " + getNumber);
    //crystalNumbers = [Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 11 + 1)];
    for(var i = 0; i < 4; i++){
        crystalNumbers.push(Math.floor(Math.random() * 11+1));
        Math.floor(Math.random() * 11 + 1);
    }
    console.log(crystalNumbers);
    
    $(".crystal").each(function(i){
        $(this).attr("data-crystalValue", crystalNumbers[i]);
    });
    var reset = function(){
        score = 0;
        $(".score").html("score: " + score);
        getNumber = Math.floor(Math.random() * 100);
        $(".target").html("target: " + getNumber);
        
        
    };


    $(".crystal").on("click", function() {
        var value = parseInt(($(this).attr("data-crystalValue")));
       score = value + score;
       $(".score").html("score: " + score);
       console.log(score);
       if(score===getNumber){
       alert("You won!!!");
       wins++;
       console.log(wins);
       $("#wins").html(wins);
       reset();
    }
    else if (score>getNumber){
        alert("Add better next time");
        losses++
        $("#losses").html(losses);
        reset();
    }
    });
    
    
});