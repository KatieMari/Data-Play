// Image Generator Section
const dogImage = document.getElementById("dog-image");
const randomDogButton = document.getElementById("random-dog-button");

// Selects Section
const breedSelect = document.getElementById("breed-select");
const subBreedSelect = document.getElementById("sub-breed-select");

/**
 * Fetch Information from any API and Return the data in message
 * @param {string} url URL to be fetched
 */
async function fetchFromAPI(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Response status: " + response.status);
        }

        const json = await response.json();
        return json.message;

    } catch (error) {
        console.log(error);
    }
}

// Fetches and populates the main breed list
async function fetchBreedPossibilities() {
    const breedListUrl = "https://dog.ceo/api/breeds/list";

    const breedsList = await fetchFromAPI(breedListUrl);

    for (const breed of breedsList) {
        const newOption = document.createElement("option");
        newOption.text = breed;
        breedSelect.options.add(newOption);
    }
}

// Fetches and populates the sub-breed list based on selected breed
async function fetchSubBreedPossibilities() {
    // Clear existing sub-breed options
    while (subBreedSelect.options.length > 0) {
        subBreedSelect.remove(0);
    }

    // Add "any" option
    const defaultOption = document.createElement("option");
    defaultOption.text = "any";
    subBreedSelect.options.add(defaultOption);

    // Fetch sub-breeds for the selected breed
    const breedListUrl = `https://dog.ceo/api/breed/${breedSelect.value}/list`;
    const breedsList = await fetchFromAPI(breedListUrl);

    // Populate sub-breed options if available
    for (const breed of breedsList) {
        const newOption = document.createElement("option");
        newOption.text = breed;
        subBreedSelect.options.add(newOption);
    }
}

// Fetches a random dog image, with optional breed or sub-breed
async function fetchRandomDog() {
    let randomDogUrl = "https://dog.ceo/api/breeds/image/random";

    if (breedSelect.value !== "any") {
        randomDogUrl = `https://dog.ceo/api/breed/${breedSelect.value}/images/random`;

        if (subBreedSelect.value !== "any") {
            randomDogUrl = `https://dog.ceo/api/breed/${breedSelect.value}/${subBreedSelect.value}/images/random`;
        }
    }

    // Get image source from API
    const imageSource = await fetchFromAPI(randomDogUrl);

    // Update image with received source
    dogImage.src = imageSource;
}

// Link buttons to events
randomDogButton.onclick = fetchRandomDog;
breedSelect.onchange = fetchSubBreedPossibilities;

// Execute functions at the start
fetchRandomDog();
fetchBreedPossibilities();
