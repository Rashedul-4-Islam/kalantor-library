import React, { useState } from "react";
import "./Hero.css";
import Logo from "../../Images/logo/Namlipi.png";
import google from "../../Images/logo/google.png";
import facebook from "../../Images/logo/facebook.jpg";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Hero = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  console.log(data)
  const handleFilter = e => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo ">
          <img src={Logo} alt="" />
        </div>
        <div className="search_input">

              {/* <label
                className="visually-hidden"
                htmlFor="inlineFormInputGroupUsername"
              >
                Username
              </label> */}
              {/* you need work here some reponsive 
              below  i just copy my code*/}


              <div className="search">
                <div className="searchInputs">
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                  />
                  <div className="searchIcon">
                    {filteredData.length === 0 ? (
                      <SearchIcon />
                    ) : (
                      <CloseIcon
                      id="clearBtn" onClick={clearInput} />
                    )}
                  </div>
                </div>
                    {filteredData.length !== 0 && (
                  <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                      return (
                        <a className="dataItem" href={value.link} target="_blank" rel='noreferrer'>
                          <p>{value.author} </p>
                        </a>
                      );
                    })}
                  </div>
                  )}
    
                    {/* <div className="input-group">
                    <input
                  type="text"
                  className="form-control input_area"
                  id="inlineFormInputGroupUsername"
                  placeholder={placeholder}
                    />
                     <div className="input-group-text">
                  <div className="icon">Search</div>
                    </div>
                    </div> */}
              </div>
      
           </div>
           <div className="login">
          <div className="hover_login">
            <i className="fas fa-cart-plus  fs-5 me-2 me-4 addToCard"></i>
            <button className="btn border ">Login</button>
          </div>
          <div className="login_after_hover">
            <div className="login_box p-3">
              <h4>New User?</h4>
              <p>Sign up with just one click</p>
              <div className="login_icon_facebook_google d-flex">
                <div className="facebook me-3 border p-1 px-2">
                  <img src={facebook} alt="" />
                  Facebook
                </div>
                <div className="google  me-3 border p-1 px-2">
                  <img src={google} alt="" />
                  Google
                </div>
              </div>
              <p className="pt-3 pb-0">Login with Email and password</p>
              <div className="login_input_area">
                <form>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <p>Forget password ?</p>
                  <button className="login_btn">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
