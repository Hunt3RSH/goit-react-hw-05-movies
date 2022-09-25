import { useLocation } from 'react-router-dom';
import { Sections } from 'Views/HomeView/HomeView.styled';
import { ButtonLink } from 'Views/MovieDetailsView/MovieDetailsView.styled';
import {
  NotFoundWrapper,
  Styled404,
  SubTitle404,
  Title404,
} from './494.styled';

const NotFound = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  return (
    <Sections>
      <NotFoundWrapper>
        <Styled404>
          <Title404>404</Title404>
          <SubTitle404>ERROR</SubTitle404>
        </Styled404>
        <p>Page Not Found</p>
        <ButtonLink to={backLink}>Home page</ButtonLink>
      </NotFoundWrapper>
    </Sections>
  );
};
export default NotFound;
