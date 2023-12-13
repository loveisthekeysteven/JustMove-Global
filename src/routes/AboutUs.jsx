import React from "react";
import styled from "styled-components";
import logo from "../assets/traveloLogo.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Container>
      <motion.img
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -300 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          bounce: 0.3,
          type: "spring",
        }}
        src={logo}
        alt=""
      />
      <div className="items">
        <div className="item">
          <h2>Welcome to JustMove Global</h2>
          <p>
            JustMove Global was founded in 2019 with the aim of offering clients
            affordable airfare options. Initially, our client base consisted
            primarily of students traveling to Europe, the USA, and Canada for
            educational purposes. Due to high demand, we soon expanded our
            services to include processing admission and study visas, leading to
            the creation of JustMove Global Services. The name is a nod to the
            common phrase "just move," often used in response to complaints
            about one's circumstances.
          </p>
        </div>
        <div className="item">
          <h2>Our Mission</h2>
          <p>
            At JustMove Global Services, our mission is to offer exceptional
            service to each of our clients, providing them with a comprehensive
            understanding of the visa process and a complete solution to visa
            refusal. Our goal is to provide proactive customer service, ensuring
            a seamless and stress-free experience.
          </p>
        </div>
        <div className="item">
          <h2>Why Choose Us</h2>
          <ol>
            <li>
              <span>Admissions:</span>
              Our experienced immigration experts guide you through the
              admissions process, ensuring you choose the right educational
              institution and program that aligns with your goals. We streamline
              the application process, making it easier for you to secure
              admission to reputable institutions.
            </li>
            <li>
              <span>Study Permit:</span>Our concierge service goes beyond
              traditional immigration support. We offer personalized assistance
              to make your relocation seamless. From airport pickup to
              accommodation arrangements, our concierge service ensures a
              stress-free transition to your new life abroad, allowing you to
              focus on your studies or other endeavors.
            </li>
            <li>
              <span>Concierge:</span> Through our extensive network of partners
              worldwide, we secure exclusive access to top-notch accommodations,
              transportation, and immersive experiences. You get to indulge in
              the finest offerings each destination has to offer.
            </li>
            <li>
              <span>Super Visa:</span>For those wanting to reunite with family
              in Canada, our Super Visa services simplify the application
              process. We guide you through the requirements, ensuring a smooth
              application for the Super Visa, which allows extended stays for
              parents and grandparents.
            </li>
            <li>
              <span>Spousal Open Work Permit:</span> Reuniting with your spouse
              is a joyous occasion, and our experts specialize in securing
              spousal open work permits. We navigate the complexities of the
              application process, helping your spouse join you in Canada or
              other designated countries, empowering them to work and contribute
              to your shared journey.
            </li>
            <li>
              <span>Aviation Services:</span>As part of our comprehensive
              immigration services, we offer aviation services for clients who
              require specialized travel arrangements. Whether it's coordinating
              private flights or addressing unique travel needs, our team
              ensures a comfortable and secure travel experience.
            </li>
            <li>
              <span>POF (Proof of Funds) Services:</span>Demonstrating financial
              stability is a key component of immigration applications. Our POF
              services assist you in preparing and presenting accurate proof of
              funds documentation, enhancing the credibility of your application
              and increasing the likelihood of approval.
            </li>
          </ol>
        </div>
        <div className="item">
          <h2>Our Vision</h2>
          <p>
            At JustMove Global Services, our vision is to utilize our
            accumulated expertise to effectively work on visa applications and
            provide clients with practical solutions to their failed
            applications.
          </p>
        </div>
        <div className="item">
          <h2>Let's Create Your Perfect Journey</h2>
          <p>
            At JustMove Global , we exist to provide all you need to know about
            migration to another country, settling there and coming back home if
            you want to; or perhaps having some legroom back home. We are that
            encyclopedia warehousing these information and pointing you in the
            right direction.
          </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 12%;
  background: var(--backgroundGradient2);
  img {
    width: 40%;
    margin: auto;
    display: flex;
    margin-bottom: 3em;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 4em;
    .item {
      display: flex;
      flex-direction: column;
      gap: 1em;
      ol {
        margin-left: 14px;
        span {
          color: black;
          font-weight: 500;
        }
      }
    }
  }
  @media (min-width: 1300px) {
    padding: 7em 18%;
  }
  @media (max-width: 500px) {
    padding: 7em 3%;
    img {
      width: 90%;
    }
  }
`;

export default AboutUs;
