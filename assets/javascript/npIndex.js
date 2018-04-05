// makeSearch() - makes the search URL for $.ajax() to access
/**
 * @returns {string}
 */
function makeSearch() {
    var searchURL = 'https://projects.propublica.org/nonprofits/api/v2/search.json';
    var userInput = $('#subject').val();
    // Space remover and quote adder for URL encoding
        userInput += '%22';
        userInput = '%22' + userInput;
        userInput = userInput.replace(/ /g, '%20');
    searchURL += '?q=' + userInput;
    localStorage.apiURL = searchURL;
};

$(document).ready(function() {
    // To enable CORS
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    $('#submit').on('click', function () {
        setTimeout(function() {
            window.location.href = 'results.html'; // // Changes page to results
        }, 10);
        makeSearch();
    });
})