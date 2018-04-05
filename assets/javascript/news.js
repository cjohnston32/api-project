jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
function results(searchTerm){
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
    var searchTerm = $("#subject").val().trim();
    var url = 'https://newsapi.org/v2/everything?' +
        'q='+ searchTerm +
        '&sortBy=popularity&' +
        'apiKey=cfc9bdcb776d44508150e3e07cf018ef';
    var req = new Request(url);

    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })
//console.logs promise pending ^
    var promise1 = new Promise(function(resolve, reject) {
        resolve();
    });
        promise1.then(function(Object) {
            console.log(promise1.value)
        })
//solves promise^
return promise1
});
