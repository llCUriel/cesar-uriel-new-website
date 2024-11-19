import React from "react";
import Slider from "react-slick";
import testimonialContent from "../../data/certification";

export default function Certification() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(img/certifications/${val.img}.png)`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.status}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}
            </div>
            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
