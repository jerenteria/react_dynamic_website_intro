import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// get random integer which will decide the index of random word above
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  {/* dynamically output random descriptions from reactDescriptions by getting random index with a max value of 2
  because index 2 is the last option */}
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
      going to build!
    </p>
    </header>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
