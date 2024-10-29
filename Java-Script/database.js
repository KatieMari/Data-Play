const dogImage = document.getElementById("dog-image");
const breedSelect = document.getElementById("breed-select");
const subBreedSelect = document.getElementById("sub-breed-select");


async function fetchBreedPossibilties() {
    const breedListUrl = "https://dog.ceo/api/breeds/list";

    // try to fetch url and Display Error Otherwise
    try {
        // Get Response from api
        const response = await fetch(breedListUrl);

        // Check Response OK
        if (!response.ok) {
            throw new Error("Response status:" + response.status);
        }

        // Transform Response to JSON
        const json = await response.json();

        const breedsList = json.message;

        for (const breed of breedsList) {
            // Populate Breed Select - Creates New Option Element
            const newOption = document.createElement("option");
            newOption.text = breed;
            breedSelect.options.add(newOption, breed);
        }

    } catch (error) {
        console.error(error);
    }

}

async function fetchRandomDog() {
    try {
        // Random Dog URL
        const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

        // Get Response from Server
        const response = await fetch(randomDogUrl);

        // Check Response is OK
        if (!response.ok) {
            throw new Error("Response status: " + response.status);
        }

        // Get JSON and Message Objects
        const json = await response.json();
        const message = json.message;

        // Update Image with Received Source
        dogImage.src = message;

    } catch (error) {
        console.log(error);
    }
}


// Functions to be Executed at the Beginning of the Code
fetchRandomDog();
fetchBreedPossibilties();