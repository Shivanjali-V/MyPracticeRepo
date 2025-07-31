import React from "react";

function BookDetails(props) {
  const books = props.books;

  return (
    <div style={{ padding: "10px", borderRight: "4px solid green" }}>
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
