import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import data from './data.jsx';

const App = () => {
  // <Hero />;
  const cards = data.map((item) => {
    const { title, price, coverImg, location, stats, id } = item;
    return (
      <Card
        title={title}
        price={price}
        coverImg={coverImg}
        location={location}
        rating={stats.rating}
        reviewCount={stats.reviewCount}
        key={id}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
};

export default App;
