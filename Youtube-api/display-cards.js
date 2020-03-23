function displayCards(data) {
    var items = data.items;
    var fragment = new DocumentFragment();
    var place = document.querySelector(".mainDiv");
    if(items.length===0){
      alert("Please Enter valid data for search"); 
    }
    for (let i = 0; i <items.length ; i++) {
      const item = items[i];
      const { title, description, thumbnails } = item.snippet;
      const { url } = thumbnails.medium;
      const { videoId } = item.id;
      var card = document.createElement("div");
      card.setAttribute("class", "cards");
      var videoImage = document.createElement("img");
      videoImage.setAttribute("id", "videoImage");
      videoImage.setAttribute("src", url);
      var videoTitle = document.createElement("span");
      videoTitle.innerHTML = title;
      var videoLink = document.createElement("a");
      videoLink.setAttribute("id","videoLink");
      videoLink.setAttribute("href", "https://www.youtube.com/watch?v=" + videoId);
      videoLink.setAttribute("target","blank");
      videoLink.innerHTML =  "https://www.youtube.com/watch?v=" + videoId;
      var videoDescription = document.createElement("p");
      videoDescription.innerHTML = description;
      card.appendChild(videoImage);
      card.appendChild(videoTitle);
      card.appendChild(videoLink);
      card.appendChild(videoDescription);
      fragment.appendChild(card);
      }
    place.innerHTML = "";
    place.appendChild(fragment);
  }
  