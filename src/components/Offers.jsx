import React from "react";
import styled from "styled-components";

const Offers = () => {
  const phoneNumber = "+2348155437534";
  const returnURL = "https://www.justmoveglobal.com/";

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
      <div className="card">
        <h2>Get 20% off by Early Booking</h2>
        <p>Book Now to get 30% off on more than 20 destinations</p>
        <a href="#" onClick={handleClick}>
          <button>Book Now</button>
        </a>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  display: flex;
  justify-content: center;
  .card {
    width: 88%;
    max-width: 800px;
    box-shadow: 25px 25px 51px #c2c2c2, -25px -25px 51px #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    h2 {
      color: var(--primaryColor);
      font-size: 2em;
      font-weight: 500;
    }
    p {
      color: gray;
    }
    button {
      padding: 10px 14px;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      border: none;
      background: #333333;
      color: white;
      border-radius: 7px;
      margin-top: 10px;
      :hover {
        background: var(--primaryColorDark);
        transition: 0.3s;
        cursor: pointer;
        :nth-child(2) {
          background-color: var(--secondaryBackgroundColor);
        }
      }
    }
  }
  @media (max-width: 620px) {
    .card {
      width: 100%;
    }
  }
  @media (max-width: 550px) {
    .card {
      text-align: center;
      h2 {
        font-size: 1.4em;
      }
    }
  }
`;

export default Offers;
