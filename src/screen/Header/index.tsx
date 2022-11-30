import React, { useCallback } from "react";
import { FiX, FiMinus, FiMaximize2 } from "react-icons/fi";
// import remote from "@electron/remote";
import { Container, WindowActions, MacActionButton } from "./styles";

const Header: React.FC = () => {
  const handleCloseWindow = useCallback(() => {
    // const window = remote.getCurrentWindow();
    // window.close();
  }, []);
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
