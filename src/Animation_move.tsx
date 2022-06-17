// circle 연결
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [isShowing, setIsShowing] = useState(false);

  const handleShowing = () => {
    setIsShowing((prev) => !prev);
  };
  return (
    <Wrapper onClick={handleShowing}>
      <AnimatePresence>
        <Box>{isShowing && <Circle layoutId="circle" />}</Box>
        <Box>{!isShowing && <Circle layoutId="circle" />}</Box>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, rgb(10, 43, 163), rgb(2, 132, 176));
`;

const Box = styled(motion.div)`
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

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: rgba(30, 144, 255, 1);
`;
