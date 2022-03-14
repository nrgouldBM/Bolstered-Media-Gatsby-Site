import React from "react";
import styled from "styled-components";
import { breakpoint, COLORS, SIZES } from "../../theme";
import { Body } from "../atoms/Body";
import FlexRow from "../atoms/FlexRow";
import TextBox from "../atoms/TextBox";
import { Title } from "../atoms/Title";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  padding: 1rem;
  background-color: ${COLORS.gray};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${SIZES.lengthSm3};
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  flex: 1;
  margin-bottom: 2rem;
`;

export default function CaseStudy() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <MainContainer
        style={{
          maxWidth: width < breakpoint ? "90%" : null,
          marginRight: width < breakpoint ? 0 : "2rem",
        }}
      >
        <Title>Case Study: 6-Month-Old Apparel Brand</Title>
        <Body>
          Using a refined organic and paid strategy, Bolstered Media grew a new
          apparel brand to $1,000,000 in sales in less than 6 Months! By
          focusing on Marketing/Media Efficiency Ratio (MER) and customer
          acquisition, this evergreen brand hit a milestone of $1M in sales
          while holding a 5.75% Conversion Rate and a Profit Margin of 35%.
        </Body>
        <FlexRow
          alignItems="flex-start"
          justifyContent="flex-start"
          wrap="wrap"
          style={{ marginTop: "2rem" }}
        >
          <TextBox
            style={{ marginRight: "2rem" }}
            title="5.75%"
            label="Conv. Rate"
          />
          <TextBox
            style={{ marginRight: "2rem" }}
            title="34.7%"
            label="Profit Margin"
          />
          <TextBox title="18%" label="Ad Spend Percentage" />
        </FlexRow>
      </MainContainer>
      <ImageContainer
        style={{ minWidth: width < breakpoint ? width * 0.8 : width / 3 }}
      >
        <StaticImage
          src={"../../images/Bolstered Media - Case Study.png"}
          width={500}
          alt="Case Study - $800,000 in sales."
        />
      </ImageContainer>
    </Container>
  );
}
