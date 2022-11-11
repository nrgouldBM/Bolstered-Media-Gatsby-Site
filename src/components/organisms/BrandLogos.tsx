import React, { useRef } from "react";
import styled from "styled-components";
import PineapplesLogo from "../../images/logos/21pineapples_color.png";
import SuperXLogo from "../../images/logos/superX logo.png";
import OldSouthLogo from "../../images/logos/old_south.png";
import SouthernAttitudeLogo from "../../images/logos/SA.png";
import ASDLogo from "../../images/logos/ASD logo.png";
import DBNLogo from "../../images/logos/DBN_LOGO.webp";
import SewSouthern from "../../images/logos/SewSouthern.png";
import NewMoonMinerals from "../../images/logos/NMM_Logo.png";
import ChristianPlanner from "../../images/logos/ChristianPlannerLogo.png";
import CoastlandLogo from "../../images/logos/coastland.png";
import BHBLogo from "../../images/logos/BHB.png";
import YALLLogo from "../../images/logos/yall_sweet_tea.png";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoChevronForward } from "react-icons/io5";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const Container = styled.section`
  margin: auto;
  background-color: ${COLORS.darkBrown};
  box-sizing: border-box;
  padding: 2rem 0;
  max-width: 100vw;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const LogoContainer = styled.img`
  display: inline-block;
  max-height: 4rem;
  max-width: 12rem;
  transition: all 200ms ease;

  @media (max-width: ${breakpoint + "px"}) {
    margin: 0 2rem;
  }
`;

const ToolTip = styled.h5`
  color: ${COLORS.primaryText};
  font-size: 0.65rem;
  font-weight: 600;
  text-align: center;
  background-color: ${COLORS.lightGray};
  padding: 0.3rem;
  display: none;
  position: absolute;
  border-radius: 4px;
  bottom: -100;
  left: 0;
  right: 0;
  transition: all 200ms ease;
  z-index: 15;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 12rem;
  margin: 2rem;

  &:hover ${ToolTip} {
    display: block;
  }
`;

const LogosText = styled.h3`
  color: ${COLORS.primaryText};
  font-size: 1.2rem;
  font-weight: 600;
  /* margin-bottom: 2rem; */
  text-align: center;
`;

const LOGOS = [
  { alt: "Old South Apparel", image: OldSouthLogo },
  { alt: "Southern Attitude", image: SouthernAttitudeLogo },
  { alt: "Bald Head Blues", image: BHBLogo },
  { alt: "Christian Planner", image: ChristianPlanner },
  { alt: "Coastland", image: CoastlandLogo },
  { alt: "21Pineapples", image: PineapplesLogo },
  { alt: "Y'all Sweet Tea", image: YALLLogo },
  { alt: "New Moon Minerals", image: NewMoonMinerals },
  { alt: "American Steel Designs", image: ASDLogo },
  { alt: "SuperX Apparel", image: SuperXLogo },
  { alt: "Dude. Be Nice", image: DBNLogo },
  { alt: "Sew Southern", image: SewSouthern },
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

  const ref = useRef(null);

  return (
    <Wrapper>
      <LogosText>Trusted By Popular Brands</LogosText>

      <Container style={{ width: width }} ref={ref}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          // customRightArrow={
          //   <>
          //     <IoChevronForward size={50} color={COLORS.white} />
          //   </>
          // }
        >
          {LOGOS.map(({ alt, image }, i) => (
            <LogoWrapper>
              <Logo key={i} alt={alt} src={image} />
            </LogoWrapper>
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
}
