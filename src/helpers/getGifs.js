export const getGifs = async (category) => {
    const apySearchUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'i9YISoQuictLrr9mwMFM96fVPNJnnaDG';
    const limit = 5;

    const fullUrl = apySearchUrl + '?q=' + category + '&limit=' + limit + '&api_key=' + apiKey;
    const response = await fetch(fullUrl);
    const { data } = await response.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifs;
};
