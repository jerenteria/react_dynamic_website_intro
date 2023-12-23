import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';



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

// renders the items in core concepts section by receiving props(html/jsx attributes) set below like title, description, image
// you can use one function to render the same component but with different data by setting the data with key value pairs with different
// data like in the core concepts section in jsx
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title="Components"
          description="The Core UI building block."
          image={componentsImg}
          />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
