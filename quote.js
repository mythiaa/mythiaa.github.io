$(document).ready(function() {
    $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(json) {
        var html2 = "" ;
        var quote2 = JSON.stringify(json[0].quote);
        var author2 = JSON.stringify(json[0].character);
        array2 = author2.split('');
        array12 = array2.pop();
        array22 = array2.shift();
        array32 = array2.join('');
        html2 += "<blockquote class='blockquote'>";
        html2 += "<p>";
        html2 += "<em>" +quote2+ "</em>" ;
        html2 += "</p>" ;
        html2 += "<footer class='blockquote-footer'>";
        html2 += "<cite title='Source Title'>" +array32+ "</cite>" ;
        html2 += "</footer>" ;
        html2 += "</blockquote>";
        $(".message").html(html2);

    } );
    

    $("#getMessage").on("click" , function() {
        $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes" , function(json) {
            var html = "" ;
            var quote = JSON.stringify(json[0].quote);
            var author = JSON.stringify(json[0].character);
            array = author.split('');
            array1 = array.pop();
            array2 = array.shift();
            array3 = array.join('');
            html += "<blockquote class='blockquote'>";
            html += "<p>";
            html += "<em>" +quote+ "</em>" ;
            html += "</p>" ;
            html += "<footer class='blockquote-footer'>";
            html += "<cite title='Source Title'>" +array3+ "</cite>" ;
            html += "</footer>" ;
            html += "</blockquote>";
            $(".message").html(html);
            
        });

    });

});
/*
https://thesimpsonsquoteapi.glitch.me/
*/