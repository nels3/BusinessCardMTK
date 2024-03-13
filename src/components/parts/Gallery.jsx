import React from "react";
import Carousel from "react-gallery-carousel";

import Title from "src/components/parts/Title";

import "react-gallery-carousel/dist/index.css";

const images = [1, 2, 3, 4, 5, 6].map((number) => ({
  src: `img/${number}.jpg`,
}));

const Gallery = () => {
  return (
    <div>
      <Title title="Galeria" />
      <Carousel
        images={images}
        isAutoPlaying={true}
        autoPlayInterval={4000}
        style={{ height: "90vh", width: "90vh" }}
      />
    </div>
  );
};

export default Gallery;
