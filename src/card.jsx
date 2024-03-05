
import PropTypes from 'prop-types';

function Card({image, title, description}) {
  return (
    <>
      <div className="card">
          <img className="card-image" src={image} alt="profile picture" />
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
      </div>

      <hr />
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;