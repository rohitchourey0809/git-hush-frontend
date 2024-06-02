import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import { fetchBooks, fetchallBookslist } from "../api";
import axios from "axios";
import { baseurl } from "../services/api";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchallBooks = async () => {
    try {
      const data = await axios.get(`${baseurl}/api/books`);
      console.log("data", data.data);
      setBooks(data.data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchallBooks();
  }, []);

  return (
    // <div>
    
      /* <SearchBar onSearch={loadBooks} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div> */
    
    <BookList books={books} />
  );
};

export default HomePage;
