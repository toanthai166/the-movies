import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const HeaderStyle = styled.div`
  width: 100%;
  background-color: rgb(30 41 59);
  margin-bottom: 10px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    padding: 20px 0;
    margin: 0 auto;
  }
  .header-logo {
    display: flex;
  }

  .header-logo img {
    width: 40px;
    height: 40px;
  }
  .header-logo a {
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    :hover {
      color: #f51010db;
    }
  }
  nav {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  .menu-item {
    display: flex;
    gap: 5px;
    :hover {
      color: #f51010db;
    }
  }
  .menu-item span {
    font-size: 20px;
    font-weight: 500;
  }

  .nav-btn {
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    padding: 5px 20px;
  }

  @media only screen and (max-width: 1024px) {
    .header-logo {
      margin: 0 auto;
    }
    .nav-btn {
      visibility: visible;
      opacity: 1;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      opacity: 1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 1;
      background: black;
      gap: 1.5rem;
      transition: 1s;
      transform: translateY(-100vh);
    }

    .responsive_nav {
      transform: none;
    }
    .btn-close {
      position: absolute;
      top: 40px;
      right: 30px;
    }
  }
`;

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <HeaderStyle>
      <header className="header">
        <div className="header-logo">
          <img src="../logomobi.png" alt="" />
          <NavLink to="/" className="">
            tMovies
          </NavLink>
        </div>
        <button onClick={showNavbar} className="nav-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <nav ref={navRef}>
          <button onClick={showNavbar} className="nav-btn btn-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a href="/" className="menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Home</span>
          </a>
          <a href="/movies" className="menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              />
            </svg>
            <span> Movies</span>
          </a>
          <a href="/tv" className="menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M17.45 3.473a.75.75 0 10-.4-1.446L5.313 5.265c-.84.096-1.671.217-2.495.362A2.212 2.212 0 001 7.817v7.933A2.25 2.25 0 003.25 18h13.5A2.25 2.25 0 0019 15.75V7.816c0-1.06-.745-2-1.817-2.189a41.124 41.124 0 00-5.406-.589l5.673-1.565zM16 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9.26-5a.75.75 0 01.75-.75H6a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V11zm2.75-.75a.75.75 0 00-.75.75v.01c0 .415.336.75.75.75H8a.75.75 0 00.75-.75V11a.75.75 0 00-.75-.75h-.01zm-1.75-1.5A.75.75 0 016.99 8H7a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm3.583.42a.75.75 0 00-1.06 0l-.007.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.06 0l.007-.007a.75.75 0 000-1.061l-.007-.007zm.427 2.08A.75.75 0 0111 12v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12a.75.75 0 01.75-.75h.01zm-.42 3.584a.75.75 0 000-1.061l-.007-.007a.75.75 0 00-1.06 0l-.007.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.06 0l.008-.007zm-3.59.416a.75.75 0 01.75-.75H7a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm-1.013-1.484a.75.75 0 00-1.06 0l-.008.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.061 0l.007-.007a.75.75 0 000-1.061l-.007-.007zM3.75 11.25a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12a.75.75 0 01.75-.75h.01zm1.484-1.012a.75.75 0 000-1.061l-.007-.007a.75.75 0 00-1.06 0l-.007.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.06 0l.007-.007zM7.24 13a.75.75 0 01.75-.75H8a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V13zm-1.25-.75a.75.75 0 00-.75.75v.01c0 .415.336.75.75.75H6a.75.75 0 00.75-.75V13a.75.75 0 00-.75-.75h-.01z"
                clipRule="evenodd"
              />
            </svg>

            <span>TV Series</span>
          </a>
        </nav>
      </header>
    </HeaderStyle>
  );
};

export default Header;
