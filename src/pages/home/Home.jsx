// import { useState, useEffect } from "react";
import Hero from "../../components/content/home/Hero";
import Brands from "../../components/content/home/Brands";
import WhatWeDo from "../../components/content/home/What-We-Do";
import HowItWorks from "../../components/content/home/HowItWorks";
import { Security } from "../../components/content/home/SecurityDesign";
import Stats from "../../components/content/home/Stats";
import CallToAction from "../../components/content/home/CallToAction";
import Testimonials from "../../components/content/home/Testimonials";
// import Blogs from "../../components/content/home/Blogs";
import Portifolio from "../../components/content/home/Portifolio";
const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <WhatWeDo />
      <Stats />
      <HowItWorks />
      <Security />
      <Portifolio/>
      {/* <Blogs/> */}
      <Testimonials />
      <CallToAction/>
    </>
  );
};

export default Home;
