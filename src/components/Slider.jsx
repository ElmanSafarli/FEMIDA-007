import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {

    const [error, setError] = useState(null);
    const [restaurants, setRestaurants] = useState([]);

    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        axios
        .get("https://femida007-admin-aslul.ondigitalocean.app/api/news-blocks")
        .then(({ data }) => setRestaurants(data.data))
        .catch((error) => setError(error));
    }, []);

    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
    }

    // const items = {
    //     {restaurants.map(({ id, attributes }) => (
    //         <img style={{width: "100%"}} src={attributes.url} alt="femida-logo" onDragStart={handleDragStart} role="presentation" />    
    //     ))}
    // }

    return (
        <div className='gallery'>
            <AliceCarousel mouseTracking items={
                restaurants.map(({ id, attributes }) => (
                    <img className='gallery-img' src={attributes.url} alt="femida-logo" onDragStart={handleDragStart} role="presentation" />    
                ))
            } />
        </div>
    );
}

export default Gallery;