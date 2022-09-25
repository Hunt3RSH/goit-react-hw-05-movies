import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const SearchBox = styled.form`
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 0px rgb(255 255 255 / 20%);
  color: #fff;
  margin-bottom: 0px;
  margin-left: 15px;
  margin-right: 15px;
  outline: none;
  height: 27px;
  padding: 0px 6px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  background-image: none;
  background-color: #316282;
`;

export const SearchInput = styled.input`
  color: #0e1c25;
  font-size: 14px;
  margin-top: 1px;
  text-shadow: 1px 1px 0px rgb(255 255 255 / 10%);
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: 300;
  border: none;
  background-color: transparent;
  color: #eeeeee;
  margin-top: 2px;
  margin-left: 5px;
  width: 100%;
  outline: none;
  line-height: 26px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 2px;
  top: 0;
  background: none;
  border: none;
  cursor: pointer;
  background-image: url(https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png);
`;
