import React from "react";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <div className="border-bottom mb-4 pb-2 mt-3">
      <div className="container ">
        <div className="my_desing_navbar">
          <ul className="mb-2 mb-lg-0 px-5 mx-5">
            <li className="">
              <a className="" aria-current="page" href="/">
                লেখক
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                বিষয়
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                প্রকাশনী
              </a>
            </li>

            <li className="">
              <a className="" aria-current="page" href="/">
                প্রি-অর্ডার
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                ইসলামি বই
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                বেস্টসেলার বই
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                প্যাকেজ সমুহ
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                রিভিউ
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                ইতিহাস
              </a>
            </li>
            <li className="">
              <a className="" aria-current="page" href="/">
                উপন্যাস
              </a>
            </li>
          </ul>
        </div>
        {/* <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  লেখক
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  বিষয়
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  প্রকাশনী
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  প্রি-অর্ডার
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  ইসলামি বই
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  বেস্টসেলার বই
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  প্যাকেজ সমুহ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  রিভিউ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  ইতিহাস
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  উপন্যাস
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      </div>
    </div>
  );
};

export default NavigationMenu;
