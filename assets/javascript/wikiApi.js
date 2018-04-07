var wikiMsg;
// wikiSearch() - makes the search URL for wiki summary API call
/**
 * @returns {string}
 */
function wikiSearch() {
    var searchURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=';
    var userInput = $('#subject').val().trim();
    userInput = userInput.replace(/ /g,'%20');
    searchURL += '&titles=' + userInput;
    return searchURL;
};

/**
 * @param {object} wikiData
 */
function wikiHandler (wikiData) {
    var page = wikiData.query.pages;
    var pageID = Object.getOwnPropertyNames(page);
    pageID = pageID[0];
    var summary = page[pageID].extract;
    document.getElementById('summary').innerHTML = summary;

}

$('#submit').on('click', function() {
    $(document).ready(function() {
        // To enable CORS
        jQuery.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });

          
        var hashURL = wikiSearch();
        $.ajax({
            url: hashURL,
            method: 'GET'
        }).then(wikiHandler)
    })
})