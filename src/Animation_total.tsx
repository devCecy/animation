// 호버, 클릭
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [id, setId] = useState<null | string>(null);
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched((prev) => !prev);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setId(e.currentTarget.id);
    setIsClicked(true);
  };

  const handleOverlayClick = () => {
    setId(null);
    setIsClicked(false);
  };

  const box = {
    hover: (id: string) => ({
      x: id === "1" ? -20 : 20,
      y: id === "1" ? -10 : 10,
      scale: 1.1,
    }),
  };
  const button = {
    click: { scale: 1.1, color: "rgba(255, 99, 72,1.0)" },
  };

  return (
    <Wrapper>
      <Grid>
        <Box
          custom={id}
          id="1"
          layoutId="1"
          variants={box}
          whileHover="hover"
          onMouseOver={(e) => setId(e.currentTarget.id)}
          onClick={handleClick}
        />
        <Box>{isSwitched && <Circle layoutId="circle" />}</Box>
        <Box>{!isSwitched && <Circle layoutId="circle" />}</Box>
        <Box
          custom={id}
          id="2"
          layoutId="2"
          variants={box}
          whileHover="hover"
          onMouseOver={(e) => setId(e.currentTarget.id)}
          onClick={handleClick}
        />
      </Grid>
      {id && isClicked && (
        <OverLay
          onClick={handleOverlayClick}
          initial={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
          animate={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }}
          exit={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
        >
          <Box
            variants={box}
            whileHover="hover"
            layoutId={id}
            style={{ backgroundColor: "white" }}
          />
        </OverLay>
      )}
      <Button variants={button} whileTap="click" onClick={handleSwitch}>
        switch
      </Button>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(10, 43, 163), rgb(2, 132, 176));
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: rgba(255, 165, 2, 1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.button)`
  margin-top: 20px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  color: rgba(55, 66, 250, 1);
  font-weight: 600;
`;
