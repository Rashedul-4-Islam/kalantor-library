import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import NavigationMenu from "../Shear/NavigationMenu/NavigationMenu";
import "./BookDetails.css";
import PreOrder from "../../Data/PreOrder/PreOrder";
import RelatedBooks from "../RelatedBooks/RelatedBooks";
import Slider from "react-slick";
import ReviewsRatings from "../ReviewsRatings/ReviewsRatings";
import Footer from "../Shear/Footer/Footer";
const BookDetails = () => {
  const { id } = useParams();
  const [bookItem, setBookItem] = useState({});
  useEffect(() => {
    const singleBook = PreOrder.find((book) => book.id == id);
    setBookItem(singleBook);
  }, [id]);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const Books = PreOrder.filter(
      (related) => related?.category === bookItem?.category
    );
    setCategory(Books);
  }, [bookItem]);
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Hero />
      <NavigationMenu />
      <div className="container p-0 mb-4">
        <Link to="/">Home</Link>
        {/* jusr img show in left side  */}
        <div className="row bg-light p-4 justify-content-center w-75 m-auto">
          <div className="col-lg-4">
            <div className="book border p-4 text-center ">
              <img
                className="single_book_details_img"
                src={bookItem?.img}
                alt="book"
              />
            </div>
          </div>
          {/* img details information in right side  */}

          <div className="col-lg-5">
            <p className="fs-5">{bookItem?.bookName} (sub title)</p>
            <p className="py-1">by {bookItem?.writer}</p>
            <p className="mb-2 py-2">
              Category মুক্তিযুদ্ধের ডায়েরি, চিঠি ও স্মৃতিচারণ
            </p>
            <p className="py-1 pb-3">***** 199 Ratings / 100 Reviews</p>
            <h5>
              <del className="me-3 fs-4">TK. {bookItem?.printedPrice}</del>
            </h5>
            <h5>
              <span className="fs-4 ">TK. {bookItem?.discountPrice}</span>
              <span className="fs-6"> You Save TK. 42 (14%)</span>
            </h5>
            <h6>
              {bookItem.inStock ? (
                <p>
                  <i className="fas fa-check-circle my-2 stock"></i> In Stock
                </p>
              ) : (
                <p className="my-2">stock out</p>
              )}
            </h6>
            <button className="custom_btn">একটু পড়ে দেখুন</button>
            <span>
              <button className="custom_btn">
                <i className="fas fa-cart-plus  me-2 addToCard"></i>
                add to card
              </button>
              <div className="share_link  text-center mt-3">
                <i className="fas fa-share-alt"></i>
                <span>Share This Book</span>
              </div>
            </span>
          </div>
        </div>
        {/* summary specification and author dislaration  */}
        <div className="row mt-3 bg-light p-4 w-75 m-auto">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Summary
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Specification
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Author
              </button>
            </li>
          </ul>
          <div
            className="tab-content mt-3 p-0  single_book_details"
            id="myTabContent"
          >
            <div
              className="tab-pane fade show active "
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {bookItem.summary}
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <table className="table border">
                <tbody>
                  {bookItem?.bookName ? (
                    <tr>
                      <td className="table_left">Title</td>
                      <td>{bookItem?.bookName}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.writer ? (
                    <tr>
                      <td className="table_left">Writer</td>
                      <td>{bookItem?.writer}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.translator ? (
                    <tr>
                      <td className="table_left">translator</td>
                      <td>{bookItem?.translator}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.editor ? (
                    <tr>
                      <td className="table_left">Editor</td>
                      <td>{bookItem?.editor}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.publisher ? (
                    <tr>
                      <td className="table_left">Publisher</td>
                      <td>{bookItem?.publisher}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.isbn ? (
                    <tr>
                      <td className="table_left">ISBN</td>
                      <td>{bookItem?.isbn}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.edition ? (
                    <tr>
                      <td className="table_left">Edition</td>
                      <td>{bookItem?.edition}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem?.numberOfPages ? (
                    <tr>
                      <td className="table_left">Number Of Pages</td>
                      <td>{bookItem?.numberOfPages}</td>
                    </tr>
                  ) : (
                    false
                  )}

                  {bookItem.quality ? (
                    <tr>
                      <td className="table_left">Quality</td>
                      <td>{bookItem?.quality}</td>
                    </tr>
                  ) : (
                    false
                  )}
                  {bookItem.language ? (
                    <tr>
                      <td className="table_left">Language</td>
                      <td>{bookItem?.language}</td>
                    </tr>
                  ) : (
                    false
                  )}
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row">
                <div className="col-lg-2">
                  <div className="text-center">
                    {bookItem.writerImg ? (
                      <img
                        src={bookItem.writerImg}
                        className="writer_available"
                        alt=""
                      />
                    ) : (
                      <i className="far fa-user writer_not_available"></i>
                    )}
                  </div>
                </div>
                <div className="col-lg-10">
                  <p>{bookItem.writer}</p>
                  {bookItem.summary ? <p>{bookItem.summary}</p> : false}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related_books w-75 m-auto bg-light p-4 mt-3">
          <h3>Related Books</h3>
          <div className="row">
            <Slider {...settings}>
              {category.map((findItem) => (
                <RelatedBooks
                  ke={findItem.id}
                  findItem={findItem}
                ></RelatedBooks>
              ))}
            </Slider>
          </div>
          <ReviewsRatings></ReviewsRatings>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
