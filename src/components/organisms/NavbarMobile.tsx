import React, { useState } from "react";
import styled from "styled-components";
import Burger from "../atoms/nav/Burger";
import { COLORS } from "../../theme";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const StyledLogo = styled.div`
  flex: 1;
`;

export default function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledContainer>
      <Burger
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        strokeWidth="6"
        color={COLORS.primaryText}
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="32"
        height="24"
      />
    </StyledContainer>
  );
}
