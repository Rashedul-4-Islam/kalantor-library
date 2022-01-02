import React from "react";
// import Slider from "react-slick";
import Books from "../Books/Books";
import Hero from "../Hero/Hero";
import Footer from "../Shear/Footer/Footer";
import NavigationMenu from "../Shear/NavigationMenu/NavigationMenu";
import SubjectItem from "../SubjectItem/SubjectItem";
import Slider from "../Slider/Slider";
import Biggayapon1 from "../Biggayapon/Biggayapon1";
import Biggayapon2 from "../Biggayapon/Biggayapon2";
import WriterSlider from "../WriterSlider/WriterSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <NavigationMenu />
      <Slider />
      <SubjectItem />
      <Books />
      <Books />
      <Biggayapon1 />
      <Books />
      <Books />
      <Biggayapon2 />
      <Books />
      <SubjectItem />
      <Books />
      <Books />
      <Books />
      <WriterSlider />
      <WriterSlider />
      <Footer />
    </div>
  );
};

export default Home;
