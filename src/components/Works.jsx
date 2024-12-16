import React, { useState } from 'react';
import styled from 'styled-components';
import PrjInfo from './prjInfo';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import projects, { getProjectById } from './projectData';
import CustomRadioButton from './customRadio';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Slight slide up
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Duration of fade-in
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20, // Slide out
    transition: {
      duration: 0.6, // Duration of fade-out
      ease: "easeIn",
    },
  },
};


const ProjectContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  box-sizing: border-box;
  text-align: center;
  cursor: none auto;
  font-family: 'PP Neue Montreal', sans-serif;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const ProjectScreen = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Filters = styled.div`
  padding: 0rem 5rem;
  display: flex;
  margin: 1.2rem;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

const FilterButton = styled.button`
  font-family: 'Cygnito Mono', monospace;
  font-weight: 600;
  line-height: 0.5rem;
  color: ${(props) => (props.active ? '#ff6035' : 'rgba(255, 96, 53, 0.3)')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'normal')};
  outline: transparent;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1.5rem;
  transition: color 0.3s, font-style 0.3s, font-weight 0.3s;

  &:hover {
    text-decoration: underline;
    .project-count {
      visibility: visible; /* Show on hover */
      opacity: 1; /* Smooth fade-in effect */
  }
  }
  .project-count {
    font-family: 'PP Neue Montreal', sans-serif;
    font-size: 0.7rem; /* Smaller font size for count */
    font-weight: 400;
    color: rgba(255, 96, 53, 0.3); /* Muted color for count */
    position: absolute;
    margin-left: 0.2rem;
  }
`;

const FilterGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #ff6035;

  button, label {
    cursor: pointer;
  }
`;

const FilterRadio = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;  
  color: #ff6035;
  flex-direction: row;
  gap: 1rem;
  font-size: 1.2rem;
`

const RadioBtn = styled.input`
  type = 'radio';
`

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

export const Footer = styled.div`
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    margin-bottom: 2%;
`

export const FooterText = styled.p`
    font-size: 1rem;
    opacity: 0.3;
    font-size: 0.8rem;
`

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const [filterContext, setFilterContext] = useState('ALL');
  const [filterApproach, setFilterApproach] = useState('approach');

  const filteredProjects = projects.filter((project) => {
    return filterContext === 'ALL' || project.tag.includes(filterContext);
  });

  return (
    <>
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    <ProjectContainer>
    <Header variant="white" />
    <ProjectScreen>
      <Filters>
        <FilterGroup>
          {['ALL', 'AI', 'Social Justice', 'Education', 'Interface', 'Media Art', 'Research'].map((context) => {
          const projectCount =
            context === 'ALL'
              ? projects.length
              : projects.filter((project) => project.tag.includes(context)).length;
          return (
            <FilterButton
              key={context}
              active={filterContext === context}
              onClick={() => setFilterContext(context)}
            >
            {context}
            <span className="project-count">{projectCount}</span>
            </FilterButton>
          );
          })}
        </FilterGroup>
        <FilterRadio>
          <CustomRadioButton
          label="By Question"
          value="question"
          checked={filterApproach === 'question'}
          onChange={() => setFilterApproach('question')}
          />
        <CustomRadioButton
          label="By Approach"
          value="approach"
          checked={filterApproach === 'approach'}
          onChange={() => setFilterApproach('approach')}
          />
      </FilterRadio>
      </Filters>
      <ProjectGrid>
        {filteredProjects.map((project) => (
          <PrjInfo
          key={project.id}
          thumbnail={filterApproach === 'question' ? project.thumbnailQeustion : project.thumbnail}
          title={project.title}
          description={project.shortDescription}
          year={project.year}
          pdfLink={project.pdfLink}
          onClick={() => handleProjectClick(project.id)} // Pass onClick handler here
        />
        ))}
      </ProjectGrid>
    </ProjectScreen>
    <Footer>
        <FooterText>© Saetbyeol LeeYouk developed with React</FooterText>
      </Footer>
    </ProjectContainer>
    </motion.div>
    </>
  );
};

export default Projects;
