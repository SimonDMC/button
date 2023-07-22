import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "firebase/compat/firestore";

// CHANGE THIS WHEN TESTING (main/dev)
const ENV = "dev";

// remove context menu
document.oncontextmenu = function () {
    return false;
};

function App() {
    return (
        <div>
            <div className="main">
                <Button env={ENV} />
                <Counter env={ENV} />
            </div>
        </div>
    );
}

export default App;
