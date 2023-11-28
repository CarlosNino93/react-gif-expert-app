//continue in video number 12 classnames

import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs.js';

//gif grid search the images with the indicated category
export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            {images.map((image) => (
                <GifGridItem key={image.id} {...image} />
            ))}
        </>
    );
};
