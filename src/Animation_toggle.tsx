// 토글 애니메이션
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [showing, setShowing] = useState(false);

  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  const boxShowing = {
    start: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, rotate: 360 },
    exit: { opacity: 0, scale: 0, x: 50 },
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxShowing}
            initial="start"
            animate="visible"
            exit="exit"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShowing}>click</button>
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
  background: linear-gradient(135deg, rgb(10, 43, 163), rgb(2, 132, 176));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
