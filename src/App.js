import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Favourite from "./components/Favourite";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
