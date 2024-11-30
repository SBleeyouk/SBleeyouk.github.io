import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const SummarySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh; /* Full page height */
    background-color: #4e2e3b;
    color: white;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.2rem;
`;

const Summary = () => {
  return (
    <>
    <SummarySection id="summary-section">
    <Header></Header>
        This is the summary section. Add your content here.
    </SummarySection>
    </>
  );
};

export default Summary;
