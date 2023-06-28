import { Link } from "react-router-dom";
import "./Header.css";
import { BsCupHot, BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlineLogin, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = ({ isAuthenticated = false }) => {
  const [click, setClick] = useState(false);

  function clickHandler() {
    setClick(!click);
  }

  return (
    <div className="Header">
      <div className='header section_padding'>
        <div>
          <BsCupHot className='logo' /> CUPS..
        </div>
        <div className='links'>
          <Link className='link' to={"/"}>
            Home
          </Link>
          <Link className='link' to={"/contact"}>
            Contact
          </Link>
          <Link className='link' to={"/about"}>
            About
          </Link>
          <Link className='link' to={"/cart"}>
            <BsCart3 />
          </Link>
          <Link className='link' to={isAuthenticated ? "/me" : "/login"}>
            {isAuthenticated ? <FaUser /> : <AiOutlineLogin />}
          </Link>
        </div>
        <div className="menuBar">
        {click ? (
            <AiOutlineClose className='menu' onClick={clickHandler} />
          ) : (
            <AiOutlineMenu className='menu' onClick={clickHandler} />
          )}
          {click && (
            <div className="menuList">
              <Link className='link' to={"/"}>
                Home
              </Link>
              <Link className='link' to={"/contact"}>
                Contact
              </Link>
              <Link className='link' to={"/about"}>
                About
              </Link>
              <Link className='link' to={"/cart"}>
                <BsCart3 />
              </Link>
              <Link className='link' to={isAuthenticated ? "/me" : "/login"}>
                {isAuthenticated ? <FaUser /> : <AiOutlineLogin />}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
