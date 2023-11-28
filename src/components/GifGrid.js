//continue in video number 12 classnames

//import React, { useEffect, useState } from 'react';
import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts.js';
import { GifGridItem } from './GifGridItem.js';

//gif grid search the images with the indicated category
export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifts(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
