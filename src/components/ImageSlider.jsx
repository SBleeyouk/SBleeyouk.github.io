import React, { useState } from 'react';
import styled from 'styled-components';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const SliderContainer = styled.div`
  width: 80%;
  overflow: hidden;
  position: relative;
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -100 * props.currentIndex}%);
  margin: 0 -1rem; /* Adds space to show adjacent images */
  border-radius: 8px;
`;

const Slide = styled.div`
  flex: 0 0 calc(100% / 1); /* Adjust slide width to show next/prev images */
  margin: 0 0rem; /* Adds spacing between slides */
  position: relative;

  img, video, iframe {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #2b2a2a;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  z-index: 10;

  &:hover {
    background-color: #ece8e8;
    color: #2b2a2a;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const ImageSlider = ({ sources = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (sources.length === 0) return null; // No images/videos to show

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sources.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sources.length) % sources.length);
  };

  return (
    <SliderContainer>
      <SlidesWrapper currentIndex={currentIndex}>
        {sources.map((src, index) => (
          <Slide key={index}>
            {src.includes('youtube') || src.includes('v=') ? (
              <iframe
                src={src}
                title={`Slide ${index}`}
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="400px"
              ></iframe>
            ) : src.endsWith('.mp4') ? (
              <video src={src} controls />
            ) : (
              <img src={src} alt={`Slide ${index}`} />
            )}
          </Slide>
        ))}
      </SlidesWrapper>
      <Button className="prev" onClick={prevSlide}>
        <GrFormPrevious />
      </Button>
      <Button className="next" onClick={nextSlide}>
        <MdNavigateNext/>
      </Button>
    </SliderContainer>
  );
};

export default ImageSlider;
