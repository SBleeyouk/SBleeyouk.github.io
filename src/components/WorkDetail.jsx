import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams , useNavigate } from 'react-router-dom';
import Header from './Header';
import CustomCursorTwo from './cursor-2';
import projects, { getProjectById } from './projectData';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: #f8f9fa;
  box-sizing: border-box;
  text-align: center;
  font-family: 'PP Neue Montreal', sans-serif;
`;

const PrjScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: center;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0 auto;
`;

const Thumbnail = styled.img`
  width: 100%; /* Ensures the image fills the wrapper */
  object-fit: cover; /* Ensures the image doesn't distort */
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #f8f9fa;
  z-index: 100; /* Ensures it stays on top of other content */
  transition: all 0.3s ease-in-out; /* Smooth transitions for style changes */
  box-shadow: ${(props) => (props.isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const Intro = styled.div`
  width: 70%;
  text-align: center;
  padding: ${(props) => (props.isScrolled ? '1rem 0' : '2rem 0')};
  transition: all 0.3s ease-in-out;
`;

const PrjTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'PP Neue Montreal', sans-serif;
    font-weight: 500;
    font-size: 3rem;
    color: #2b2a2a;
    margin: 0;
    transition: font-size 0.3s ease-in-out;
  }

  .year {
    font-size: 1rem;
    color: #757474;
    margin-top: 2rem;
    transition: font-size 0.3s ease-in-out;
  }
`;

const Question = styled.div`
  height: 24%;
  font-weight: 400;
  font-size: 2rem;
  color: #ff6035;
  margin-top: 1rem;
  transition: font-size 0.3s ease-in-out;
`;

const TagItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.div`
  font-family: 'Cygnito Mono', monospace;
  background-color: rgba(217, 217, 217, 0.3);
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #757474;
`;

const PDFLink = styled.a`
  font-family: 'Cygnito Mono', monospace;
  width: 8rem;
  text-align: center;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #757474;
  font-size: 1rem;
  border: #757474 1px solid;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: #f8f9fa;
    background: #757474;
  }
`;


const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 4rem 0rem;
`;

const PrjIntroInfo = styled.div`
  width: 20%;
  text-align: center;
`;

const BasicTitle = styled.h3`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #757474;
  opacity: 0.7;
  text-align: left;
`;

const BasicDescripList = styled.ul`
  list-style: none; /* Remove default list styling */
  padding: 0;
  margin: 0;
`;

const BasicDescrip = styled.li`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: color: #2b2a2a;
  text-align: left;
  position: relative;
  padding-left: 1.2rem; /* Add space for the custom dot */
  margin-bottom: 0.5rem; /* Add space between list items */

  &::before {
    content: '•'; /* Custom dot */
    position: absolute;
    left: 0;
    color: #000; /* Adjust the dot color */
  }
`;

const DetailSection = styled.div`
  width: 80%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #2b2a2a;
