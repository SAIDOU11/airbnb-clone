import star from '../assets/star.png';

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location) {
    badgeText = 'ONLINE';
  }
  return (
    <div className="card" key={props.id}>
      <img
        className="card-profil"
        src={`../../public/images/${props.coverImg}`}
      />

      {props.openSpots === 0 && <div className="card-badge">{badgeText} </div>}
      {props.location === 'Online' && (
        <div className="card-badge">{badgeText} </div>
      )}

      <div className="card-rates">
        <img style={{ height: '14px' }} src={star} alt="star" />
        <p>{props.ratings}</p>
        <p>
          ({props.reviewCount}) • {props.location}
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        <span>${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
