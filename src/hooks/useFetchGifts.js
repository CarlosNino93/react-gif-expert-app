import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs.js';

export const useFetchGifts = (category) => {
    const [state, setstate] = useState({ data: [], loading: true });
    useEffect(() => {
        getGifs(category).then((images) => setstate({ data: images, loading: false }));
    }, [category]);
    return state; //{data[],loadingtrue}
};
