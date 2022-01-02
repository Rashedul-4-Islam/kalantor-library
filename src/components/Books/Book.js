import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = ({ order }) => {
  return (
    <div className="book_list  text-center py-3">
      <img className="w-75 h-75  m-auto" src={order.img} alt="" />
      <p>{order.bookName}</p>
      <p>{order.writer}</p>
      <p>{order.writer}</p>
      <p>
        <del className="me-3">TK {order.printedPrice}</del>
        <span className="fw-bold ">TK {order.discountPrice}</span>
      </p>
      <div className="add_to_cart">
        <h6>Add to Cart</h6>
      </div>
      <div className="view_details">
        <Link to={`bookdetails/${order.id}`} className="btn p-0">
          view details
        </Link>
      </div>
    </div>
  );
};

export default Book;
