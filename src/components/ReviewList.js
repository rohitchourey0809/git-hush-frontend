import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <div className="mt-6">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="p-4 mb-4 bg-gray-100 rounded-lg shadow-sm"
        >
          <p className="text-yellow-500 font-semibold">
            <strong>Rating:</strong> {review.rating}
          </p>
          <p className="text-gray-800">
            <strong>Comment:</strong> {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
