import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: block;
  border-radius: 2px;
  background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  color: white;

  &:hover,
  &:focus {
    background: linear-gradient(to right, #8ed629 5%, #6aa621 95%);
  }
`;

export const ButtonOverflow = styled(Link)`
  display: block;
  border-radius: 2px;
  background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  color: white;

  &:hover,
  &:focus {
    background: linear-gradient(to right, #8ed629 5%, #6aa621 95%);
  }
  img {
    @media screen and (max-width: 959px) {
      display: none;
    }
  }
  span {
    @media screen and (min-width: 960px) {
      display: none;
    }
  }
  @media screen and (min-width: 960px) {
    position: fixed;
    z-index: 110;
    top: 0;
    left: 0;
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    opacity: 0.4;
    img {
      opacity: 0.5;
    }
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  gap: 30px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AdditionalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleDetais = styled.h2`
  font-size: 30px;
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
  max-width: 480px;
  width: 100%;
`;

export const MovieWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 30px;
`;

export const BtnInfoWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const BtnText = styled.span`
  font-size: 15px;
`;
