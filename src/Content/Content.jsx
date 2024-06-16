import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import { Stats } from "./Stats/Stats";
import Testimonials from "./Testimonials/Testimonials";
import { WhatWeOffer } from "./WhatWeOffer/WhatWeOffer";
import { WhyUs } from "./WhyUs/WhyUs";

function Content() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <Testimonials />
      <Stats />
      {/* <Projects /> */}
      {/* <WhyUs /> */}
    </>
  );
}

export default Content;
