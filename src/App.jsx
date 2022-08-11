import reactLogo from './assets/react.svg';
import eveveLogo from './assets/eveve-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.eveve.com" target="_blank">
          <img
            src={eveveLogo}
            className="logo react"
            alt="Vite logo"
            data-testid="eveve-logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            data-testid="react-logo"
          />
        </a>
      </div>
      <h1>Eveve React Test</h1>
    </div>
  );
}

export default App;
