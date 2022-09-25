import styled from 'styled-components';

export const Sections = styled.section`
  padding-top: 45px;
  padding-bottom: 45px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  background: radial-gradient(
      farthest-side at top right,
      var(--gradient-right),
      transparent 500px
    ),
    radial-gradient(
      farthest-corner at top left,
      var(--gradient-left),
      transparent 600px
    ),
    radial-gradient(
      farthest-corner at bottom right,
      var(--gradient-background-right),
      transparent 500px
    ),
    radial-gradient(
      farthest-corner at bottom left,
      var(--gradient-background-left),
      transparent 600px
    );
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
`;
