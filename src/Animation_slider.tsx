// 슬라이더
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const handleNext = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 5 : prev - 1));
  };

  const box = {
    entry: (isBack: boolean) => ({
      x: isBack ? -500 : 500,
      scale: 0,
      opacity: 0,
    }),
    center: { x: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    exit: (isBack: boolean) => ({
      x: isBack ? 500 : -500,
      scale: 0,
      opacity: 0,
      transition: { duration: 1 },
    }),
  };
  return (
    <Wrapper>
      <AnimatePresence custom={isBack}>
        <Box
          custom={isBack}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={handleNext}>next</button>
      <button onClick={handlePrev}>prev</button>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(10, 43, 163), rgb(2, 132, 176));
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
