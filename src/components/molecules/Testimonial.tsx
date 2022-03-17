import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Quote } from "./TestimonialInverse";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Testimonial({ img, name, title, company, text }) {
  const { width } = useWindowDimensions();
  const animationControl = useAnimation();
  const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.3 });

  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    });
  }

  const isSmallDevice = width < breakpoint;
  return (
    <FlexRow
      style={{ width: isSmallDevice ? "80%" : "70%", margin: "auto" }}
      alignItems="center"
      justifyContent={isSmallDevice ? "center" : "space-evenly"}
      wrap="wrap"
    >
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{
          marginBottom: "4rem",
          transform: isSmallDevice ? null : "rotate(-5deg)",
        }}
      >
        <Avatar background={COLORS.brown} img={img} alt="testimonial" />
        <SubTitle
          style={{
            textAlign: "center",
            lineHeight: "2rem",
            margin: 0,
            marginTop: "1rem",
          }}
        >
          {name}
        </SubTitle>
        <SubTitle
          style={{ textAlign: "center", lineHeight: "2rem", margin: 0 }}
        >
          {`${title}, ${company}`}
        </SubTitle>
      </FlexColumn>
      <FlexColumn
        style={{
          transform: isSmallDevice ? null : "rotate(-5deg)",
          position: "relative",
        }}
        wrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={animationControl}
        >
          <Body
            style={{
              textAlign: "left",
              fontSize: "1.8rem",
              fontWeight: "bold",
              lineHeight: "3rem",
            }}
          >
            <Quote
              style={{
                position: "absolute",
                top: -40,
                left: isSmallDevice ? 0 : -40,
              }}
            >
              "
            </Quote>
            {text}
            <Quote style={{ position: "absolute", bottom: -60, right: 20 }}>
              "
            </Quote>
          </Body>
        </motion.div>
      </FlexColumn>
    </FlexRow>
  );
}
