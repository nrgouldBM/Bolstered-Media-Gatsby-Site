import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Icon from "./Icon";
import ButtonLink from "../atoms/ButtonLink";
import { FaArrowRight } from "react-icons/fa";
import { Title } from "../atoms/Title";
import { Body } from "../atoms/Body";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AnimatedCard } from "../atoms/AnimatedCard";

const ServiceContainer = styled.section`
  padding: 3rem 5rem;
  border-radius: 4px;
`;

interface Props {
  title: string;
  content: string;
  id: string;
  icon: {
    color: string;
    bgColor: string;
    name: string;
  };
}

export default function ServicesSection({ title, content, id, icon }: Props) {
  const { width } = useWindowDimensions();
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView();

  if (inView) {
    animationControl.start({
      x: 0,
      rotateZ: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    });
  }

  return (
    <ServiceContainer
      ref={ref}
      style={{ backgroundColor: icon.bgColor }}
      id={id}
    >
      <AnimatedCard
        as={motion.div}
        initial={{ x: 100, opacity: 0, rotateZ: 2 }}
        width={width / 2.3 + "px"}
        height="fit-content"
        animate={animationControl}
        style={{
          minWidth: "18rem",
          minHeight: "25rem",
          padding: "3rem",
        }}
      >
        <Icon
          size={42}
          color={icon.color}
          name={icon.name}
          bgColor={icon.bgColor}
        />
        <Title style={{ fontSize: "3rem" }}>{title}</Title>
        <Body>{content}</Body>
        <ButtonLink
          text="Start Here"
          link="/contact"
          secondary
          style={{ width: "15rem", marginTop: "2rem" }}
          icon={<FaArrowRight color={"#fff"} size={20} />}
        />
      </AnimatedCard>
    </ServiceContainer>
  );
}
