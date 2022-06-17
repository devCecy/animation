// 클릭 시 팝업
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box key={n} layoutId={n} onClick={() => setId(n)} />
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <OverLay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: "400px", height: "200px" }} />
          </OverLay>
        )}
      </AnimatePresence>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const OverLay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Box = styled(motion.div)`
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
