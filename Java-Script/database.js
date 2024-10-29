// Image Generator Section
const dogImage = document.getElementById("dog-image");
const randomDogButton = document.getElementById("random-dog-button");

// Selects Section
const breedSelect = document.getElementById("breed-select");
const subBreedSelect = document.getElementById("sub-breed-select");




/**
 * Fetch Information from any API and Return the data in message
 * @param {string} url url to be fetch
 */
async function fetchFromAPI(url) {
    try {
        // Get Response from API
        const response = await fetch(url);

        // Check Response is OK
        if (!response.ok) {
            throw new Error("Response status: " + response.status);
        }

        // Get JSON from Response
        const json = await response.json();

        return json.message;

    } catch (error) {
        console.log(error);
    }
}

async function fetchBreedPossibilties() {
    const breedListUrl = "https://dog.ceo/api/breeds/list";

    const breedsList = await fetchFromAPI(breedListUrl);

    for (const breed of breedsList) {
        // Populate Breed Select - Creates New Option Element
        const newOption = document.createElement("option");
        newOption.text = breed;
        breedSelect.options.add(newOption, breed);
    }
}

async function fetchRandomDog() {

    if (breedSelect.value === "any") {
        // Define URL
        const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

        // Get Image Source from API
        const imageSource = await fetchFromAPI(randomDogUrl);

        // Update Image with Received Source
        dogImage.src = imageSource;
    } else {
        // Define URL
        const randomDogUrl = "https://dog.ceo/api/breed/" + breedSelect.value + "/images/random";

        // Get Image Source from API
        const imageSource = await fetchFromAPI(randomDogUrl);

        // Update Image with Received Source
        dogImage.src = imageSource;
    }
}

    // Link Buttons to Events
    randomDogButton.onclick = fetchRandomDog;

    // Functions to be Executed at the Beginning of the Code
    fetchRandomDog();
    fetchBreedPossibilties();