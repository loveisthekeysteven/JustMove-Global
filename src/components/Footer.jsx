import React from "react";
import styled from "styled-components";
import logo from "../assets/traveloLogo.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+2348155437534";
  const returnURL = "http://localhost:3000/";

  const handleClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      "Hello! I contacted you from your website."
    );
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
    window.location.href = returnURL;
  };
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Life is short and the world is wide, Let's travel!</p>
      </div>
      <div className="columns">
        <div className="column">
          <h3>Links</h3>
          <p>Home</p>
          <p>Destinations</p>
          <p>Packages</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="column">
          <h3>Support</h3>
          <p>Contact</p>
          <p>Support Center</p>
          <p>Feedback</p>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>+234 7066858528</p>
          <p>info@justmoveglobal.com</p>
        </div>
        <div className="column iconColumn">
          {/* <AiFillInstagram className="icon" />
          <BsFacebook className="icon" />
          <AiFillTwitterCircle className="icon" />
          <SiGmail className="icon" /> */}
          <a
            href="https://www.instagram.com/justmoveglobal__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="icon" />
          </a>
          <a
            href="https://www.facebook.com/justmoveglobal__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="icon" />
          </a>
          <a
            href="https://twitter.com/JustmoveG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="icon" />
          </a>
          <a href="mailto:info@justmobegloba.com">
            <SiGmail className="icon" />
          </a>
          <a href="#" onClick={handleClick}>
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background: #252525;
  display: flex;
  justify-content: space-around;
  padding: 4em 4%;
  gap: 1em;
  color: white;
  .logo {
    img {
      width: 200px;
    }
  }
  .columns {
    display: flex;
    gap: 3em;
    h3 {
      font-weight: 600;
      padding-bottom: 10px;
    }
    p {
      cursor: pointer;
      color: gray;
      :hover {
        color: white;
      }
    }
    .iconColumn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      a {
        color: inherit; /* Use the parent color for links */
        text-decoration: none; /* Remove default underline */

        .icon {
          font-size: 24px;
          cursor: pointer;

          :hover {
            color: var(--primaryColor);
            transform: scale(1.1);
          }
        }
      }
      .icon {
        font-size: 24px;
        cursor: pointer;
        :hover {
          color: var(--primaryColor);
          transform: scale(1.1);
        }
      }
    }
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
  @media (max-width: 597px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .columns {
      flex-direction: column;
      text-align: center;
      .iconColumn {
        flex-direction: row;
      }
    }
  }
`;

export default Footer;
