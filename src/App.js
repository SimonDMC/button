import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import 'firebase/compat/firestore';

// CHANGE THIS WHEN TESTING (main/dev)
const ENV = 'dev';

function App() {
  return (
    <div>
      <div className="main">
        <Button env={ENV}/>
        <Counter env={ENV}/>
      </div>
      <span className="disclaimer">Disclaimer: This project is in beta, expect the count to reset at any point.</span>
    </div>
  );
}

export default App;