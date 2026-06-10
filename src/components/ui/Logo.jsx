import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import img from "../../assets/v.jpeg"
const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3, // 0
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
  
        <img src={img} alt="Wibe Fashion" width={30} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="30px"
          viewBox="0 0 1200 1200"
          width="30px"
          fill="white"
        >
          <g>
            {/* <motion.path
              stroke="white"
              strokeWidth="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M581.7 201.5c-37.4 6.3-68.8 30.2-85.2 64.8-4.8 10-8.1 21-9.3 30.3l-.7 5.9-7.5.6c-11.1.9-17.2 4.5-21.6 12.9-1.7 3.1-1.9 6.5-2.2 30.5-.4 32.8 0 35.7 6.6 42.5 5.3 5.4 9.5 7 18.5 7h5.7v408h-5.7c-9 0-13.2 1.6-18.5 7-6.6 6.8-7 9.7-6.6 42.5.3 25.4.4 27.2 2.5 31 4.3 8 10.3 11.5 21.3 12.2l7.7.6.6 5.6c.4 3.1 1.8 9.6 3.2 14.6 13.7 47 54.6 79.6 103.5 82.2 54.3 2.8 103.1-33.3 116.5-86.3 1.4-5.3 2.5-11.1 2.5-12.9v-3.2l7.8-.6c11.2-.7 17.2-4.1 21.5-12.2 2.1-3.8 2.2-5.2 2.2-34 0-29-.1-30.1-2.2-34.1-4.6-8.6-11.5-12.4-22.5-12.4H714V396.3l8-.5c6.9-.4 8.7-.9 12.3-3.4 4.8-3.4 8.2-8.1 9.7-13.3 1.2-4.5 1.3-53.2 0-58.5-2.4-10.4-10.7-16.7-23-17.4l-7.6-.4-1.3-8c-3.2-20.8-16.1-46.7-28.7-57.7-4-3.5-9.5-4.1-14.4-1.6-2.8 1.4-3.1 1.4-10.9-4.1-12.7-8.7-26.7-14.4-41.3-16.9-2.9-.4-3.8-1.1-3.8-2.6 0-3.3-2.9-7.9-6.3-9.9-3.8-2.4-12.9-2.5-25-.5m136.3 148V369H482v-39h236zm-54 47.6c-14.9 5.9-65.9 24.9-66.6 24.9-.5 0-1.7-1.4-2.6-3-1.8-3.1-7-6-10.7-6-1.6 0-42 14.7-68.4 24.9l-2.8 1.1.3-11.7.3-11.7 25.5-9.7 25.5-9.8h51c34.3 0 50.2.3 48.5 1m23 54.3v11.4l-8.2 3.2c-33.9 13-164.2 62-164.9 62-.5 0-.9-5.1-.9-11.3v-11.3l47.3-17.9c25.9-9.8 64.8-24.5 86.2-32.6 21.5-8.2 39.3-14.8 39.8-14.9.4 0 .7 5.1.7 11.4m0 90v11.3l-8.2 3.1c-4.6 1.7-42.7 16.1-84.8 32s-77.5 29.2-78.7 29.6c-2.3.7-2.3.7-2.3-10.7v-11.4l85.8-32.6c47.1-17.9 86.3-32.5 87-32.6.9-.1 1.2 2.8 1.2 11.3m0 89.3v11.8l-9.8 3.6c-8.1 3-156.9 59.3-162.4 61.4-1.7.7-1.8-.3-1.8-11.1v-11.9l20.8-7.7c11.4-4.3 50.4-19 86.7-32.7 36.3-13.8 66.1-25 66.3-25 .1-.1.2 5.2.2 11.6m-.4 101.1c-.3.2-19.2 7.6-42.1 16.3-22.8 8.7-42.6 16.6-43.9 17.4-3.6 2.4-5.9 8-5.2 12.4l.6 3.7-29.8 11.2-29.7 11.2H513v-29.5l86.8-32.7 86.7-32.7.3 11.1c.1 6.1 0 11.3-.2 11.6m.4 69.7c0 2.4-.2 2.5-7.2 2.4h-7.3l6-2.4c7.7-3 8.5-3 8.5 0m31 49V870H482v-39h236z"
            /> */}
          </g>
        </svg>

        <Text variants={textVariants} initial="hidden" animate="visible">
        V.JAY
        </Text>
  
    </Container>
  );
};

export default Logo;
