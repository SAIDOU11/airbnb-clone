import image from '../assets/photo-grid.png';

const Hero = () => {
  return (
    <>
      <div className="image-layout">
        <img
          style={{ height: '430px', width: '80%' }}
          src={image}
          alt="Airbnb experiences"
        />
      </div>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
};

export default Hero;
