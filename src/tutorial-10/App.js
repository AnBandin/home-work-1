import './App.css';
import Search from './components/Search';
import {useState} from 'react';
import Card from './components/Card';

const App = () => {
  const [user, setUser] = useState(undefined);

  return (
    <div className="body">
      <div id="app">
        <div className="app-container">
          <Search setUser={setUser} />
          {user && <Card user={user} />}
        </div>
      </div>
    </div>
  );
};

export default App;
