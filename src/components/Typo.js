import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Baskerville', serif;
  font-weight: 600;
  font-size: ${(props) => props.size || '1.5rem'};
  color: ${(props) => props.color || '#FFFFF'};
`;

export const TextH3 = styled.h3`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.size || '1rem'};
  color: ${(props) => props.color || '#FFFF'};
`;
