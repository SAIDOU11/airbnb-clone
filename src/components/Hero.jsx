import image from '../assets/photo-grid.png';

const Hero = () => {
  return (
    <section className="hero">
      <img
        style={{ height: '430px', width: '85%' }}
        src={image}
        alt="Airbnb experiences"
      />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
