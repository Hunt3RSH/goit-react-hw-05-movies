import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const LinkStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  display: block;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 3px;
  padding: 0px;
  font-size: 13px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  display: block;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 345px;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
  margin-top: 15px;
  padding: 0 7px;
  margin-bottom: 22px;
`;

export const MovieRating = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 0px 20px;
`;
export const VoteStyle = styled.span`
  color: ${props => (props.vote > 7 ? '#12f512' : 'yellow')};
  font-weight: 700;
`;
