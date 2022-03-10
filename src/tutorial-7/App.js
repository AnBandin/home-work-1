import {Header} from './components/Header';
import {Footer} from './components/Footer';
import RouterOutlet from './services/routing';

const App = () => {
  return (
    <>
      <Header />
      <RouterOutlet />
      <Footer />
    </>
  );
};

export default App;
