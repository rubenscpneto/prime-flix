import RoutersApp from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutersApp/>
    </div>
  );
}

export default App;
