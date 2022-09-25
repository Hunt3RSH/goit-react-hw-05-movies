import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadReviewsMovie } from 'Utills/Api/api';
import { Sections, Title } from 'Views/HomeView/HomeView.styled';
import {
  AuthorImg,
  AuthorName,
  AuthorWrapper,
  ReviewContent,
  ReviewList,
  ReviewListItem,
} from './ReviewsView.styled';
import image from '../CastView/image.png';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  const ReviewsNull = reviews.length === 0;

  const AvatarAuthor = avatar => {
    if (avatar === null) {
      return `${image}`;
    }
    if (avatar.includes('http') === true) {
      return `${avatar.slice(1)}`;
    }
    return `${BASE_URL}${avatar}`;
  };

  return ReviewsNull ? (
    <Sections>
      <Title>We don't have any reviews for this movie</Title>
    </Sections>
  ) : (
    <Sections>
      <ReviewList>
        {reviews.map(review => {
          const { id, content, author } = review;
          const avatar = review.author_details.avatar_path;

          return (
            <ReviewListItem key={id}>
              <AuthorWrapper>
                <AuthorImg src={AvatarAuthor(avatar)} alt={author} />
                <AuthorName>{author}</AuthorName>
              </AuthorWrapper>

              <ReviewContent>{content}</ReviewContent>
            </ReviewListItem>
          );
        })}
      </ReviewList>
    </Sections>
  );
};
export default Reviews;