`;

const DetailItem = styled.div`
  width: 100%;
  text-align: center;

  img,
  video {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  video {
    controls: true;
  }
`;

const NextPrjScreen = styled.div`
  width: 100%;
  border-top: #757474 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 8rem;
  padding: 2rem;
  gap: 2rem; /* Space between text and thumbnail */
`;

const NextQ = styled.div`
  width: 40%; /* Text takes 40% of the width */
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: left; /* Align text to the left */
  text-align: left;
  padding-left: 10%;
  h1 {
    font-family: 'PP Neue Montreal', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #ff6035;
    margin: 0;
  }

  .nextq {
    font-size: 1,5rem;
    color: #757474;
  }
`;

const NextPrj = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(5px);
  padding-right: 10%;
`;

const ThumbnailWrapper2 = styled.div`
  position: relative;
  width: 100%; /* Fill the allocated width */
  height: 50%; /* Display only the top 50% of the height */
  overflow: hidden; /* Ensure the overflow is hidden for cropping */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0; /* Adjust margin as needed */
`;

const Thumbnail2 = styled.img`
  width: 100%; /* Fill the wrapper width */
  height: 50%;
  object-fit: cover; /* Crop to maintain aspect ratio */
  object-position: top; /* Focus on the top of the image */
  border-radius: 8px;
`;

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const project = getProjectById(Number(projectId));
  const currentIndex = projects.findIndex((project) => project.id === Number(projectId));

  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex] || null;
    //const projectId = projects.find((p) => p.id.toString() === projectId);
  const handleProjectClick = (nextProjectIndex) => {
    navigate(`/projects/${nextProjectIndex}`);
  };
  
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <ProjectContainer>
      <Header variant="white" />
      <PrjScreen>
        <Intro>
          <PrjTitle>
            <h1>{project.title}</h1>
            <span className="year">/ {project.year}</span>
          </PrjTitle>
          <Question>{project.question}</Question>
          <TagItem>
            {project.tag?.map((t, index) => (
              <Tag key={index}>{t}</Tag>
            ))}
            {project.pdfLink && (
              <PDFLink href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                View Details
              </PDFLink>
            )}
          </TagItem>
        </Intro>
        <ThumbnailWrapper>
          <Thumbnail src={project.thumbnail} alt={project.title} />
        </ThumbnailWrapper>
        <ProjectInfo>
        {project.roles && project.roles.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>MY ROLE</BasicTitle>
            <BasicDescripList>
              {project.roles.map((role, index) => (
                <BasicDescrip key={index}>{role}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}

        {project.credits && project.credits.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>CREDITS</BasicTitle>
            <BasicDescripList>
              {project.credits.map((credit, index) => (
                <BasicDescrip key={index}>{credit}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}

        {project.awards && project.awards.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>AWARDS</BasicTitle>
            <BasicDescripList>
              {project.awards.map((award, index) => (
                <BasicDescrip key={index}>{award}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}

        {project.funded && project.funded.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>FUNDED</BasicTitle>
            <BasicDescripList>
              {project.funded.map((fund, index) => (
                <BasicDescrip key={index}>{fund}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}
      </ProjectInfo>

        <DetailSection>
            {project.motivation}
            {project.motivationSrc.map((src, index) => {
              console.log('SRC VALUE:', src); // Debugging line to see the exact value of 'src'
              
              return (
                <DetailItem key={index}>
                  {/* Check for YouTube Links */}
                  {src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com')? (
                    <iframe
                      width="100%"
                      height="600"
                      src={src} // Convert to embed if needed
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : src.endsWith('.mp4') ? (
                    // Render local video files
                    <video src={src} controls width="100%" />
                  ) : (
                    // Render image files for all other cases
                    <img src={src} alt={`Detail ${index + 1}`} width="100%" />
                  )}
                </DetailItem>
              );
            })}
            {project.approach}
            {project.approachSrc.map((src, index) => {
              console.log('SRC VALUE:', src); // Debugging line to see the exact value of 'src'
              
              return (
                <DetailItem key={index}>
                  {/* Check for YouTube Links */}
                  {src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com')? (
                    <iframe
                      width="100%"
                      height="600"
                      src={src} // Convert to embed if needed
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : src.endsWith('.mp4') ? (
                    // Render local video files
                    <video src={src} controls width="100%" />
                  ) : (
                    // Render image files for all other cases
                    <img src={src} alt={`Detail ${index + 1}`} width="100%" />
                  )}
                </DetailItem>
              );
            })}



        </DetailSection>
      </PrjScreen>
      <NextPrjScreen
        onClick={() => handleProjectClick(nextProject.id)}
        onMouseEnter={() => setIsPopupHovered(true)}
        onMouseLeave={() => setIsPopupHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {isPopupHovered && 
            <CustomCursorTwo 
            x={cursorPosition.x}
            y={cursorPosition.y}
            isPopupHovered={isPopupHovered} 
        />}
        <NextQ>
            <span className="nextq">NEXT PROJECT</span>
            <h1>{nextProject.question}</h1>
        </NextQ>
        <NextPrj>
            <ThumbnailWrapper2>
            <Thumbnail2 src={nextProject.thumbnail} alt={nextProject.title} />
            </ThumbnailWrapper2>
        </NextPrj>
        </NextPrjScreen>

    </ProjectContainer>
  );
};

export default ProjectDetail;
