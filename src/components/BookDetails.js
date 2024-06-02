import React, { useEffect, useState } from "react";
import { fetchBookById } from "../api";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import axios from "axios";
import { baseurl } from "../services/api";

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBook = async () => {
    try {
      const { data } = await axios.get(`${baseurl}/api/books/${bookId}`);
      console.log("Deatisldata", data);
      setBook(data);
    } catch (error) {
      console.error("Failed to fetch book details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBook();
  }, [bookId]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!book) {
    return <p className="text-center text-red-500">Book not found</p>;
  }

  return (
    <center>
      <div
        className={`max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md transform transition-transform ${
          loading ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p className="text-xl mb-2">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-xl mb-2">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {book.description}
        </p>
        <p className="text-yellow-500 mb-6">
          <strong>Average Rating:</strong> {book.averageRating}
        </p>
        <ReviewList reviews={book.reviews} />
        <ReviewForm bookId={bookId} onReviewSubmitted={loadBook} />
      </div>
    </center>
  );
};

export default BookDetails;
