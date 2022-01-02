import React from "react";
import Hero from "../../Hero/Hero";
import NavigationMenu from "../../Shear/NavigationMenu/NavigationMenu";
import PreOrder from "../../../Data/PreOrder/PreOrder";
import { Link } from "react-router-dom";

const PreOrderAllItem = () => {
  return (
    <div>
      <Hero />
      <NavigationMenu />
      <div className="container bg-light p-2">
        <h2 className="pb-3">Total Available Books {PreOrder.length}</h2>
        <Link to="/home">Back to Home</Link>
        <div className="row">
          {PreOrder.map((item) => (
            <div
              className="col-lg-2 text-center  book_list py-3 my-2"
              item={item}
              key={item.id}
            >
              <img className="w-100 h-75  m-auto" src={item.img} alt="" />
              <p className="pt-3">{item.bookName}</p>
              <p>{item.writer}</p>
              <p>
                <del className="me-3">TK {item.printedPrice}</del>
                <span className="fw-bold ">TK {item.discountPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreOrderAllItem;
