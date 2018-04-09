$(document).ready(function(){
    //Global Variables
    //Used object to access variables inside the functions
    testObject = {};
    var min = 60;
    var timer; 
    var timeLeft = 1500;
    var breakLeft = 300;
    working = false;
    //Sets the string
    var string = function(){
        var minute = Math.floor(timer/60);
        var second = Math.floor(timer%60);
        if (second < 10) {
           return str = minute + ":0" + second;
        }
        else {
           return str = minute + ":" + second;
        }
    }
    var defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60)+" mins";
    var defaultBreakString = "Break:<br>" + Math.floor(breakLeft/60)+ " mins";    
    $("#sessionText").html(defaultSessionString);
    $("#breakText").html(defaultBreakString);
    $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
    //Buttons
    $("#reset").attr("disabled", true);
    $("#start").click(function(){
        if (working === false){session();
        console.log("start");
        $('#start').attr("disabled", true);
        $("#reset").attr("disabled", false);
        $("#breakIncrease").attr("disabled", true);
        $("#breakDecrease").attr("disabled", true);
        $("#sessionIncrease").attr("disabled", true);
        $("#sessionDecrease").attr("disabled", true);
    }            
    });
    $("#reset").click(function(){
        if (working === true){reset();console.log("reset");
        $('#start').attr("disabled", false);
        $("#breakIncrease").attr("disabled", false);
        $("#breakDecrease").attr("disabled", false);
        $("#sessionIncrease").attr("disabled", false);
        $("#sessionDecrease").attr("disabled", false);
        $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
    }
    })
    $("#sessionIncrease").click(function(){
        timeLeft = timeLeft+60;
        let defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60) +" mins";
        $("#sessionText").html(defaultSessionString);   
        $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
        if(timeLeft > 1740){
            timeLeft = 1800;
            $("#sessionText").html("Session:<br>30 mins");
        }        
    });
    $("#sessionDecrease").click(function(){
        timeLeft = timeLeft-60;
        let defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60) +" mins";
        $("#sessionText").html(defaultSessionString);   
        $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
        if(timeLeft <120){
            timeLeft = 60;
            $("#sessionText").html("Session:<br>1 min");

        }        
    });
    $("#breakIncrease").click(function(){
        breakLeft = breakLeft+60;
        let defaultBreakString = "Break:<br>" + Math.floor(breakLeft/60) +" mins";
        $("#breakText").html(defaultBreakString);   
        if(breakLeft > 600){
            breakLeft = 600;
            $("#breakText").html("Break:<br>10 mins");
        }        
    });
    $("#breakDecrease").click(function(){
        breakLeft = breakLeft-60;
        let defaultBreakString = "Break:<br>" + Math.floor(breakLeft/60) +" mins";
        $("#breakText").html(defaultBreakString);   
        if(breakLeft < 120){
            breakLeft = 60;
            $("#breakText").html("Break:<br>1 min");
        }        
    });
    
    
    //Session timer function
    function session(){
        working = true;
        timer = timeLeft;
        testObject.sessionCountdown = setInterval(function(){
            console.log("session");
            timer--;
            $("#timerText").html(string);
            if (timer <= 0) {  
                console.log("session stop");
                clearInterval(testObject.sessionCountdown);
                $("#timerText").html("");
                mola();         
            }
        },1000)
    }
    //Break timer function
    function mola(){
        working = true;
        timer = breakLeft
        testObject.timeout = setInterval(function(){  
            timer--;          
            console.log(timer);  
            $("#timerText").html(string);
            if(timer <= 0) {
                console.log("mola stop");
                clearInterval(testObject.timeout);
                $("#timerText").html("");
                session();
            }
        },1000)
    }    
    //Reset function
    function reset(){
        working = false;
        let timeLeft = 1500;
        let breakLeft = 300;
        var defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60)+" mins";
        var defaultBreakString = "Break:<br>" + Math.floor(breakLeft/60)+ " mins";    
        clearInterval(testObject.sessionCountdown);
        clearInterval(testObject.timeout);
        $("#sessionText").html(defaultSessionString);
        $("#breakText").html(defaultBreakString);
    }
  })