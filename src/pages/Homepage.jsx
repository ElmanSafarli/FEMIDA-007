import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import Femida from "../assets/femida.jpg"
import RightSideNews from "../components/RightSideNews";
import Gallery from "../components/Slider";

const Homepage = () => {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("https://stingray-app-vyo66.ondigitalocean.app/api/news-block")
      .then(({ data }) => setRestaurants(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="homepage">
      <div className="left-side-news">
        <Gallery/>
        <div className="news-block-group">
            {restaurants.map(({ id, attributes }) => (
                <div className="news-block">
                    <img src={attributes.url} alt="femida-logo" />
                    <a target="_blank" href={`/details/${id}`}>{attributes.title}</a>
                </div>
            ))}
        </div> 
      </div>
      <div className="right-side-news">
            <RightSideNews/>
      </div>
    </div>
  );
};

export default Homepage;
