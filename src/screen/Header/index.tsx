import React from "react";
import { FiX, FiMinus, FiMaximize2 } from "react-icons/fi";
import { Container, WindowActions, MacActionButton } from "./styles";

const Header: React.FC = () => {
  const handleCloseWindow = () => {};
  const handleMinimize = () => {};
  const handleMaximize = () => {};
  return (
    <Container>
      <strong>Ander Import</strong>

      <WindowActions position="left" shouldShowIconsOnHover>
        <MacActionButton color="close" onClick={handleCloseWindow}>
          <FiX />
        </MacActionButton>
        <MacActionButton color="minimize" onClick={handleMinimize}>
          <FiMinus />
        </MacActionButton>
        <MacActionButton color="maximize" onClick={handleMaximize}>
          <FiMaximize2 />
        </MacActionButton>
      </WindowActions>
    </Container>
  );
};

export default Header;
