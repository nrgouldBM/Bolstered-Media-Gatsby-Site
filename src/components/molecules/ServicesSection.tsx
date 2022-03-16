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
import { breakpoint, COLORS, SHADOW } from "../../theme";
import PaidMediaImage from "../../images/BM_Paid_Media.png";
import SMSImage from "../../images/BM_SMS.png";
import EmailImage from "../../images/BM_Email.png";
import CROImage from "../../images/BM_CRO.png";
import { graphql } from "gatsby";

const ServiceContainer = styled.section`
  border-radius: 4px;
  padding: 3rem 5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  min-height: 100vh;

  @media (max-width: ${breakpoint + "px"}) {
    padding: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 30rem;
  flex: 1 1 25rem;
  margin-right: 3rem;

  @media (max-width: 1100px) {
    margin-right: 0;
    margin-bottom: 4rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div<{ color: string }>`
  background-color: ${COLORS.white};
  flex: 1 1 25rem;
  flex-shrink: 0;
  max-width: 35rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${SHADOW.normal};

  @media (max-width: ${breakpoint + "px"}) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
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
  image: string;
}

export default function ServicesSection({ title, content, id, icon }: Props) {
  const { width } = useWindowDimensions();
  const cardAnimation = useAnimation();
  const imageAnimation = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    cardAnimation.start({
      x: 0,
      rotateZ: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    });
    imageAnimation.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        velocity: 0.2,
      },
    });
  }

  let source = PaidMediaImage;

  switch (title) {
    case "Paid Media Advertising":
      source = PaidMediaImage;
      break;
    case "SMS Marketing":
      source = SMSImage;
      break;
    case "Email Marketing":
      source = EmailImage;
      break;
    case "Conversion Rate Optimization":
      source = CROImage;
      break;
    // case "Web Development":
    //   source = PaidMedia;
    //   break;
    // case "Creative Content & Strategy":
    //   source = PaidMedia;
    //   break;
    default:
      break;
  }

  return (
    <ServiceContainer
      ref={ref}
      style={{
        backgroundColor: icon.bgColor,
        padding: width < breakpoint ? 0 : "3rem 5rem",
      }}
      id={id}
    >
      <AnimatedCard
        as={motion.div}
        initial={{ x: 100, opacity: 0, rotateZ: 2 }}
        width={width < breakpoint ? "90%" : width / 2.3 + "px"}
        height="fit-content"
        animate={cardAnimation}
        style={{
          padding: width < breakpoint ? "2rem" : "3rem",
          flex: 1,
        }}
      >
        <CardContainer>
          <ContentContainer>
            <Icon
              size={42}
              color={icon.color}
              name={icon.name}
              bgColor={icon.bgColor}
            />
            <Title style={{ fontSize: width < breakpoint ? "2.2rem" : "3rem" }}>
              {title}
            </Title>
            <Body>{content}</Body>
            <ButtonLink
              text="Start Here"
              link="/contact"
              secondary
              style={{ width: "15rem", marginTop: "2rem" }}
              icon={<FaArrowRight color={"#fff"} size={20} />}
            />
          </ContentContainer>
          <ImageContainer
            color={icon.color}
            as={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={imageAnimation}
          >
            <Image src={source} />
          </ImageContainer>
        </CardContainer>
      </AnimatedCard>
      {/* <GatsbyImage image={image} alt={title} /> */}
      {/* <ImageContainer
        color={icon.color}
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={imageAnimation}
      >
        <Image src={source} />
      </ImageContainer> */}
    </ServiceContainer>
  );
}

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "BM_Paid_Media.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
