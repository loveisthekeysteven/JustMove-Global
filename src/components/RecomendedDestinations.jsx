import React from "react";
import styled from "styled-components";
import canada from "../assets/homePageImages/canada2.webp";
import Sweden from "../assets/homePageImages/sweden2.jpg";
import uk from "../assets/homePageImages/uk1.jpg";
import poland from "../assets/homePageImages/poland1.jpg";

import fiveStarIcon from "../assets/homePageImages/5starsIcon.png";
import { Link } from "react-router-dom";

const RecomendedDestinations = () => {
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
      <h2 className="title">Recomended Destinations</h2>
      <div className="cards">
        <div className="card">
          <img src={canada} alt="" />
          <div>
            <h2>Canada</h2>

            <img src={fiveStarIcon} alt="" />

            <p>
              Canada is a major destination for international students. The
              country is one of the world's leaders in higher education, and
              they offer students a wide range of opportunities and experiences.
            </p>
            <p>Study permit (Student visa)</p>
            <p>Spouse or Common-Law Open Work Permit (SOWP)</p>
            <p>Express Entry</p>
            <p>Business Investor</p>
            <p>Canada’s provincial nomination migration route</p>

            {/* <Link to={"/santorini"} className="link-styles">
              <button>LET'S VISIT</button>
            </Link> */}
            <a href="#" onClick={handleClick}>
              <button>LET'S Migrate</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Sweden} alt="" />
          <div>
            <h2>Sweden</h2>

            <img src={fiveStarIcon} alt="" />
            <p>
              Higher education in Sweden is among the best in the world. Most
              Swedes have advanced English skills, which means you can
              communicate with ease.There are over 60 Bachelor’s and 900
              Master’s degrees you can choose from, a wide variety of
              English-taught study programmes and disciplines,numerous
              scholarships and financial aid programmes, and also flexible
              policies to work during studies.
            </p>
            <p>Study permit (Student visa)</p>
            {/* <Link to={"/dubai"} className="link-styles">
              <button>LET'S VISIT</button>
            </Link> */}
            <a href="#" onClick={handleClick}>
              <button>LET'S Migrate</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={uk} alt="" />
          <div>
            <h2>United Kingdom</h2>
            <img src={fiveStarIcon} alt="" />
            <p>
              Education or study route to the United Kingdom is one of the
              clear-cut paths to migrate to the UK. It may take time, but with
              proper time management and planning, you can get your application
              approved ahead of schedule and be on your way to the UK. The
              Skilled Work visa allows you to come to or stay in the UK to do an
              eligible job with an approved employer. This visa has replaced the
              Tier 2 (General) work visa.
            </p>
            <p>Education in the UK Migration Route</p>
            <p>Skilled Worker UK Visa Migration Route</p>
            <a href="#" onClick={handleClick}>
              <button>LET'S Migrate</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={poland} alt="" />
          <div>
            <h2>Poland</h2>
            <img src={fiveStarIcon} alt="" />
            <p>
              Poland has a well-established higher education system with a mix
              of public and private universities, technical universities,
              medical schools, and art academies, Some of the prominent
              universities in Poland include the University of Warsaw,
              Jagiellonian University in Krakow, and Warsaw University of
              Technology
            </p>
            <p>Study permit (student visa)</p>
            <p>Visa appointment date</p>
            <p>Work Permit (work visa)</p>
            <a href="#" onClick={handleClick}>
              <button>LET'S Migrate</button>
            </a>
          </div>
        </div>
        {/* <div className="card">
          <img src={mykonos} alt="" />
          <div>
            <h2>Mykonos</h2>
            <h3>Greece</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              An island of beauty and magic. Mykonos has been known as the
              island of the winds, and it's located in the heart of the Cyclades
              group. Mykonos offers luxury, history, top-notch cuisine,
              shimmering shores, and unique tours and activities.
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={miami} alt="" />
          <div>
            <h2>Miami</h2>
            <h3>Florida, USA</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              Miami is known for its strong Cuban Influence, warm weather,
              pristine beaches, and great diving sites. The city is also home to
              some famous teams and landmarks such as the Miami Heat, the iconic
              Miami tower, and the beautiful Everglades National Park.
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={ksamil} alt="" />
          <div>
            <h2>Ksamil</h2>
            <h3>Saranda, Albania</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              Ksamil is known for some of its popular attractions. Ksamil is one
              of the beautiful coastal towns along the Albanian Riviera. It’s
              home to some incredible beaches. Here, crystal clear waters back
              onto soft sandy shorelines dotted with colorful umbrellas.
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={bali} alt="" />
          <div>
            <h2>Bali</h2>
            <h3>Indonesia</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              Also known as the Land of the Gods, Bali appeals through its sheer
              natural beauty of looming volcanoes and lush terraced rice fields
              that exude peace and serenity. It is also famous for surfers'
              paradise!
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div> */}
        {/* <div className="card">
          <Link to={"/destinations"} className="link-styles">
            <div>
              <button>SEE ALL</button>
            </div>
          </Link>
        </div> */}
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  .title {
    text-align: center;
    font-size: 2.7em;
    font-weight: 500;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    margin-top: 3em;
    .card {
      width: 80vw;
      height: auto;
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff;
      border-radius: 2em;
      border: 1px solid #e0e0e0;
      position: sticky;
      top: 5em;
      :nth-child(2) {
        top: 7em;
      }
      :nth-child(3) {
        top: 9em;
      }
      :nth-child(4) {
        top: 11em;
      }
      :nth-child(5) {
        top: 13em;
      }
      :nth-child(6) {
        top: 15em;
      }
      :nth-child(7) {
        top: 17em;
      }
      :nth-child(8) {
        top: 19em;
      }
      :nth-child(9) {
        top: 21em;
        background: white;
        height: 400px;
        button {
          font-size: 30px;
          padding: 14px 30px;
        }
      }
      img {
        width: 50%;
        border-radius: 2em 0 0 2em;
      }
      div {
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        align-items: flex-start;
        h2 {
          font-weight: 500;
        }
        h3 {
          font-weight: 400;
          color: gray;
          line-height: 10px;
        }
        img {
          width: 100px;
          margin: 10px 0;
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
    }
  }
  @media (max-width: 1180px) {
    .cards {
      .card {
        width: 94vw;
      }
    }
  }
  @media (max-width: 1120px) {
    .cards {
      .card {
        p {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .cards {
      .card {
        div {
          img {
            width: 70px;
          }
          h2 {
            font-size: 20px;
          }
          h3 {
            font-size: 17px;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .cards {
      .card {
        div {
          p {
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
  @media (max-width: 650px) {
    .cards {
      gap: 7em;
      .card {
        flex-direction: column;
        gap: 0px;
        img {
          border-radius: 20px;
          width: 60%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .cards {
      .card {
        img {
          border-radius: 20px;
          width: 100%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
`;

export default RecomendedDestinations;
