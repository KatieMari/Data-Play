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
    // Blob Contains the Specific Data Realted to the Image File Instead of just the Source URL
    const imageBlob = await image.blob();
    // Creates a URL Object to Point to the Blob
    const imageURL = URL.createObjectURL(imageBlob);

    // Create Anchor Element with href imageURL
    const link = document.createElement("a");
    link.href = imageURL;
    // Sets Download Name
    link.download = "cuteDog.png";

    // Force Download by Triggering the Click Event of the Anchor Element
    link.click();
}

/**
 * Download Image Closer to the Download Button Clicked
 * @param {event} event 
 */
function onDownloadClick(event) {
    // Find Closest Image with the Help of Closest and querySelector
    const clickedButton = event.target;
    // Closest -> Looks for Closest Element of given Type "Up the Tree"
    const parentDiv = clickedButton.closest("div");
    // querySelector -> Looks for Closest Element of given Type "Down the Tree"
    const imageElement = parentDiv.querySelector("img");

    // Trigger Download Asychronously
    downloadImage(imageElement.src);
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
    downloadButton.onclick = onDownloadClick;

    // Append newDiv Childs
    newDiv.append(newImage);
    newDiv.append(downloadButton);

    // Appends Div to Favourites Div
    favouritesDiv.append(newDiv);
}


// Link Events
addFavouriteButton.onclick = onAddFavouriteButtonClick;
