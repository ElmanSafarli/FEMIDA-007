import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Navbar from "./Navbar";

export default function SiteHeader() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Navbar/>} />
            </Routes>
        </div>
    )
}