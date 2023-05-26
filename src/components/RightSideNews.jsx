import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import Femida from "../assets/femida.jpg"

export default function RightSideNews(){
    const [error, setError] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
  
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

    return(
        <div className="right-side-news-content">
            <div className="right-side-news-top">
                Son Xəbərlər 
            </div>
            <div className="right-side-news-middle">
                {restaurants.map(({ id, attributes }) => (
                <div className="right-side-news-middle-content">
                    <img src={attributes.url} alt="femida-logo" />
                    <a target="_blank" href={`/details/${id}`}>{attributes.title}</a>
                </div>
                ))}
            </div>
        </div>
    )
};