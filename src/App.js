import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Lo mà học đi xem xem cái gì. Code đi.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Đọc Doc của React đi rồi làm
        </a>
      </header>
    </div>
  );
}

export default App;
