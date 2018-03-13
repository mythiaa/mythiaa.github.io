$(document).ready(function(){
    $("#search").click(function(){
        var searchTerm = $("#searchTerm").val() ;
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +  "&limit=5&format=json&callback=?" ;
        $.getJSON(url , function(json){
            $("#result").html("");
            for (var i = json[1].length - 1 ; -1 < i ; i--) {
                $("#result").prepend("<a href='" +json[3][i]+ "' target = '_blank'><li><div id='resultTitle'><strong>" +json[1][i]+ "</strong></div><br><div id='resultDesc'>" +json[2][i]+"</div></li></a>");
            }   
        })        
    })
    $("#searchTerm").keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }
    });
    $("#random").click(function(){
        var url2 = "https://en.wikipedia.org/wiki/Special:Random" ;
        window.location = url2;
    })
})

/*

( [ searchTerm , [searchRes1 , searchRes2 , searchRes3 , searchRes4 , searchRes5 ], [desc1 , desc2 , desc3 , desc4 , desc5] , [link1 , link2 , link3 , link4 , link5 ] ])
json[0] = searchTerm
json[1][#] = searchRes#
json[2][#] = desc#
json[3][#] = link#

*/
