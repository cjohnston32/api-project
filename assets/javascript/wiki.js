$(document).ready(function(){
    $("#results").hide();
});

$("#submit").on("click", function(){
    var searchTerm = $("#subject").val().trim();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"
    $("#results").show();
    

$.ajax({
    url: url,
    method: "GET", 
    async: false,
    datatype: "json",
    success: function (data, status, jqXHR){
        $("#searchDefinition").prepend("<li>" + data + "<a href=" + url + "</a> </li>");        
        console.log(data);
    }
  });
})
