import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Favourite from "./components/Favourite";
import Signup from "./components/Signup";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Navbar />

        <div className="mt-20">
          <ToastContainer />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:id" element={<BookDetailsPage />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
