import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { AiFillSchedule } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FiTruck } from "react-icons/fi";
import { FaHotel, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const OurServices = () => {
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
      <h2 className="title">Our Services</h2>
      <div className="items" ref={ref}>
        <motion.div animate={animation} className="item">
          <HiAcademicCap className="icon" />
          <h2> Study Permit </h2>
          <p>
            Our dedicated team specializes in providing comprehensive study
            permit assistance, guiding you through the necessary processes with
            expertise and efficiency.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <FaPlane className="icon" />
          <h2>Flight Reservations</h2>
          <p>
            Our agency offers a seamless flight booking experience, taking the
            hassle out of finding the best flights for your journey.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <MdOutlineWork className="icon" />
          <h2>Work Permit</h2>
          <p>
            Our dedicated team will guide you through the intricacies of work
            permit applications, ensuring compliance with regulations and
            maximizing your opportunities.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <FaHandsHelping className="icon" />
          <h2>Financial Assistance</h2>
          <p>
            Our financial assistance services are aimed at providing you with
            guidance on budgeting, scholarship opportunities, and financial
            planning.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <HiUserGroup className="icon" />
          <h2>Job Assistance</h2>
          <p>
            Our job assistance services are tailored to connect you with
            potential employers, internships, and networking opportunities.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 5%;
  background: var(--backgroundGradient3);
  .title {
    text-align: center;
    font-size: 2.7em;
    font-weight: 500;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .items {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .item {
      padding: 20px;
      height: 280px;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff;
      text-align: center;
      border-radius: 2em;
      .icon {
        font-size: 3em;
      }
      h2 {
        color: var(--primaryColor);
        font-weight: 600;
      }
      p {
        color: gray;
      }
    }
  }
  @media (max-width: 700px) {
    .items {
      .item {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

export default OurServices;
