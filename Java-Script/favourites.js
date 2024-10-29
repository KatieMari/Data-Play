// Select Favourites Button
const addFavouriteButton = document.getElementById("add-favourite-button");

// Selects Favourite Div
const favouritesDiv = document.getElementById("favourites-div")

// currentImage Stores Image Currently Displayed - Updated in databas.js onFetchRandomDog Function
let currentImage = "";

// List of all Favourites used to Manage Repetition
let favouritesList = [];

async function downloadImage(imageSrc) {
    // Image Fetch to get the Specific Image Information
    const image = await fetch(imageSrc);
    const imagBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "cuteDog.png";
    link.click();
}

function onDownloadClick(event) {
    const clickedButton = event.target;
    const parentDiv = clickedButton.closest("div");
    const imageElement = parentDiv.querySelector("img");


}

/**
 * Creates newImage Element and Append it to the Favourites Div
 */
function onAddFavouriteButtonClick() {

    // Checks Currently Displayed Image is not in the List Already
    if (favouritesList.includes(currentImage)) return;

    // Adds Current Image to Favourite List
    favouritesList.push(currentImage);

    // Creates Div that will Contain Eveything Favourite Related
    const newDiv = document.createElement("div");
    newDiv.classList.add("container", "flex-column", "favourite-card");

    // Creates newImage and Upate Source
    const newImage = document.createElement("img");
    newImage.src = currentImage;
    newImage.classList.add("favourite-img");

    // Creat download Button
    const downloadButton = document.createElement("button");
    downloadButton.innerHTML = "Download";

    // Append newDiv Childs
    newDiv.append(newImage);
    newDiv.append(downloadButton);

    // Appends Div to Favourites Div
    favouritesDiv.append(newDiv);
}







// Link Events
addFavouriteButton.onclick = onAddFavouriteButtonClick;