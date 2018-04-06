

// --- Global variables ---
var index = 0;
var orgArray;
var apiURL;
var hashArray;

// makeNpSearch() - makes the search URL for np API call on npResult.js
/**
 * @returns {string}
 */
function makeNpSearch() {
    var searchURL = 'https://projects.propublica.org/nonprofits/api/v2/search.json';
    // Space remover and '+' additions for URL encoding required by nonprofit API
    userInput = localStorage.userInputData ; // With added similar keywords/hashtags
    searchURL += '?q=' + userInput;
    apiURL = searchURL;
};

// makeHashtagSearch() - Creates URL for accessing RiteKit API
/**
 * @returns {string}
 */
function makeHashtagSearch() { // Creates URL for accessing RiteKit API
    var apiURL = 'https://api.ritekit.com/v1/stats/hashtag-suggestions/';
    var clientId = '?client_id=6b3e9139f544560039e01f0a4b40b8ebd9b5107ad0b1';
    var userInput = $('#subject').val().trim();
    localStorage.userInputData = userInput;
    userInput = userInput.replace(/ /g,'');
    apiURL += userInput += clientId;
    console.log(apiURL);
    return apiURL;
};

// hashtagHandler - Accesses RiteKit API data for similar hashtags
/** 
 * @param {object} hashAPI
 */
function hashtagHandler (hashAPI) {
    hashArray = hashAPI.data;
    for (var x=0; x<hashArray.length-1; x++) {
        var hashtagName = hashArray[x].hashtag;
    }
};

// updatePage - Updates list of 10 nonprofits
function updatePage() {
    var elementNum = 0; // 0-9
    for (index; index<=index+9; index++) {
        // --- Indexing Updates ---
        elementNum = elementNum.toString();
        var npDiv = 'np' + elementNum; // ID of div for a single non-profit. Range: np0-np9
        elementNum = parseInt(elementNum) + 1; // Updates elementNum for next iteration

        // --- Grabbing API Data ---
        orgName = orgArray[index].name;

        // --- Assigning HTML Elements to Variables ---
        var npMainEle = document.getElementById(npDiv);
        
        // --- Changing HTML --- 
        npMainEle.innerHTML = orgName;
    }
};

// npHandler() - handles API data
/**
 * @param {object} npAPI
 */
function npHandler(npAPI) {
    orgArray = npAPI.organizations;
    updatePage();
};

$(document).ready(function() {
    // To enable CORS
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = '' + options.url;
        }
    });
    // To run AJAX calls
    $('#submit').on('click', function () {
        var hashURL = makeHashtagSearch();
        console.log(hashURL);
        $.ajax({
            url: hashURL,
            method: 'GET'
        }).then(hashtagHandler)
        console.log(hashArray);
        
        /**setTimeout(function() {
            var searchURL = apiURL;
            $.ajax({
                url: searchURL,
                method: 'GET'
            }).then(npHandler)
            .catch(function(err) {alert('error:' + err.message);})
            console.log(apiURL);
        }, 100000);**/
    });
    // When user presses next page button
    $('#nextNp').on('click', function(event) {
        index += 10;
        updatePage();
    });

    // When user presses previous page button
    $('#prevNp').on('click', function(event) {
        if (index === 0) {
            // Cannot go before first page error
        }
        else {
            index -= 10;
            updatePage();
        }  
    });
})