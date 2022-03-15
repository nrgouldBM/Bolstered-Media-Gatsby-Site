import React from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Icon from "./Icon";
import ButtonLink from "../atoms/ButtonLink";
import { FaArrowRight } from "react-icons/fa";
import { Title } from "../atoms/Title";
import { Body } from "../atoms/Body";

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
  return (
    <ServiceContainer style={{ backgroundColor: icon.bgColor }} id={id}>
      <Card
        width={width / 2.3 + "px"}
        height="fit-content"
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
      </Card>
    </ServiceContainer>
  );
}
