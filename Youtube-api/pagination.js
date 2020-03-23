function displayPagination() {
    var footer = document.createElement("footer");
    footer.setAttribute("class", "footer");
  
    var previousButton = document.createElement("button");
    previousButton.setAttribute("class", "paginationButton");
    previousButton.addEventListener("click", previousButtonListener);
    previousButton.innerHTML = "< Previous";
  
    var nextButton = document.createElement("button");
    nextButton.setAttribute("class", "paginationButton");
    nextButton.addEventListener("click", nextButtonListener);
    nextButton.innerHTML = "Next >";
  
    footer.appendChild(previousButton);
    footer.appendChild(nextButton);
    document.body.appendChild(footer);
  }

  function nextButtonListener() {
    searchNextPage();
    displayCards(results);
  }
  
  function previousButtonListener() {
    searchPreviousPage();
    displayCards(results);
  }
  