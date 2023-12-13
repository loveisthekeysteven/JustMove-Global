import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiDoubleQuotesR } from "react-icons/ri";
import personPic1 from "../assets/homePageImages/person1Pic.avif";
import personPic2 from "../assets/homePageImages/person2Pic.jpg";
import personPic3 from "../assets/homePageImages/person3Pic.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Testimonials = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.7, delay: 0.2 },
        y: 0,
      });
      setHasAnimated(true);
    }
    if (!inView && !hasAnimated) {
      animation.start({ opacity: 0, y: 100 });
    }
  }, [inView, hasAnimated, animation]);
  return (
    <Container>
      <div className="topSection">
        <h1>What people are saying about us</h1>
        <p>
          At JustMove Global, client satisfaction is at the heart of everything
          we do. Your happiness and contentment are our top priorities, Let's
          help you explore immigration opportunities all around the world with
          up to date information on migration routes and options.
        </p>
      </div>
      <div className="bottomSection" ref={ref}>
        <motion.div animate={animation} className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            Securing a Canadian student visa was a pivotal step in my academic
            journey. JustMove Global meticulously guided me through the
            application process, ensuring that all documents were in order.
            Their in-depth knowledge of the Canadian immigration system, coupled
            with their professional relationships, streamlined the process.
            Today, I am proud to be pursuing my studies in this vibrant and
            diverse country.
          </p>
          <div>
            {/* <img src={personPic1} alt="" /> */}
            <span>
              <h2>Sarah Ebere James</h2>
              <p>Loyal Client</p>
            </span>
          </div>
        </motion.div>

        <motion.div animate={animation} className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            The prospect of working in Poland was an exciting opportunity for
            career growth.JustMove Global provided invaluable assistance in
            obtaining my work permit. They not only facilitated the paperwork
            but also offered insights into the local work culture, helping me
            integrate seamlessly into my new professional environment.
          </p>
          <div>
            {/* <img src={personPic3} alt="" /> */}
            <span>
              <h2>John Owubokir</h2>
              <p>Client</p>
            </span>
          </div>
        </motion.div>
        <motion.div animate={animation} className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            With Sweden being known for its world-class education system,
            obtaining a study visa was a crucial step.JustMove Global
            demonstrated unwavering support, ensuring that my application
            reflected my commitment to academic excellence. Their guidance
            extended beyond paperwork, encompassing tips on adapting to Swedish
            culture and academic life
          </p>
          <div>
            {/* <img src={personPic2} alt="" /> */}
            <span>
              <h2>Peter Nieketien</h2>
              <p>Client</p>
            </span>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  background: var(--backgroundGradient2);
  .topSection {
    display: flex;
    justify-content: center;
    gap: 1em;
    h1 {
      font-size: 3em;
      font-weight: 600;
      max-width: 14em;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      margin-top: 20px;
      max-width: 30em;
      color: gray;
    }
  }
  .bottomSection {
    flex-wrap: wrap;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
    .item {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      .icon {
        font-size: 3em;
        color: var(--fontPrimaryColor);
      }
      p {
        color: gray;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1em;
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
        h2 {
          font-size: 17px;
          font-weight: 400;
        }
        p {
          color: var(--fontSecondaryColor);
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .topSection {
      h1 {
        width: 50%;
      }
      p {
        width: 50%;
      }
    }
  }
  @media (max-width: 940px) {
    padding: 0 3%;
    .bottomSection {
      .item {
        width: 300px;
      }
    }
  }
  @media (max-width: 740px) {
    padding: 0 7%;
    .bottomSection {
      gap: 5em;
      .item {
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }
    .topSection {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 672px) {
    .topSection {
      flex-direction: column;
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
  @media (max-width: 430px) {
    .topSection {
      flex-direction: column;
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export default Testimonials;
