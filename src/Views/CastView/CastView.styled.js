import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 5fr));
  grid-gap: 15px;
  margin: 0 auto;
  padding: 0 15px;
  list-style: none;
  justify-content: center;
  margin-top: 40px;
`;

export const CastCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 3px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    filter: brightness(1.1) contrast(0.95) saturate(1);
  }
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const CastInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
  gap: 15px;
`;

export const CastCharacter = styled.span`
  color: white;
  font-weight: 500;
`;

export const CharacterName = styled.p`
  margin: 0;
`;

export const CastName = styled.p`
  color: white;
  font-size: 20px;
  margin: 0;
  font-weight: 700;
`;
