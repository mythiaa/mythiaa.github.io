$(document).ready(function(){
    memory = [];
    array = [];
    sum = 0;
    string = "";
    testString = array.toString;
    $("#textBox").html("0");
    $("#one").click(function(one){
        memory.push(1);
        array.push(1);
        $("#textBox").html(memory.join(""));
    })
    $("#two").click(function(two){
        memory.push(2);
        array.push(2);
        $("#textBox").html(memory.join(""));
    })
    $("#three").click(function(three){
        memory.push(3);
        array.push(3);
        $("#textBox").html(memory.join(""));
    })
    $("#four").click(function(four){
        memory.push(4);
        array.push(4);
        $("#textBox").html(memory.join(""));
    })
    $("#five").click(function(five){
        memory.push(5);
        array.push(5);
        $("#textBox").html(memory.join(""));
        
    })
    $("#six").click(function(six){
        memory.push(6);
        array.push(6);
        $("#textBox").html(memory.join(""));
    })
    $("#seven").click(function(seven){
        memory.push(7);
        array.push(7);
        $("#textBox").html(memory.join(""));
    })
    $("#eight").click(function(eight){
        memory.push(8);
        array.push(8);
        $("#textBox").html(memory.join(""));
    })
    $("#nine").click(function(nine){
        memory.push(9);
        array.push(9);
        $("#textBox").html(memory.join(""));
    })
    $("#backspace").click(function(backspace){
        if(memory.length > 0 && array.length > 0){
            memory.pop();
            array.pop();
            $("#textBox").html(memory.join(""));
        }
        if(memory.length === 0 && array.length === 0){
            $("#textBox").html("0");
        }
    })
    
    $("#c").click(function(){
        array = [];
        memory = [];
        str = "";
        string = "";
        $("#textBox").html("0");
    })
    
    $("#divide").click(function(){
        array.push("/");
        memory.push("/");
        $("#textBox").html(memory.join(""));
    })
    $("#multiply").click(function(){
        memory.push("*");
        array.push("*");
        $("#textBox").html(memory.join(""));
    })
    $("#minus").click(function(){
        memory.push("-");
        array.push("-");
        $("#textBox").html(memory.join(""));
    })
    $("#plus").click(function(){
        memory.push("+");
        array.push("+");
        $("#textBox").html(memory.join(""));
    });
    $("#period").click(function(){
        memory.push(".");
        array.push(".");
        $("#textBox").html(memory.join(""));
    })
    $("#zero").click(function(){
        memory.push(0);
        array.push(0);
        $("#textBox").html(memory.join(""));
    })
    $("#equal").click(function(){
        if (array.length === 0){
            $("#textBox").html("0");
        }
        else{
            str = array.join("");
            array = [];
            string += str;
            $("#textBox").html(Math.round(eval(string)*100)/100);
            string = Math.round(eval(string)*100)/100;
        }
    })
    document.onkeyup = function(e) {
        if (e.which == 97 || e.which == 49) {
          $("#one").click();
        }
        if (e.which == 98 || e.which ==50) {
            $("#two").click();
        }
        if (e.which == 99 || e.which == 51) {
            $("#three").click();
        }
        if (e.which == 100 || e.which == 52) {
            $("#four").click();
        }
        if (e.which == 101 || e.which == 53) {
            $("#five").click();
        }
        if (e.which == 102 || e.which == 54) {
            $("#six").click();
        }
        if (e.which == 103 || e.which == 55) {
            $("#seven").click();
        }
        if (e.which == 104 || e.which == 56) {
            $("#eight").click();
        }
        if (e.which == 105 || e.which == 57) {
            $("#nine").click();
        }
        if (e.which == 111) {
            $("#divide").click();
        }
        if (e.which == 106) {
            $("#multiply").click();
        }
        if (e.which == 109) {
            $("#minus").click();
        }
        if (e.which == 107) {
            $("#plus").click();
        }
        if (e.which == 13) {
            $("#equal").click();
        }
        if (e.which == 110) {
            $("#period").click();
        }
        if (e.which == 96 || e.which == 48) {
            $("#zero").click();
        }
      };
      
    console.log(memory);
})