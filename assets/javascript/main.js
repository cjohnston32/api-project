// CORS

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});




/**
 * @returns {string}
 */


 // makeSearch() - makes the search URL for $.ajax() to access
function makeSearch() {
    // searchURL is an updated variable, starts with designated API URL
    var searchURL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=f1beccfd78c54aac88911644d09756eb';
    //var userInput = $('#searchTopic').val();

    // --- PARAMETERS for Pro Publica Nonprofit API Searches ---
        // More Information: https://projects.propublica.org/nonprofits/api
        // '?q=' : Keyword search string (name of nonprofit)
      //  searchURL += '?q=' + userInput;
    console.log(searchURL);
    return searchURL;
}

/**
 * @param {object} npAPI
 */

// newPage() - for new page
function newPage(npAPI) {
    console.log(npAPI.organizations);
};

// When user submits search
$(document).ready(function() {
    $('#submit').on('click', function(event) {
        event.preventDefault();
        var searchURL = makeSearch();
        $.ajax({
            url: searchURL,
            method: 'GET'
        }).then(newPage)
        .catch(function(err) {alert('error:' + err.message);})
    });
})