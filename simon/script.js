$(document).ready(function(){
    //variables
    let level = 0;
    let test = -1;
    let userInput,gameSequence,compare = [];
    let strict = false;

    //audio
    const redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    const yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    const blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    const greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");    

    //Default Text on Screen
    $("#screenText").html("00");

    //Outer Buttons
    $("#green").click(function(){
        userInput.push(1);
        console.log("userInput:",userInput);
        greenSound.play();
        compareFunc();
        game();
    })
    $("#red").click(function(){
        userInput.push(2);
        console.log("userInput:",userInput);
        redSound.play();
        compareFunc();
        game();
    })
    $("#yellow").click(function(){
        userInput.push(3);
        console.log("userInput:",userInput);
        yellowSound.play();
        compareFunc();
        game();
    })
    $("#blue").click(function(){        
        userInput.push(4);
        console.log("userInput:",userInput);
        blueSound.play();
        compareFunc();
        game();
    })

    //start button
    $("#start").click(function(){
        start();
    })
    function start() {
        reset();
        console.log("Start");
        level = 1;
        getRandomNumber();
        getGameSequenceArray();
        screenFunc();
    }

    //Strict Button
    $("#strict").click(function(){
        if (strict === false) {
            strict = true;
            alert("Strict Mode On!");
        }
        else if (strict === true) {
            strict = false;
            alert("Strict Mode Off!");
        }
    })
    
    
    //Random Number Generator + Button Animation
    function getRandomNumber() {
        let random = Math.floor(Math.random()*4+1);        
        gameSequence.push(random);        
        console.log("gameSequence:",gameSequence);
    }
    
    //Game Sequence Array Maker
    function getGameSequenceArray() {
        let time = setInterval(function(){
            test++;
            if (gameSequence[test] === 1) {
                $("#green").removeClass("animated jello");
                setTimeout(function(){
                    $("#green").addClass("animated jello");
                },1);
                greenSound.play();        
            }
            if (gameSequence[test] === 2) {
                $("#red").removeClass("animated jello");
                setTimeout(function(){
                    $("#red").addClass("animated jello");
                },1);
                redSound.play();
            }
            if (gameSequence[test] === 3) {
                $("#yellow").removeClass("animated jello");
                setTimeout(function(){
                    $("#yellow").addClass("animated jello");
                },1);
                yellowSound.play();   
            }
            if (gameSequence[test] === 4) {
                $("#blue").removeClass("animated jello");
                setTimeout(function(){
                    $("#blue").addClass("animated jello");
                },1);
                blueSound.play();          
            }
            if (test === level) {
                clearInterval(time);
            }
        },1000);
    }

    //Compare Function    
    function compareFunc() {
        if (gameSequence.length == level) {            
            for (let i = 0 ; i < userInput.length ; i++) {                
                if (gameSequence[i] != userInput[i]){
                    compare.push(gameSequence[i]);
                    console.log("compare",compare);
                }
            }
        }        
    }

    //Main Game
    function game() {
        if (level < 20 && userInput.length == level && compare.length == 0) {
            setTimeout(function(){
                level++;
                test = -1;
                userInput = [];
                screenFunc();
                getRandomNumber();
                getGameSequenceArray();
            },1000);
        }
        if (level == 20 && userInput.length == level && compare.length == 0) {
            alert("GZ, You WON!");
            start();
        }
        if (compare.length > 0 && strict === false) {
            console.log("FAILED");
            $("#screenText").html("!!");
            setTimeout(function(){
                test = -1;
                userInput = [];
                compare = [];
                screenFunc();
                getGameSequenceArray();
            },1000);
        }
        if (compare.length > 0 && strict === true) {
            console.log("FAILED");
            $("#screenText").html("!!");
            setTimeout(function(){
                start();
            },1000);
        }
        
    }

    //Screen
    function screenFunc() {
        $("#screenText").html("0"+level);
    }

    //Reset
    function reset() {
        level = 0;
        test = -1; 
        userInput = [];
        gameSequence = [];
        compare = [];                
    }
    
})