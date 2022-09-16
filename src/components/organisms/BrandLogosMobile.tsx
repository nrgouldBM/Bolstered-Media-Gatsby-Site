import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import PineapplesLogo from "../../images/logos/21pineapples_color.png";
import SuperXLogo from "../../images/logos/superX logo.png";
import OldSouthLogo from "../../images/logos/old_south.png";
import SouthernAttitudeLogo from "../../images/logos/SA.png";
import ASDLogo from "../../images/logos/ASD logo.png";
import DBNLogo from "../../images/logos/DBN_LOGO.webp";
// import BHBLogo from "../../images/logos/BHB.png";
import YALLLogo from "../../images/logos/yall_sweet_tea.png";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.section`
  margin: auto;
  margin-top: 10rem;
  background-color: ${COLORS.darkBrown};
  box-sizing: border-box;
  padding: 2.5rem 0;
  max-width: 100vw;
`;

const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
`;

const LogoContainer = styled.img`
  display: inline-block;
  max-width: 12rem;
  transition: all 200ms ease;

  @media (max-width: ${breakpoint + "px"}) {
    margin: 0 2rem 3rem 2rem;
  }
`;

const LogosText = styled.h3`
  color: ${COLORS.primary2};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LOGOS = [
  { alt: "Old South Apparel", image: OldSouthLogo },
  { alt: "Southern Attitude", image: SouthernAttitudeLogo },
  { alt: "21Pineapples", image: PineapplesLogo },
  { alt: "Y'all Sweet Tea", image: YALLLogo },
  { alt: "American Steel Designs", image: ASDLogo },
  { alt: "SuperX Apparel", image: SuperXLogo },
  { alt: "Dude. Be Nice", image: DBNLogo },
];

function Logo({ src, alt }: { src: string; alt: string }) {
  const logo = {
    out: {
      x: -200,
      opacity: 0,
      transition: { duration: 0.35, easing: "easeIn" },
    },
    in: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, easing: "easeIn" },
    },
    initial: {
      opacity: 0,
      x: 150,
    },
  };

  return (
    <motion.div initial="initial" animate={"in"} exit={"out"} variants={logo}>
      <LogoContainer alt={alt} src={src}></LogoContainer>
    </motion.div>
  );
}

export default function BrandLogos() {
  const { width } = useWindowDimensions();

  const [curInView, setCurInView] = useState(0);

  const currentLogo = (
    <Logo alt={LOGOS[curInView].alt} src={LOGOS[curInView].image} />
  );

  const ref = useRef(null);

  const forward = useCallback(() => {
    if (curInView < LOGOS.length - 1) {
      setCurInView(curInView + 1);
    } else {
      setCurInView(0);
    }
  }, [curInView]);

  const back = useCallback(() => {
    if (curInView > 0) {
      setCurInView(curInView - 1);
    } else {
      setCurInView(LOGOS.length - 1);
    }
  }, [curInView]);

  return (
    <Container style={{ width: width }} ref={ref}>
      <LogosText>Trusted By Popular Brands</LogosText>
      <AnimatePresence exitBeforeEnter>
        <LogosContainer>{currentLogo}</LogosContainer>
      </AnimatePresence>
      <Controls>
        <IoChevronBack onClick={back} color="#fff" size={36} />
        <IoChevronForward onClick={forward} color="#fff" size={36} />
      </Controls>
    </Container>
  );
}
