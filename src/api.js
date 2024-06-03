import axios from "axios";

export const baseURL = "http://localhost:8080";

export const fetchBooks = (query) => {
  return axios.get(`/books/search?query=${query}`);
};

export const fetchallBookslist = async () => {
  return await axios.get(`${baseURL}/books}`);
};

export const fetchBookById = (id) => {
  return axios.get(`${baseURL}/books/${id}`);
};

export const submitReview = (review) => {
  return axios.post(`${baseURL}/reviews`, review, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
