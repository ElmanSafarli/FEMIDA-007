import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";


import Homepage from "./pages/Homepage";
import NewDetails from "./pages/NewsDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <SiteHeader/>
        <Routes >
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/details/:id' element={<NewDetails/>} />
          <Route path='/category/:id' element={<Category/>} />
        </Routes >
      </Router>
      <Footer/>  
    </div>
  );
}

export default App;
