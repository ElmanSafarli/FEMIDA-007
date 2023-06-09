import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"

import axios from "axios";
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

import Femida from "../assets/femida.jpg"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import RightSideNews from "../components/RightSideNews";


export default function NewDetails() {
    const {id} = useParams()
    // const {loading, error, data} = useFetch("http://localhost:1337/api/news-blocks/" + id)
    // const [error, setError] = useState(null);
    // const [restaurants, setRestaurants] = useState([]);

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:1337/api/news-blocks/' + id)
    //     .then(({ data }) => setRestaurants(data.data))
    //     .catch((error) => setError(error));
    // }, []); 

    const [news, setNews] = useState([])
    const [error, setError] = useState(null);

    // axios.get(`http://localhost:1337/api/news-blocks/${id}`).then((response) => {
    //     setNews(response.data.data.attributes)
    // });

    useEffect(() => {
        axios
          .get(`https://stingray-app-vyo66.ondigitalocean.app/api/news-block/${id}`)
          .then((response) => setNews(response.data.data.attributes))
          .catch((error) => setError(error));
    }, []);


    return(
        <div className="news-details">
            <SiteHeader/>
            <div className="news-detail-group">
                <div className="new-details-group-left">
                    <div className="news-details-content">
                        <h1>{news.title}</h1>
                        <img src={news.url} alt="s" />
                        <ReactMarkdown>{news.body}</ReactMarkdown>    
                    </div>
                </div>
                <div className="news-detail-group-right">
                    <RightSideNews/>
                </div>
            </div>
            

        </div>
    )
}

