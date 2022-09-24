import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  border-radius: 2px;
  background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  color: white;
  margin-bottom: 20px;
  margin-left: 15px;

  &:hover,
  &:focus {
    background: linear-gradient(to right, #8ed629 5%, #6aa621 95%);
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  padding-bottom: 15px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DetaisWrapper = styled.div`
  max-width: 400px;
  background-color: #101214;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  padding: 10px;
  border-radius: 3px;
`;

export const Img = styled.img`
  display: block;
  max-width: 450px;
  width: 100%;
`;

export const MovieWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;
