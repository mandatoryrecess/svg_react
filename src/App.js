import './App.css';
import SvgFlower from './svgr/Flower2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SvgFlower 
        colorLeaf="blue" 
        colorCenter="orange"/>
        <SvgFlower className="App-logo App-logo-spin"
        colorLeaf="white" 
        colorCenter="green"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
