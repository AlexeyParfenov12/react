import "./App.css";
import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <h1>
        <div className="App-header">
          <Greetings firstName="John" />
        </div>
      </h1>
    </div>
  );
}

export default App;
