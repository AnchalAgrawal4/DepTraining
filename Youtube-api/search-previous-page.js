function searchPreviousPage() {
    const searchValue = document.getElementById("searchBox").value;
    var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${resultSet}&pageToken=${results.prevPageToken}&q=${searchValue}`;
    if(results.prevPageToken===undefined){
      alert("You are on the first page, no previous results! ")
    }
    fetch(fetchUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        results = data;
        console.log(data);
        displayCards(results);
      })
      .catch(error => console.log(error));
  }