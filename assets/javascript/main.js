/**
 * @returns {string}
 */

// makeSearch() - makes the search URL for $.ajax() to access
function makeSearch() {
    // searchURL is an updated variable, starts with designated API URL
    var searchURL = 'https://projects.propublica.org/nonprofits/api/v2/search.json';
    var userInput = $('#searchTopic').val();

    // --- PARAMETERS for Pro Publica Nonprofit API Searches ---
        // More Information: https://projects.propublica.org/nonprofits/api#methods
        // '?q=' : Keyword search string (name of nonprofit)
        searchURL += '?q=' + userInput;
    console.log(searchURL);
    return searchURL;
}

/**
 * @param {object} npAPI
 */

// newPage() - updates the page
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
            method: 'GET',
            dataType: 'jsonp'
        }).then(newPage())
        .catch(function(err) {alert('error:' + err.message);})
    });
})