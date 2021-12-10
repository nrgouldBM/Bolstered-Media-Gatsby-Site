import React, { useState } from "react";
import styled, { css } from "styled-components";
import Burger from "../atoms/nav/Burger";
import { COLORS, SHADOW } from "../../theme";
import { motion } from "framer-motion";

interface Props {
  isOpen?: boolean;
}

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const StyledLogo = styled.div`
  flex: 1;
`;

const Drawer = styled(motion.div)`
  background-color: ${COLORS.white};
  width: 80vw;
  height: 100vh;
  border-radius: 8px;
  position: fixed;
  top: 0;
  z-index: 20;
  box-shadow: ${SHADOW.normal};
`;

export default function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    setOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <StyledContainer isOpen={isOpen}>
        <StyledLogo>
          <h2>Bolstered Media</h2>
        </StyledLogo>
        <Burger
          isOpen={isOpen}
          onClick={handleOpen}
          strokeWidth="6"
          color={COLORS.primaryText}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </StyledContainer>
      <Drawer initial={{ x: 400 }} animate={isOpen ? { x: 100 } : { x: 400 }} />
    </React.Fragment>
  );
}
