import React from "react";
import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";

const BookDetailsPage = () => {
  const { id } = useParams();
 console.log("id",id);
  return <BookDetails bookId={id} />;
};

export default BookDetailsPage;
