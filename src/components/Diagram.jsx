import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Summary from './Summary';
import { Title, TextH3 } from './Typo';
import Header from './Header';

const DiagramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const VennDiagram = styled.div`
  display: flex;
  position: relative;
  height: 70%;
  aspect-ratio: 1;
  margin: auto;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const NameContainer = styled.div`
  position: absolute;
  bottom: 10%; /* Distance from the bottom of the page */
  text-align: center;
  color: white;
  font-family: 'Baskerville', serif;
  font-weight: 600;
  font-size: 2.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    color: #FFC800;

  }
`;

const DashedLine = styled.div`
  position: absolute;
  width: 1px;
  height: 35%; /* Adjust height as needed */
  background: repeating-linear-gradient(
    to bottom,
    white 0%,
    white 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 2px 10px;
  left: 50%;
  top: 50%; /* Starting point near the intersection */
  transform: translateX(-50%);
  z-index: 2;
`;

const Circle = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: 1px dashed white;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;

  display: flex; /* For centering text */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
  font-weight: bold;
  postion:relative;

&.circle1 {
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    & > div {
      position: absolute;
      top: 12%; /* Moves text 10% from the top of the circle */
      text-align: center;
    }
  }

  &.circle2 {
    top: 50%;
    left: 40%;
    transform: translateY(-50%);
    text-align: center;

    & > div {
      position: absolute;
      top: 40%;
      left: 40%; /* Moves text 30% to the left within the circle */
      text-align: center;
      width: 60%;
    }
  }

  &.circle3 {
    top: 50%;
    right: 40%;
    transform: translateY(-50%);
    text-align: center;

    & > div {
      position: absolute;
      top: 40%;
      right: 50%; /* Moves text 30% to the right within the circle */
      text-align: center;
    }
  }
`;

const VideoBackground = styled.video`
  position: fixed; /* Ensures the video stays fixed and covers the viewport */
  top: 0;
  left: 0;
  width: 100%; /* Full viewport width */
  height: 100%; /* Full viewport height */
  object-fit: cover; /* Ensures the video scales properly */
  z-index: 0; /* Moves it behind other elements */
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const InteractionArea = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: transparency; /* Invisible but hoverable */
    pointer-events: all; /* Ensures interaction is detected */
    z-index: 2;

    &.area1 {
        top:23%; /* Adjust based on Region 1 */
        left: 25%; /* Adjust based on Region 1 */
        width: 20%; /* Adjust based on Region 1 */
        height: 20%; /* Adjust based on Region 1 */
    }

    &.area2 {
        top: 23%; /* Adjust based on Region 2 */
        left: 55%; /* Adjust based on Region 2 */
        width: 20%; /* Adjust based on Region 2 */
        height: 20%; /* Adjust based on Region 2 */
    }

    &.area3 {
        top: 33%; /* Adjust based on Region 3 */
        left: 42.5%; /* Adjust based on Region 3 */
        width: 15%; /* Adjust based on Region 3 */
        height: 17%; /* Adjust based on Region 3 */
    }

    &.area4 {
        top: 50%; /* Adjust based on Region 4 */
        left: 42.5%; /* Adjust based on Region 4 */
        width: 15%; /* Adjust based on Region 4 */
        height: 17%; /* Adjust based on Region 4 */
    }

    &:hover {
        cursor: url(src/cursor-play.png) 10 10, auto; }
    }
`;

const PopupImage = styled.img`
  position: absolute;
  width: 70%; /* Adjust image size */
  pointer-events: none; /* Prevent the popup from blocking hover events */
  z-index: 10;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  transform: translate(-50%, -50%); /* Center the image at the cursor */
`;

const Area = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: transparency; /* Invisible but hoverable */
    pointer-events: all; /* Ensures interaction is detected */
    z-index: 2;

    &.area5 {
        top: 0%; /* Matches Circle 1 */
        left: 50%;
        transform: translateX(-50%);
        width: 40%; /* Adjust based on Region 4 */
        height: 25%; /* Adjust based on Region 4 */
        cursor: url('source/cursor-social.png'), auto; /* Change cursor to image */
    }

    &.area6 {
        top: 58%; /* Matches Circle 2 */
        left: 62%;
        transform: translateY(-50%);
        width: 23%; /* Adjust based on Region 4 */
        height: 30%; /* Adjust based on Region 4 */
        cursor: url('/source/cursor-social.png'), auto; /* Change cursor to image */
    }

    &.area7 {
        top: 58%; /* Matches Circle 3 */
        right: 62%;
        transform: translateY(-50%);
        width: 23%; /* Adjust based on Region 4 */
        height: 30%; /* Adjust based on Region 4 */
        cursor: url('/path-to-hover-social.png'), auto; /* Change cursor to image */
    }

    &:hover {
        cursor: url(src/cursor-question.png) 10 10, auto; }
    }
