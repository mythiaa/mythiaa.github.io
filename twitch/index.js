    $(document).ready(function(){
        var streamerList = ["cohhcarnage" , "lirik" , "savjz" , "arteezy" , "dansgaming" , "towelliee" , "jahrein" , "ninja" , "slootbag"] ;
        var username = "cohhcarnage" ;      
        var url = "https://wind-bow.glitch.me/twitch-api/streams/" +username+ "?callback=?" ;
        var url1 = "https://wind-bow.glitch.me/twitch-api/streams/cohhcarnage?callback=?" ;
        var url2 = "https://wind-bow.glitch.me/twitch-api/streams/lirik?callback=?" ;
        var url3 = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?" ;
        var url4 = "https://wind-bow.glitch.me/twitch-api/streams/arteezy?callback=?" ;
        var url5 = "https://wind-bow.glitch.me/twitch-api/streams/dansgaming?callback=?" ;
        var url6 = "https://wind-bow.glitch.me/twitch-api/streams/towelliee?callback=?" ;
        var url7 = "https://wind-bow.glitch.me/twitch-api/streams/jahrein?callback=?" ;
        var url8 = "https://wind-bow.glitch.me/twitch-api/streams/ninja?callback=?" ;
        var url9 = "https://wind-bow.glitch.me/twitch-api/streams/slootbag?callback=?" ;
        
        $.getJSON(url1 , function(json){
            if (json.stream === null ) {
                var cohhOffline = " <a href = 'https://www.twitch.tv/cohhcarnage' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>CohhCarnage</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#1").html(cohhOffline);

            }
            else {
                var cohh = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
                $("#1").html(cohh);
        }
        });
        $.getJSON(url2 , function(json) {
            if (json.stream === null) {
                var lirikOffline = " <a href = 'https://www.twitch.tv/lirik' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Lirik</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#2").html(lirikOffline);
            }
            else{

            var lirik = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "' id = 'pic1'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#2").html(lirik);
            }
        });
        $.getJSON(url3 , function(json){
            if (json.stream === null) {
                var fccOffline = " <a href = 'https://www.twitch.tv/freecodecamp' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>FreeCodeCamp</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#3").html(fccOffline);
            }
            else{
        
            var fcc = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#3").html(fcc);
            }
        });
        $.getJSON(url4 , function(json){
            if (json.stream === null) {
                var arteezyOffline = " <a href = 'https://www.twitch.tv/arteezy' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Arteezy</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#4").html(arteezyOffline);
            }
            else {
        
            var arteezy = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#4").html(arteezy);
            }
        });
        $.getJSON(url5 , function(json){
            if (json.stream === null) {
                var dansOffline = " <a href = 'https://www.twitch.tv/dansgaming' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Dansgaming</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#5").html(dansOffline);
            }
            else {
        
            var dansgaming = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#5").html(dansgaming);
            }
        });
        $.getJSON(url6 , function(json){
            if (json.stream === null) {
                var towellieeOffline = " <a href = 'https://www.twitch.tv/towelliee' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Towelliee</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#6").html(towellieeOffline);
            }
            else {
        
            var towelliee = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#6").html(towelliee);
            }
        });
        $.getJSON(url7 , function(json){
            if (json.stream === null) {
                var jahreinOffline = " <a href = 'https://www.twitch.tv/jahrein' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Jahrein</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#7").html(jahreinOffline);
            }
            else {
        
            var jahrein = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#7").html(jahrein);
            }
        });
        $.getJSON(url8 , function(json){           
            if (json.stream === null) {
                var ninjaOffline = " <a href = 'https://www.twitch.tv/ninja' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Ninja</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#8").html(ninjaOffline);
                console.log(ninjaOffline);
            }
            else {
                var ninja = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>" ;
                $("#8").html(ninja);
            }
                 
            
              
            
            
        });
        $.getJSON(url9 , function(json){
            if (json.stream === null) {
                var slootbagOffline = " <a href = 'https://www.twitch.tv/slootbag' target ='_blank'><li> <img src = 'https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png'> <br> <div id= 'streamerName'> <p class= 'text-center'>Slootbag</p></div> <div id='viewerCount'><p class='text-center'>Offline</p></div></li></a>" ;
                $("#9").html(slootbagOffline);
            }
            else {
        
            var slootbag = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
            $("#9").html(slootbag);
            }
        });

            
            
            
            console.log(username);

        
    

       
   
    })

/*
https://api.twitch.tv/kraken/ streams/freecodecamp?callback=?
[cohh , lirik , savjz , arteezy ,  jahrein , dansgame ]
json.stream.channel.display_name
json.stream = null >>>>> offline
json.stream.game = game
json.stream.viewers
json.stream.stream_type = "live"
json.stream.preview.small
json.stream.preview.medium
json.stream.preview.large
json.stream.channel.status = stream title
json.stream.channel.url
json.stream.channel.logo


$(document).ready(function(){
    var streamerList = ["cohhcarnage" , "lirik" , "savjz" , "arteezy" , "dansgaming" , "towelliee" , "jahrein" , "ninja" , "slootbag"] ;
    var username = streamerList[i] ;
    var url = "https://wind-bow.glitch.me/twitch-api/streams/" +username+ "?callback=?" ;
    
    $.getJSON(url , function(json){
        var cohh = " <a href = '" + json.stream.channel.url + "' target ='_blank'><li> <img src = '" +json.stream.preview.medium+ "'> <br> <div id= 'streamerName'> <p class= 'text-center'>" +json.stream.channel.display_name+ "</p></div> <div id='streamTitle'> <p class = 'text-center'>" +json.stream.channel.status+ "</p></div> <div id='viewerCount'><p class='text-center'>" +json.stream.viewers+ " people watching.</p></div></li></a>"  
        $("#1").html(cohh);
        
        
        
        
        $("#2").html(lirik);
        $("#3").html(savjz);
        $("#4").html(arteezy);
        $("#5").html(dansgaming);
        $("#6").html(towelliee);
        $("#7").html(jahrein);
        $("#8").html(ninja);
        $("#9").html(slootbag);
        
        console.log(cohh)

    })
    

       
   
})


*/