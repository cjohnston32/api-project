//unlinked from inde.html while working on news.js

function results(searchTerm){
    $("#results").show();
    console.log();
   }
$(document).ready(function(){
    $("#results").hide();

$("#subject").on("click", function(){
    var searchTerm = $("#subject").val().trim();
    var url = "https://en.wikipedia.org/w/api.php?action=query&titles=" + searchTerm + "&prop=info&format=json&callback=?"
    /**
    * @param {object} searchTerm
    */

$.ajax({
    url: url,
    method: "GET",
    async: false,
    datatype: "json",
    success:function(data, status, jqXHR){
        console.log(data);      

    }
}).then (results);
  });
});