`;

const Diagram = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverSection, setHoverSection] = useState(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleHover = (section) => {
        setHoverSection(section);
    };

    const handleScrollToSummary = () => {
      document.getElementById('summary-section').scrollIntoView({ behavior: 'smooth' });
    };
    

  return (
    <>
    <DiagramContainer onMouseMove={handleMouseMove}>
    <Header></Header>
        {!isMobile ? (
            <VennDiagram>
                <Circle className="circle1">
                <div>
                    <TextH3>TOWARD</TextH3>
                    <Title>Social Justice</Title>
                </div>
                </Circle>
                <Circle className="circle2">
                <div>
                    <TextH3>BY</TextH3>
                    <Title>Scalable Interaction</Title>
                </div>
                </Circle>
                <Circle className="circle3">
                <div>
                    <TextH3>OF</TextH3>
                    <Title>AI + DATA</Title>
                </div>
                </Circle>
            {/* Interaction Areas */}
            <InteractionArea
            className="area1"
            onMouseEnter={() => handleHover('area1')}
            onMouseLeave={() => handleHover(null)}
            />
            <InteractionArea
            className="area2"
            onMouseEnter={() => handleHover('area2')}
            onMouseLeave={() => handleHover(null)}
            />
            <InteractionArea
            className="area3"
            onMouseEnter={() => handleHover('area3')}
            onMouseLeave={() => handleHover(null)}
            />
            <InteractionArea
            className="area4"
            onMouseEnter={() => handleHover('area4')}
            onMouseLeave={() => handleHover(null)}
            />
            <Area
            className="area5"
            onMouseEnter={() => handleHover('area5')}
            onMouseLeave={() => handleHover(null)}
            />
            <Area
            className="area6"
            onMouseEnter={() => handleHover('area6')}
            onMouseLeave={() => handleHover(null)}
            />
            <Area
            className="area7"
            onMouseEnter={() => handleHover('area7')}
            onMouseLeave={() => handleHover(null)}
            />
            <VideoBackground
                src={
                    hoverSection === 'area1'
                        ? 'src/circle1.mp4'
                    : hoverSection === 'area2'
                        ? 'src/circle2.mp4'
                    : hoverSection === 'area3'
                        ? 'src/circle3.mp4'
                    : hoverSection === 'area4'
                        ? 'src/circle4.mp4'
                        : ''
                }
                autoPlay
                loop
                muted
                show={!!hoverSection}
            />
            <PopupImage
                src="src/cursor-social.png"
                visible={hoverSection === 'area5' || hoverSection === 'area6' || hoverSection === 'area7'}
                x={cursorPosition.x}
                y={cursorPosition.y}
            />
            </VennDiagram>
        ) : (
            <VideoBackground src="src/default.mp4" autoPlay loop muted show />
        )}
        <DashedLine/>
        <NameContainer onClick={handleScrollToSummary}>
          Saetbyeol LeeYouk
        </NameContainer>
    </DiagramContainer>
    <Summary />
    </>
  );
};

export default Diagram;
