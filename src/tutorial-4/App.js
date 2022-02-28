import './App.css';
import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';
import {useState} from 'react';
import {adjectivesArr, nounsArr} from './components/data';

export default function App() {
  const [phrases, setPhrases] = useState([]);
  const cleanArray = [];

  const generatePhrase = () => {
    const first = getRandomPhrase(adjectivesArr);
    const second = getRandomPhrase(adjectivesArr);
    const third = getRandomPhrase(nounsArr);
    let text = `${first} ${second} ${third}`;
    setPhrases([text, ...phrases]);
  };

  const cleanPhrases = () => setPhrases(cleanArray);

  function getRandomPhrase(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const renderPhrases = (
    <div className="list">
      {phrases.map((phrase, index) => (
        <Phrase key={index} text={phrase} />
      ))}
    </div>
  );

  return (
    <div className="wrapper">
      {phrases.length ? renderPhrases : <EmptyBlock />}
      <button onClick={generatePhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={cleanPhrases} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}
