// Select Favourites Button
const addFavouriteButton = document.getElementById("add-favourite-button");

// Selects Favourite Div
const favouritesDiv = document.getElementById("favourites-div")

// currentImage Stores Image Currently Displayed - Updated in databas.js onFetchRandomDog Function
let currentImage = "";

/**
 * Creates newImage Element and Append it to the Favourites Div
 */
function onAddFavouriteButtonClick() {
    // Creates newImage and Upate Source
    const newImage = document.createElement("img");
    newImage.src = currentImage;
    newImage.classList.add("favourite-img");

    // Append as Child
    favouritesDiv.append(newImage);
}

// Link Events
addFavouriteButton.onclick = onAddFavouriteButtonClick;