import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const LinkStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    filter: brightness(1.1) contrast(0.95) saturate(1);
    img {
      scale: 1.01;
    }
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
  grid-gap: 15px;
  margin: 0 auto;
  padding: 0 15px;
  list-style: none;
  justify-content: center;
  margin-top: 40px;
`;

export const MovieCard = styled.li`
  width: 100%;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 3px;
  padding: 0px 0px 0px 0px;
  font-size: 13px;
  overflow: hidden;
  padding: 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
  margin-top: 5px;
  margin-bottom: 15px;
`;
