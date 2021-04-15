import { BrowserRouter as Router } from "react-router-dom";
import Directory from "../src/Pages/Directory";

function App() {
  return (
    <Router basename="/user-directory">
      <div>
        <Directory />
      </div>
    </Router>
  );
}

export default App;