import star from '../assets/star.png';

const Card = (props) => {
  const { title, price, coverImg, location, stats, id, openSpots } = props;

  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location) {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card" key={id}>
      <img className="card-profil" src={`../../public/images/${coverImg}`} />

      {openSpots === 0 && <div className="card-badge">{badgeText} </div>}
      {location === 'Online' && <div className="card-badge">{badgeText} </div>}

      <div className="card-rates">
        <img style={{ height: '14px' }} src={star} alt="star" />
        <p>{stats.rating}</p>
        <p>
          ({stats.reviewCount}) • {location}
        </p>
      </div>
      <p>{title}</p>
      <p>
        <span>${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
