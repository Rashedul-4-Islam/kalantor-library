import React from "react";
import { Link } from "react-router-dom";
import "./RelatedBooks.css";

const RelatedBooks = ({ findItem }) => {
  return (
    <div className="related_book_list book_list  text-center py-3 related_items">
      <img className="w-75 h-75  m-auto" src={findItem.img} alt="" />
      <p>{findItem.bookName}</p>
      <p>{findItem.writer}</p>
      <p>{findItem.writer}</p>
      <p>
        <del className="me-3">TK {findItem.printedPrice}</del>
        <span className="fw-bold ">TK {findItem.discountPrice}</span>
      </p>
      <div className="add_to_cart related_add_to_card">
        <h6>Add to Cart</h6>
      </div>
      <div className="view_details">
        <Link to={`../bookdetails/${findItem.id}`} className="btn p-0">
          view details
        </Link>
      </div>
    </div>
  );
};

export default RelatedBooks;
