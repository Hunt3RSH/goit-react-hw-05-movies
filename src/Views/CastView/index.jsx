import { Suspense, useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { loadCastInfoMovie } from 'Utills/Api/api';
import { Sections, Title } from 'Views/HomeView/HomeView.styled';
import {
  CastCard,
  CastCharacter,
  CastImg,
  CastInfoWrapper,
  CastList,
  CastName,
  CharacterName,
} from './CastView.styled';
import image from './image.jpg';

const BASE_PHOTO_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    loadCastInfoMovie(movieId).then(setCastInfo);
  }, [movieId]);

  if (castInfo.length === 0) {
    return null;
  }
  const ProfilePoster = profile_path => {
    if (profile_path === null) {
      return `${image}`;
    }
    return `${BASE_PHOTO_URL}${profile_path}`;
  };

  return (
    <Suspense
      fallback={
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="loaderStyle"
        />
      }
    >
      <Sections>
        <Title>Cast</Title>
        <CastList>
          {castInfo.map(actor => {
            const { name, character, profile_path, id } = actor;
            return (
              <CastCard key={id}>
                <div>
                  <CastImg src={`${ProfilePoster(profile_path)}`} alt={name} />
                </div>
                <CastInfoWrapper>
                  <CastName>{name}</CastName>
                  <CharacterName>
                    Character: <CastCharacter> {character}</CastCharacter>
                  </CharacterName>
                </CastInfoWrapper>
              </CastCard>
            );
          })}
        </CastList>
      </Sections>
    </Suspense>
  );
};
export default Cast;
