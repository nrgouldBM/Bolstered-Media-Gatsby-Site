import React, { useState } from "react";
import styled from "styled-components";
import Burger from "../atoms/nav/Burger";
import { COLORS, SHADOW } from "../../theme";
import { motion } from "framer-motion";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import { StyledNavButton } from "../atoms/nav/StyledNavButton";
import Logo from "../../images/BM_Logo.png";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  isOpen?: boolean;
}

const StyledNavLinks = styled.ul`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  flex: 1;
  &:last-child {
    margin-top: 2rem;
  }
`;

const MobileNavLink = styled(StyledNavLink)`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  margin-bottom: 8px;
  border-radius: 6px;
  &:hover {
    background-color: ${COLORS.primarySoft};
  }
  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const MobileNavButton = styled(StyledNavButton)`
  font-weight: 600;
  width: 15rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
  text-align: center;
  background-color: ${COLORS.secondary};
  color: white;
  &:hover {
    background-color: ${COLORS.secondarySoft};
  }
`;

const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const StyledLogo = styled(Link)`
  flex: 1;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Drawer = styled(motion.div)`
  background-color: ${COLORS.white};
  width: 66.6vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 20;
  box-shadow: ${SHADOW.normal};
`;

const Backdrop = styled(motion.div)`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  cursor: pointer;
`;

export default function NavbarMobile() {
  const { width } = useWindowDimensions();

  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(isOpen ? false : true);
    console.log(isOpen);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
    console.log(document.body.style.overflow);
  }

  return (
    <React.Fragment>
      <StyledContainer style={{ width: width }} isOpen={isOpen}>
        <StyledLogo to="/">
          <StaticImage
            src="../../images/BM_logo.png"
            alt="Bolstered Media Logo"
            width={200}
            placeholder="blurred"
          />
        </StyledLogo>
        <Burger
          isOpen={isOpen}
          onClick={handleOpen}
          strokeWidth="6"
          color={COLORS.primaryText}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </StyledContainer>
      <Drawer
        initial={{ x: width }}
        animate={isOpen ? { x: width / 3 } : { x: width }}
        transition={{ type: "tween", ease: "easeInOut" }}
      >
        <StyledNavLinks>
          <MobileNavLink
            onClick={handleOpen}
            to="/"
            style={{ width: width / 3 }}
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            onClick={handleOpen}
            to="/team/"
            style={{ width: width / 3 }}
          >
            Team
          </MobileNavLink>
          <MobileNavLink
            onClick={handleOpen}
            to="/services"
            style={{ width: width / 3 }}
          >
            Services
          </MobileNavLink>
          <MobileNavButton
            onClick={handleOpen}
            style={{ width: width / 3 }}
            to="/contact"
          >
            Contact
          </MobileNavButton>
        </StyledNavLinks>
      </Drawer>
      {isOpen ? (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          onClick={handleOpen}
        />
      ) : null}
    </React.Fragment>
  );
}
