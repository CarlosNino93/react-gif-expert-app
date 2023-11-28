//continue in video number 12 classnames

import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

//gif grid search the images with the indicated category
export const GifGrid = ({ category }) => {
    const apySearchUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'i9YISoQuictLrr9mwMFM96fVPNJnnaDG';
    const query = category;
    const limit = 10;
    const fullUrl = apySearchUrl + '?q=' + query + '&limit=' + limit + '&api_key=' + apiKey;

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const response = await fetch(fullUrl);
        const { data } = await response.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gifs);
        setImages(gifs);
    };

    return (
        <>
            <h3>{category}</h3>
            {images.map((image) => (
                <GifGridItem key={image.id} {...image} />
            ))}
        </>
    );
};
