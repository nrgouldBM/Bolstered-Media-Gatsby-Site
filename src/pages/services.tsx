import { Body } from "../components/atoms/Body";
import Card from "../components/atoms/Card";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import FlexColumn from "../components/atoms/FlexColumn";
import { Title } from "../components/atoms/Title";
import Layout from "../components/organisms/Layout";
import CallToAction from "../components/organisms/CallToAction";
import { SERVICES } from "../constants";
import styled from "styled-components";
import { COLORS } from "../theme";
import { SubTitle } from "../components/atoms/SubTitle";
import ButtonLink from "../components/atoms/ButtonLink";
import Icon from "../components/molecules/Icon";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = styled.section`
  padding: 3rem 5rem;
  border-radius: 4px;
`;

const HeaderContainer = styled.div`
  margin-bottom: 5rem;
  padding: 0 5rem;
`;

export default function Services() {
  const { width } = useWindowDimensions();

  return (
    <Layout disableMargin>
      <HeaderContainer>
        <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
          Services
        </SubTitle>
        <Title
          style={{
            marginBottom: "1rem",
            fontSize: "3rem",
            maxWidth: "35rem",
            lineHeight: "3.5rem",
          }}
        >
          A Digital Agency Focused On Growth.
        </Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reprehenderit ex rerum saepe! Non quasi optio minus totam harum
          quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          distinctio quos cupiditate velit beatae sequi sit voluptas omnis quod
          blanditiis.
        </Body>
        <ButtonLink
          style={{ width: "20rem", marginTop: "1rem" }}
          primary
          text="Speak with us"
          link="/contact"
        />
      </HeaderContainer>
      <FlexColumn justifyContent="center" alignItems="space-around">
        {SERVICES.map(({ title, content, id, icon }) => (
          <ServiceSection style={{ backgroundColor: icon.bgColor }} id={id}>
            <Card
              width={width / 2.5 + "px"}
              height="fit-content"
              style={{ minWidth: "18rem", minHeight: "25rem" }}
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
                secondary
                text="Start Here"
                link="/contact"
                style={{ width: "15rem", marginTop: "2rem" }}
                icon={<FaArrowRight color={"#fff"} size={20} />}
              />
            </Card>
          </ServiceSection>
        ))}
      </FlexColumn>
      <CallToAction />
    </Layout>
  );
}
