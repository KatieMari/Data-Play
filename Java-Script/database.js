async function fetchBreedPossibilties() {
    const breedListUrl = "https://dog.ceo/api/breeds/list/all";

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

        console.log(json);

    } catch (error) {
        console.error(error);
    }

}
