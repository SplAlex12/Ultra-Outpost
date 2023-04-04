// Set your channel ID and API key
var channelID = 'UC8tj-_hq8aatordjpWbnSzQ';
var apiKey = 'AIzaSyBQf0nm5Sm7or2rAVRVHBjauWLj8OXOhH0';

// Set the number of videos to display
var maxResults = 6;

// Build the API request URL
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelID + '&maxResults=' + maxResults + '&order=date&type=video&key=' + apiKey;

// Send an API request
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Loop through the video results and create embeds
    data.items.forEach(item => {
      var videoID = item.id.videoId;
      var videoTitle = item.snippet.title;
      var videoDescription = item.snippet.description;
      var videoDate = new Date(item.snippet.publishedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
      var videoEmbed = '<iframe src="https://www.youtube.com/embed/' + videoID + '" frameborder="0" allowfullscreen></iframe>';
      var videoHTML = '<div class="video">' +
                        '<h3>' + videoTitle + '</h3>' +
                        '<p class="date">' + videoDate + '</p>' +
                        '<div class="embed">' + videoEmbed + '</div>' +
                        '<p>' + videoDescription + '</p>' +
                      '</div>';
      document.getElementById('video-container').innerHTML += videoHTML;
    });
  });
