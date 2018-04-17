$(document).ready(function(){
    var player = [0];
    var array = ["","","","","","","","",""];
    var turns = 0;
    var status = false;
   
    $("#x").click(function(){
        alert("Selected X");
        player[0] = "x";
    })
    $("#o").click(function(){
        alert("Selected O");
        player[0] = "o";
        console.log(player);
    })
    
    $("#top-left").click(function(){             
        if(player[0] == "x" && array[0] == ""){
            $("#top-left").html("X");
            array[0]="x";
            turns = turns + 1;         
        }
        if(player[0] == "o"  && array[0] == ""){
            $("#top-left").html("O");
            array[0]="o";
            turns = turns + 1;         
        }
        if(player[0] == 0 && array[0] == ""){
            $("#top-left").html("X");
            array[0]="x";
            turns = turns + 1;         
        }
        
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#top-center").click(function(){
        if(player[0] == "x"  && array[1] == ""){
            $("#top-center").html("X");
            array[1]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[1] == ""){
            $("#top-center").html("O");
            array[1]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[1] == ""){
            $("#top-center").html("X");
            array[1]="x";
            turns = turns + 1;
        }
        
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#top-right").click(function(){
        
        if(player[0] == "x"  && array[2] == ""){
            $("#top-right").html("X");
            array[2]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[2] == ""){
            $("#top-right").html("O");
            array[2]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[2] == ""){
            $("#top-right").html("X");
            array[2]="x";
            turns = turns + 1;
        }
        
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#center-left").click(function(){
        
        if(player[0] == "x"  && array[3] == ""){
            $("#center-left").html("X");
            array[3]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[3] == ""){
            $("#center-left").html("O");
            array[3]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[3] == ""){
            $("#center-left").html("X");
            array[3]="x";
            turns = turns + 1;
        }
        $("#turns").html(turns);
        ai();
        result();
        
        
    })
    $("#center").click(function(){
        
        if(player[0] == "x"  && array[4] == ""){
            $("#center").html("X");
            array[4]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[4] == ""){
            $("#center").html("O");
            array[4]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[4] == ""){
            $("#center").html("X");
            array[4]="x";
            turns = turns + 1;
        }
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#center-right").click(function(){
        
        if(player[0] == "x"  && array[5] == ""){
            $("#center-right").html("X");
            array[5]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[5] == ""){
            $("#center-right").html("O");
            array[5]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[5] == ""){
            $("#center-right").html("X");
            array[5]="x";
            turns = turns + 1;
        }
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#bot-left").click(function(){
        
        if(player[0] == "x"  && array[6] == ""){
            $("#bot-left").html("X");
            array[6]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[6] == ""){
            $("#bot-left").html("O");
            array[6]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[6] == ""){
            $("#bot-left").html("X");
            array[6]="x";
            turns = turns + 1;
        }
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#bot-center").click(function(){
        if(player[0] == "x"  && array[7] == ""){
            $("#bot-center").html("X");
            array[7]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[7] == ""){
            $("#bot-center").html("O");
            array[7]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[7] == ""){
            $("#bot-center").html("X");
            array[7]="x";
            turns = turns + 1;
        }
        $("#turns").html(turns);
        ai();
        result();
        
    })
    $("#bot-right").click(function(){
        if(player[0] == "x"  && array[8] == ""){
            $("#bot-right").html("X");
            array[8]="x";
            turns = turns + 1;
        }
        if(player[0] == "o"  && array[8] == ""){
            $("#bot-right").html("O");
            array[8]="o";
            turns = turns + 1;
        }
        if(player[0] == 0  && array[8] == ""){
            $("#bot-right").html("X");
            array[8]="x";
            turns = turns + 1;
        }
        $("#turns").html(turns);
        ai();
        result();
        
    })
    function result(){
        if (array[0] == "x" && array[1] == "x" && array[2] == "x"){
            alert("X won!");            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[3] == "x" && array[4] == "x" && array[5] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[6] == "x" && array[7] == "x" && array[8] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[0] == "x" && array[3] == "x" && array[6] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[1] == "x" && array[4] == "x" && array[7] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[2] == "x" && array[5] == "x" && array[8] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[0] == "x" && array[4] == "x" && array[8] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[2] == "x" && array[4] == "x" && array[6] == "x"){
            alert("X won!");
            
            reset();
            pscore = pscore + 1;
            $("#pscore").html(pScore);
        }
        if (array[0] == "o" && array[1] == "o" && array[2] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[3] == "o" && array[4] == "o" && array[5] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[6] == "o" && array[7] == "o" && array[8] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[0] == "o" && array[3] == "o" && array[6] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[1] == "o" && array[4] == "o" && array[7] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[2] == "o" && array[5] == "o" && array[8] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[0] == "o" && array[4] == "o" && array[8] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        if (array[2] == "o" && array[4] == "o" && array[6] == "o"){
            alert("O won!");
            
            reset();
            ascore = ascore + 1;
            $("#ascore").html(aScore);
        }
        else if (array[0] != "" && array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "" && array[8] != "") {
            alert("TIE");
            
            reset();
            tscore = tscore + 1;
            $("#tscore").html(tScore);
        }
    }
    
    function ai() {
        if(player[0] == "x" || player[0] == 0) {
            if (array[4] == "") {
                array[4] = "o";
                $("#center").html("O");
            }
            else if (array[2] == "") {
                array[2] = "o";
                $("#top-right").html("O")
            }
            else if (array[1] == "") {
                array[1] = "o";
                $("#top-center").html("O")
            }
            
            else if (array[3] == "") {
                array[3] = "o";
                $("#center-left").html("O")
            }
            else if (array[0] == "") {
                array[0] = "o";
                $("#top-left").html("O")
            }
            else if (array[5] == "") {
                array[5] = "o";
                $("#center-right").html("O")
            }
            else if (array[6] == "") {
                array[6] = "o";
                $("#bot-left").html("O")
            }
            else if (array[7] == "") {
                array[7] = "o";
                $("#bot-center").html("O")
            }
            else if (array[1] == "") {
                array[8] = "o";
                $("#bot-right").html("O")
            }
        }
        if(player[0] == "o") {
            if (array[0] == "") {
                array[0] = "x";
                $("#top-left").html("X")
            }
            else if (array[1] == "") {
                array[1] = "x";
                $("#top-center").html("X")
            }
            else if (array[2] == "") {
                array[2] = "x";
                $("#top-right").html("X")
            }
            else if (array[3] == "") {
                array[3] = "x";
                $("#center-left").html("X")
            }
            else if (array[4] == "") {
                array[4] = "x";
                $("#center").html("X")
            }
            else if (array[5] == "") {
                array[5] = "x";
                $("#center-right").html("X")
            }
            else if (array[6] == "") {
                array[6] = "x";
                $("#bot-left").html("X")
            }
            else if (array[7] == "") {
                array[7] = "x";
                $("#bot-center").html("X")
            }
            else if (array[1] == "") {
                array[8] = "x";
                $("#bot-right").html("X")
            }
        }
    }
    function reset() {
            player = [0];
            array = ["","","","","","","","",""];
            turns = 0;
            status = false;
            $("#top-left").html("");
            $("#top-center").html("");
            $("#top-right").html("");
            $("#center-left").html("");
            $("#center").html("");
            $("#center-right").html("");
            $("#bot-left").html("");
            $("#bot-center").html("");
            $("#bot-right").html("");
    }
    
    
})

/*
    function ai(){
        //Check who plays first, if user selected X; user plays first.
        if (player[0] =="x"){            
            //If user didnt play in the center square in first turn
            if (array[4] != "x") {
                //AI plays in the center square as first move.
                if (turns == 1) {
                    array[4] = "o";
                    $("#center").html("O");
                    turns = 2;
                }
                //Check if there's a filled diagonal.
                //Checking diagonal from top left to bot right.
                if (array[0] == "x" && array[4] =="o" && array[8] =="x") {
                    //AI plays an edge square if there's a filled diagonal. In this case it plays top center square.
                    if (turns == 3) {
                        array[1] = "o";
                        $("#top-center").html("O");
                        turns = 4;
                    }
                    //If user doesn't block 2 O's, AI wins the game.
                    if (turns == 5 && array[7] == "") {
                        array[7] = "o";
                        $("#bot-center").html("O");
                        turns = 6;                       
                    }
                    //If user blocks the 2 O's, AI needs to block this time.
                    if (turns == 5 && array[7] == "x") {
                        array[6] = "o";
                        $("#bot-left").html("O");
                        turns = 6;
                    }                    
                    if (turns == 7 && array[2] == "") {
                        array[2] = "o";
                        $("#top-right").html("O");
                        turns = 8;
                    }                    
                    if (turns == 7 && array[2] == "x") {
                        array[5] = "o";
                        $("#center-right").html("O");
                        turns = 8;
                    }
                }
                //Checking diagonal from top right to bot left.
                if (array[2] =="x" && array[4] =="o" && array[6] == "x") {
                    //AI plays an edge square if there's a filled diagonal. In this case it plays top center square.
                    if (turns == 3) {
                        array[1] = "o";
                        $("#top-center").html("O");
                        turns = 4;
                    }
                    //If user doesn't block 2 O's, AI wins the game.
                    if (turns == 5 && array[7] == "") {
                        array[7] = "o";
                        $("#bot-center").html("O");
                        turns = 6;                       
                    }
                    //If user blocks the 2 O's, AI needs to block this time.
                    if (turns == 5 && array[7] == "x") {
                        array[8] = "o";
                        $("#bot-right").html("O");
                        turns = 6;
                    }
                    if (turns == 7 && array[0] == "") {
                        array[0] = "o";
                        $("#top-left").html("O");
                        turns = 8;
                    }                    
                    if (turns == 7 && array[0] == "x") {
                        array[3] = "o";
                        $("#center-left").html("O");
                        turns = 8;
                    }
                }
                //If there's not a filled diagonal
    
    //NOT COMPLETE
    //
    //
    //
    //
            }
            //If user played in the center square in first turn
            if (array[4] == "x") {
                //AI plays in a corner square.In this case AI plays top left square as first move.
                if (turns ==1) {
                    array[0] = "o";
                    $("#top-left").html("O");
                    turns = 2;
                }
            //If user plays the opposite corner, AI plays another corner. In this case AI plays top right square.
                if (turns == 3 && array[8] == "x" && array[0] == "o") {
                    array[2] = "o";
                    $("#top-right").html("O");
                    turns = 4;
                }
                //If user doesn't block, AI wins the game.
                if (turns == 5 && array[8] == "x" && array[0] == "o" && array[2] =="o" && array[1] == "") {
                    array[1] = "o";
                    $("#top-center").html("O");
                    turns = 6;
                }
                //If user blocks the win situation, AI blocks.
                if (turns == 5 && array[8] == "x" && array[0] == "o" && array[2] =="o" && array[1] == "x") {
                    array[7] = "o";
                    $("#bot-center").html("O");
                    turns = 6;
                }
                if (turns == 7 && array[8] == "x" && array[0] == "o" && array[2] =="o" && array[1] == "x" && array[7] == "o" && array[3] == "x" ) {
                    array[5] = "o";
                    $("#center-right").html("O");
                    turns = 8;
                }
                if (turns == 7 && array[8] == "x" && array[0] == "o" && array[2] =="o" && array[1] == "x" && array[7] == "o" && array[5] == "x" ) {
                    array[3] = "o";
                    $("#center-left").html("O");
                    turns = 8;
                }
                if (turns == 7 && array[8] == "x" && array[0] == "o" && array[2] =="o" && array[1] == "x" && array[7] == "o" && array[6] == "x" ) {
                    array[3] = "o";
                    $("#center-left").html("O");
                    turns = 8;
                }
            //If user doesn't play the opposite corner.
                if (turns == 3 && array[8] == "") {
                    if (array[1] == "x") {
                        array[7] = "o";
                        $("#bot-center").html("O");
                        turns = 4;
                    }                    
                    if (array[2] == "x") {
                        array[6] = "o";
                        $("#bot-left").html("O");
                        turns = 4;
                    }
                    if (array[3] == "x") {
                        array[5] = "o";
                        $("#center-right").html("O");
                        turns = 4;
                    }
                    if (array[5] == "x") {
                        array[3] = "o";
                        $("#center-left").html("O");
                        turns = 4;
                    }
                    if (array[6] == "x") {
                        array[2] = "o";
                        $("#top-right").html("O");
                        turns = 4;
                    }
                    if (array[7] == "x") {
                        array[1] = "o";
                        $("#top-center").html("O");
                        turns = 4;
                    }
                }
                if (turns == 5) {

                }
            }

        }
    } 
    */    