import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from './components/SayHello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <Welcome></Welcome>
      <Greetings name="GBC" id ="101418497"></Greetings>
      <SayHello fname= "Khoa" lname ="Huynh"></SayHello>
      </header>
      
    </div>
  );
}

export default App;
