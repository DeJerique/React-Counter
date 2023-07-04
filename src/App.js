import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import WelcomeMessage from './Components/Welcomemsg';

// function WelcomeMessage() {
//   return <p>Welcome!</p>
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <WelcomeMessage /> */}
        <WelcomeMessage />
        <Counter />
        {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
      </header>
    </div>
  );
}

export default App;
