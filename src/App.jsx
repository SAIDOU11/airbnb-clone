import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import data from './data.jsx';

const App = () => {
  // <Hero />;
  const cards = data.map((item) => {
    const { title, price, coverImg, location, stats, id, openSpots } = item;

    return (
      <Card
        title={title}
        price={price}
        coverImg={coverImg}
        location={location}
        rating={stats.rating}
        reviewCount={stats.reviewCount}
        key={id}
        openSpots={openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
};

export default App;
