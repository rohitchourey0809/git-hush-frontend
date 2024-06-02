import React from "react";

const Favourite = () => {
  const favourites = Object.keys(localStorage)
    .map((key) => {
      try {
        return {
          _id: key,
          ...JSON.parse(localStorage.getItem(key)),
        };
      } catch (error) {
        console.error(`Error parsing JSON for key "${key}":`, error);
        return null; // Skip this entry if parsing fails
      }
    })
    .filter(Boolean); // Filter out entries that failed parsing

  return (
    <div className="p-20">
      <center className="font-bold mb-4">
        <h2>Favourite Books</h2>
      </center>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favourites.map((book) => (
          <div
            key={book.id}
            className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              className="w-full h-48 object-cover"
              src="https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
              alt={book?.title}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{book?.title}</h3>
              <p className="text-gray-700 mb-4">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
