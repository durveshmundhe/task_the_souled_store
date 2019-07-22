import React from "react";
import HomeCarousel from "./HomeCarousel";
import ExclusiveMembership from "./ExclusiveMembership";
import HomeProducts from "./HomeProducts";
import SocialHandle from "./SocialHandles";
import Footer from "./Footer";

function HomePage() {
    return (
      <div>
        <HomeCarousel />
        <ExclusiveMembership/>
        <HomeProducts/>
        <SocialHandle/>
        <Footer/>
      </div>
    );
}

export default HomePage;