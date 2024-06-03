import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import axios from "axios";
import { baseurl } from "../services/api";
import { baseURL } from "../api";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = async (searchQuery = "", pageNum = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/api/books`, {
        params: { q: searchQuery, page: pageNum, limit: 5 },
      });
      const fetchedBooks = response.data;
      const totalBooks = response.data.total;

      setBooks(fetchedBooks);
      setTotalPages(Math.ceil(totalBooks / 5));
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    fetchBooks(searchQuery, 1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchBooks(query, page);
  }, [page, query]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
      {loading && <p>Loading...</p>}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default HomePage;
