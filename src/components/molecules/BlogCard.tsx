import React from "react";
import { Body } from "../atoms/Body";
import FlexColumn from "../atoms/FlexColumn";
import { SubTitle } from "../atoms/SubTitle";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedCard } from "../atoms/AnimatedCard";
import Icon from "./Icon";
import { SERVICES } from "../../constants";
import InverseButton from "../atoms/InverseButton";
import ArrowRight from "../Icons/ArrowRight";
import { Link } from "gatsby";

interface Props {
  body: string;
  tags?: string | string[];
  title: string;
  path: string;
  date: string;
  style?: object;
}

export default function BlogCard({
  body,
  title,
  path,
  tags,
  date,
  style,
}: Props) {
  const { width } = useWindowDimensions();
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    animationControl.start({
      y: 0,
      x: 0,
      opacity: 1,
    });
  }

  console.log(body);

  return (
    <Link to={`.${path}`} style={{ textDecoration: "none" }}>
      <AnimatedCard
        justifyContent="space-between"
        alignItems="center"
        ref={ref}
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={animationControl}
        secondary
        whileHover={{ scale: 1.03 }}
        width={width < breakpoint ? "90vw" : "25rem"}
        height={width < breakpoint ? "fit-content" : "30rem"}
        style={{
          boxShadow: "none",
          ...style,
          borderRadius: 4,
        }}
      >
        <FlexColumn
          wrap="wrap"
          alignItems="center"
          justifyContent="center"
          style={{ marginBottom: "2rem" }}
        >
          <Icon
            name={"cro"}
            color={SERVICES[3].icon.color}
            size={32}
            style={{ margin: "1rem" }}
          />

          <SubTitle
            style={{
              fontSize: 24,
              textAlign: "center",
              lineHeight: "2rem",
              margin: 0,
            }}
          >
            {title}
          </SubTitle>

          <SubTitle
            style={{
              fontSize: 16,
              textAlign: "center",
              lineHeight: "2rem",
              margin: 0,
            }}
          >
            {date}
          </SubTitle>
        </FlexColumn>
        <FlexColumn wrap="wrap" alignItems="center" justifyContent="center">
          <Body
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordWrap: "break-word",
              lineHeight: "2rem",
              marginBottom: "2rem",
              maxHeight: "6rem",
              height: "6rem",
            }}
          >
            {body}
          </Body>
          {/* <ButtonLink text="Read More" secondary link={`.${path}`} /> */}
          <InverseButton
            link={`.${path}`}
            secondary
            text="Read More"
            //   style={{ position: "absolute", bottom: 5 }}
            icon={<ArrowRight />}
          />
        </FlexColumn>
      </AnimatedCard>
    </Link>
  );
}
