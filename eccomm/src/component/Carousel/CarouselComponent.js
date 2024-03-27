import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const CarouselComponent = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="container mx-auto">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          showThumbs={false}
          className="max-w-full "
          
        >
          <div>
            <img
              src="https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/03/68/28/91/360_F_368289139_vuM1SbUKDunGVNAFQ3vIZmQnLFyoeCtQ.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf638567266649.5b338bb6444a3.jpg"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
