import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home2";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";
import Travelers from "./Components/Travelers/Travelers";
import Subscribe from "./Components/Subscribers/subscribe";
import Footer from "./Components/Footer/Footer";

const Home1Page = () => {

  return (
    <div>
      <Navbar/> 
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribe/>
      <Footer/>
    </div>
  ) 
};

export default Home1Page; 