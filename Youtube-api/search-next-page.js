function searchNextPage() {
    const searchValue = document.getElementById("searchBox").value;
    var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${resultSet}&pageToken=${results.nextPageToken}&q=${searchValue}`;
    if(results.nextPageToken===undefined)
    {
      alert("No more results for this input !!")
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
  