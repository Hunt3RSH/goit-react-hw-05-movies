import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Styled404 = styled.div`
  position: relative;
`;

export const Title404 = styled.h2`
  font-size: 60px;
  font-weight: 500;
  position: relative;
  z-index: 3;
`;

export const SubTitle404 = styled.span`
  color: gray;
  font-size: 70px;
  font-weight: 700;
  position: absolute;
  transform: translate(-25%, -15%);
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
`;
