var results;
const resultSet = 15;
const key = "AIzaSyA44onyIf-S68ASSTVcpgCW_i6XpJZp5jc";


function setUp() {
  var header = document.createElement("Header");
  var logo = document.createElement("img");
  logo.setAttribute("src", "C:/Users/Anchal_Agrawal/Downloads/Youtubelogo.jpg");
  logo.setAttribute("class","logo");
  header.appendChild(logo);

  var searchBox = document.createElement("INPUT");
  searchBox.setAttribute("type", "text");
  searchBox.setAttribute("id", "searchBox");
  searchBox.setAttribute("placeholder", "Search from Youtube here");
  searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("searchButton").click();
    }
  });

  header.appendChild(searchBox);

  var searchButton = document.createElement("Button");
  searchButton.setAttribute("type", "submit");
  searchButton.setAttribute("id", "searchButton");
  searchButton.innerHTML = "Search";
  searchButton.addEventListener("click", search);
  searchButton.addEventListener("click", displayPagination);
  header.appendChild(searchButton);

  document.body.appendChild(header);

  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "mainDiv");
  document.body.appendChild(mainDiv);
}

