import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import shapeImage from "../../public/img/hero/1.png";
import heroImage from "../../public/img/hero/2.png";

const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  name: "Cesar Uriel",
  description: `I'm a Backend Developer based in Mexico with over 4 years of professional experience, 
  specializing in the financial industry.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={heroContent.heroImage} alt="brand" />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Hello, I&apos;m {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={["Backend Developer", "Cloud Enthusiast", "Web Developer", "Software Engineer"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="edina_tm_button">
                <a href="/pdf/cesar_hernandez_cv_swe.pdf" target="_blank" rel="noopener noreferrer" className="color">View CV</a>
              </div>
              <div className="edina_tm_button">
                <a href="https://cal.com/cesar-hernandez" target="_blank" rel="noopener noreferrer" className="color">Pick a Time</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
