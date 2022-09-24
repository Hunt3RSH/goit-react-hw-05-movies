import {
  Navigation,
  NavList,
  NavListItem,
  NavListLink,
  NavWrapper,
} from './Header.styled';
import TMDB from './TMDB.svg';

export const Header = () => {
  return (
    <NavWrapper>
      <Navigation>
        <NavListLink to="/" end>
          <img src={TMDB} alt="TMDB" width={70} />
        </NavListLink>
        <NavList>
          <NavListItem>
            <NavListLink to="/" end>
              Home
            </NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="movies">Movies</NavListLink>
          </NavListItem>
        </NavList>
      </Navigation>
    </NavWrapper>
  );
};
