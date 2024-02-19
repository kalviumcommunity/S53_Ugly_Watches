import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function HomePage() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for the header
    const headerTimeout = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 100); // Adjust the duration as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(headerTimeout);
  }, []);
  const [h1load, setIsh1Loaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for the header
    const headerTimeout = setTimeout(() => {
      setIsh1Loaded(true);
    }, 100); // Adjust the duration as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(headerTimeout);
  }, []);

  return (
    <div className="parallaxCSS">
      <Parallax pages={4} className="flex">
        <ParallaxLayer speed={1}>
          <h1>{h1load && <h1 className="heroHeader"> HIDEOUS HOURS</h1>}</h1>
        </ParallaxLayer>
        <ParallaxLayer>
          {isHeaderLoaded && (
            <img
              className="watchHero"
              src="https://i.ibb.co/HFcD0Lr/watch.png"
            ></img>
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="featuringSetion">
          <h1> ABOUT US </h1>
          <div className="featuringPara">
            <p>
              Welcome to our unique corner of the internet where unconventional
              beauty meets timeless style! Dive into the world of ugly watches
              on our exclusive blog posting platform, where we celebrate the
              charm of timepieces that defy traditional norms. Embrace the
              extraordinary as we explore the quirkiest, most unconventional
              designs that push the boundaries of watchmaking. Discover the
              beauty in the unconventional, and join a community that
              appreciates the character and individuality of each tick and tock.
            </p>
          </div>
          <div className="blackDiv">
            <img src="https://i.ibb.co/Th2ZsJ4/1639634265-JCo-Logo-300x300px-1.png"></img>
            <img src="https://i.ibb.co/6Wkxcxp/download-1.png"></img>
            <img src="https://i.ibb.co/zZ5715n/download-2.png"></img>
            <img src="https://i.ibb.co/6Wkxcxp/download-1.png"></img>
            <img src="https://i.ibb.co/qsDf73X/jlc-logo-1.png"></img>
            <img src="https://i.ibb.co/jMXWK4b/rado-logo-1.png"></img>
            <img src="https://i.ibb.co/m8rtXzz/Thumbnail-Seiko-Logo-1.png"></img>
            <img src="https://i.ibb.co/1RyqshZ/maxresdefault-1.png"></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="featuringPara">
            <p>
              Bold and Unapologetically Ugly Watches redefine the very essence
              of timekeeping
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25}>
          <div>
            <iframe
              width="1500"
              height="914"
              src="https://www.youtube.com/embed/Jj4lZtLGRVM"
              frameborder="0"
              allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
