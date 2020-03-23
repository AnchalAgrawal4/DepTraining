function search() {
    var searchValue = document.getElementById("searchBox").value;
    var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${resultSet}&q=${searchValue}`;
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