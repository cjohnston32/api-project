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
  var searchURL = 'https://newsapi.org/v2/top-headlines?sources=google-news&';
  var userInput = $('#searchTopic').val();

  // --- PARAMETERS for Pro Publica Nonprofit API Searches ---
      // More Information: https://projects.propublica.org/nonprofits/api#methods
      // '?q=' : Keyword search string (name of nonprofit)
      searchURL += '?q=' + userInput;
      searchURL += 'apiKey=51f4e2015ccd48ce8281226930dc1f8b';
  console.log(searchURL);
  return searchURL;
}

/**
* @param {object} npAPI
*/

// newPage() - updates the page
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