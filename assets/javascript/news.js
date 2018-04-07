var item;

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

function results(){
    $("#results").show();
    console.log(status);
   };
$(document).ready(function(){
    $("#results").hide();
});
/**
 * @param {object} newsAPI
 */

function newPage(newsAPI) {
    console.log(newsAPI);
    var newsDesc = newsAPI.source[0];
    console.log(newsDesc);
    document.getElementById('articleList').innerHTML = newsDesc;
};
$("#submit").on("click", function(){
        event.preventDefault();
    document.getElementById('articleInput').innerHTML = '';
    results();

    var searchTerm = $("#subject").val().trim();
    var url = 'https://newsapi.org/v2/everything?' +
        'q='+ searchTerm +
        '&sortBy=popularity&' +
        'apiKey=cfc9bdcb776d44508150e3e07cf018ef';
    var req = new Request(url);

    fetch(req)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonRes){
            console.log(jsonRes.articles)
            jsonRes.articles.forEach(element => {
                var url=element.url;
                function makeAllURLsWork(){(url.replace('/', ''))};
                $('#articleInput').show().append(("<tr><td><a href="+element.url+">"+element.title + "</td></tr><br>"));
            });
            
        })

})
