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
    var searchURL = 'https://projects.propublica.org/nonprofits/api/v2/search.json';
    var userInput = $('#searchTopic').val();
    // Space remover and quote adder for URL encoder
        userInput += '%22';
        userInput = '%22' + userInput;
        userInput = userInput.replace(/ /g, '%20');
    searchURL += '?q=' + userInput;
    console.log(searchURL);
    return searchURL;
}

/**
 * @param {object} npAPI
 */

// newPage() - for new page
function newPage(npAPI) {
    console.log(npAPI.total_results);
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