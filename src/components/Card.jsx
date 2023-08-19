const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <img
        className="card-profil"
        src={`../../public/assets/${props.coverImg}`}
      />
      <div className="card-rates">
        <img
          style={{ height: '14px' }}
          src="../../public/assets/star.png"
          alt="star"
        />
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
