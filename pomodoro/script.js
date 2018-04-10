$(document).ready(function(){
    //Global Variables
    //Used object to access variables inside the functions
    testObject = {};
    var min = 60;
    var timer; 
    var timeLeft = 1500;
    var breakLeft = 300;
    working = false;
    //Sets the timer string
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
    //Strings for session and break lengths
    var defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60)+" mins";
    var defaultBreakString = "Break:<br>" + Math.floor(breakLeft/60)+ " mins";
    $("#sessionText").html(defaultSessionString);
    $("#breakText").html(defaultBreakString);
    $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
    //Buttons
    $("#reset").attr("disabled", true);
    $("#start").click(function(){
        if (working === false){
            session();
            $('#start').attr("disabled", true);
            $("#reset").attr("disabled", false);
            $("#breakIncrease").attr("disabled", true);
            $("#breakDecrease").attr("disabled", true);
            $("#sessionIncrease").attr("disabled", true);
            $("#sessionDecrease").attr("disabled", true);
        }
    });
    $("#reset").click(function(){
        if (working === true){reset();}
    })
    $("#sessionIncrease").click(function(){
        timeLeft = timeLeft+60;
        let defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60) +" mins";
        $("#sessionText").html(defaultSessionString);   
        $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
        if(timeLeft > 1740){
            timeLeft = 1800;
            $("#sessionText").html("Session:<br>30 mins");
            $("#timerText").html("30:00");
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
            $("#timerText").html("1:00");
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
            timer--;
            $("#timerText").html(string);
            if (timer <= 0) {
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
            $("#timerText").html(string);
            if(timer <= 0) {
                clearInterval(testObject.timeout);
                $("#timerText").html("");
                session();
            }
        },1000)
    }
    //Reset function
    function reset(){
        $('#start').attr("disabled", false);
        $("#breakIncrease").attr("disabled", false);
        $("#breakDecrease").attr("disabled", false);
        $("#sessionIncrease").attr("disabled", false);
        $("#sessionDecrease").attr("disabled", false);
        working = false;
        timeLeft = 1500;
        breakLeft = 300;
        defaultSessionString = "Session:<br>" + Math.floor(timeLeft/60)+" mins";
        defaultBreakString = "Break:<br>" + Math.floor(breakLeft/60)+ " mins";
        clearInterval(testObject.sessionCountdown);
        clearInterval(testObject.timeout);
        $("#sessionText").html(defaultSessionString);
        $("#breakText").html(defaultBreakString);
        $("#timerText").html(Math.floor(timeLeft/60)+":0"+Math.floor(timeLeft%60));
    }
})