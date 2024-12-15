import React, { useState } from 'react';
import styled from 'styled-components';
import CustomCursorTwo from './cursor-2';


const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 1rem;
  overflow: hidden;
  text-align: left;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio: 16:9 (change this as needed) */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(43, 42, 42, 0.15);

  &:hover {
    box-shadow: 0px 3px 6px rgba(43, 42, 42, 0.5);

  }
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: 
  }
`;


const ProjectDetails = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  color: #2b2a2a;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin:0;
  }
    .year {
        font-size: 0.85rem;
        color: #757474;
        margin-top: 0.8rem;
        margin-left: 0.5rem;
  }
`;

const ProjectDescrip = styled.p`
    font-size: 1.2rem;
    color: #757474;
    margin: 0.5rem 0;
`

const PDFLink = styled.a`
  width: 4rem;
  text-align: center;
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #757474;
  font-size: 0.85rem;
  border: #757474 1px solid;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: #f8f9fa;
    background: #757474;
  }
`;

const PrjInfo = ({ thumbnail, title, description, year, pdfLink, onClick }) => {
    const [isPopupHovered, setIsPopupHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    return (
      <>
        {isPopupHovered && 
            <CustomCursorTwo 
            x={cursorPosition.x}
            y={cursorPosition.y}
            isPopupHovered={isPopupHovered} 
            />}
        <ProjectCard onClick={onClick}>
          <ThumbnailWrapper
            onMouseEnter={() => setIsPopupHovered(true)}
            onMouseLeave={() => setIsPopupHovered(false)}
            onMouseMove={handleMouseMove}
            style={{ cursor: isPopupHovered ? 'none' : 'default' }}
          >
            <Thumbnail src={thumbnail} alt={title} />
          </ThumbnailWrapper>
          <ProjectDetails>
            <h3>{title}</h3>
            <span className="year">/ {year}</span>
          </ProjectDetails>
          <ProjectDescrip>{description}</ProjectDescrip>
          {pdfLink && <PDFLink href={pdfLink} target="_blank">View PDF</PDFLink>}
        </ProjectCard>
      </>
    );
  };
  
  export default PrjInfo;