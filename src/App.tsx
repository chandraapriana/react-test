import "./assets/scss/index.scss";
import HomePage from "./pages/home";
import "react-responsive-modal/styles.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <HomePage />
      <Toaster />
    </>
  );
}

export default App;
