import React, { useState } from "react";
import BookCard from "./BookCard";
import Favourite from "./Favourite";

const BookList = ({ books }) => {
  const [favourate, setFavourate] = useState([]);
const favouratedata = (favouratebook) => {
  setFavourate((prevFavourites) => [...prevFavourites, favouratebook]);
};


  console.log(favourate);
  return (
    <div className="p-20">
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onFavoriteClick={favouratedata}
          />
        ))}
      </div>
      {/* <Favourite favourate={favourate} /> */}
    </div>
  );
};

export default BookList;
