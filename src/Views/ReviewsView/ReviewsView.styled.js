import styled from 'styled-components';

export const ReviewList = styled.ul`
  padding: 0 15px;
  margin: 0;
`;

export const ReviewListItem = styled.li`
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 26px;
  background-image: url(https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png);
  background-repeat: no-repeat;
  background-position: top left;
  padding: 15px 15px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AuthorImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: cover;
  padding: 2px;
  background: linear-gradient(
    to bottom,
    rgba(83, 164, 196, 1) 5%,
    rgba(69, 128, 151, 1) 95%
  );
`;

export const ReviewContent = styled.p`
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #acb2b8;
  margin-left: 8px;
`;

export const AuthorName = styled.p`
  color: #c1dbf4;
  font-size: 13px;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: bold;
`;
