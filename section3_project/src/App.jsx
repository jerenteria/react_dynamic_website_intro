import { useState } from 'react';
import Header from './components/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // set the state to whatever button was selected and output whatever is set to that button
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          /><CoreConcept 
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* dynamically render the info of the button that is selected */}
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
