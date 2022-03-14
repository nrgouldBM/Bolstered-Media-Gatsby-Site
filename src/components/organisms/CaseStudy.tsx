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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim,
          culpa ipsam iure recusandae repellat molestias totam quos, ratione
          quia laborum et inventore dignissimos praesentium. Provident quidem
          voluptas quasi eum, tenetur doloribus quia explicabo natus, eveniet
          doloremque ab quos? Aliquam dignissimos repellat assumenda quae
          laborum animi numquam, perspiciatis odit repudiandae voluptatem
          dolorum explicabo, ullam nesciunt adipisci vitae recusandae ipsa!
          Dolor!
        </Body>
        <FlexRow
          alignItems="center"
          justifyContent="flex-start"
          wrap="wrap"
          style={{ marginTop: "2rem" }}
        >
          <TextBox
            style={{ marginRight: "2rem" }}
            title="4.05%"
            label="Conv. Rate"
          />
          <TextBox title="4.05%" label="Conv. Rate" />
        </FlexRow>
      </MainContainer>
      <ImageContainer
        style={{ minWidth: width < breakpoint ? width * 0.8 : width / 3 }}
      >
        <StaticImage
          src={"../../images/Bolstered Media - Case Study.png"}
          width={400}
          alt="Case Study - $800,000 in sales."
        />
      </ImageContainer>
    </Container>
  );
}
