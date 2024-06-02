import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BookCard = ({ book, onFavoriteClick }) => {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(book._id) === "true"
  );

  const handleFavoriteClick = (book) => {
    const updatedFavoriteStatus = !isFavorite;
    setIsFavorite(updatedFavoriteStatus);

    try {
      if (updatedFavoriteStatus) {
        localStorage.setItem(book._id, JSON.stringify(book)); // Add to localStorage
        toast.success("Added to Favorites");
      } else {
        localStorage.removeItem(book._id); // Remove from localStorage
        toast.success("Removed from Favorites");
      }
      onFavoriteClick(book);
    } catch (error) {
      console.error("Error storing book in localStorage:", error);
    }
  };

  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        className="w-full h-48 object-cover"
        src="https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
        alt={book?.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{book?.title}</h3>
        <p className="text-gray-700 mb-4">{book.author}</p>
        <p className="text-gray-700 mb-4">{book.genre}</p>
        <Link
          to={`/books/${book._id}`}
          className="animate-bounce inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mr-2"
        >
          View Details
        </Link>
        <button
          className={`animate-bounce inline-block ${
            isFavorite ? "bg-red-400" : "bg-yellow-400"
          } text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-200`}
          onClick={() => handleFavoriteClick(book)}
        >
          {isFavorite ? "Remove from Favorites" : "Mark as Favorite"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
