import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Drangon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (newCategorie) => {
    //     setCategories([...categories, newCategorie]);
    // };

    return (
        <>
            <h1>Gif Expert App</h1>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button
                onClick={() => {
                    handleAdd('HunterXHunter');
                }}
            >
                AddCategory
            </button> */}

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
