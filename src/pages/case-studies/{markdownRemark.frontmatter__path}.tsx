import React, { useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/organisms/Layout";
import FlexColumn from "../../components/atoms/FlexColumn";
import { Title } from "../../components/atoms/Title";
import { Body } from "../../components/atoms/Body";
import { SubTitle } from "../../components/atoms/SubTitle";
import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";
import { breakpoint, COLORS } from "../../theme";
import FlexRow from "../../components/atoms/FlexRow";

const Container = styled.div`
  margin-bottom: 3rem;
  min-height: 50vh;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  height: 8px;
  background: ${COLORS.primary};
  bottom: 100px;
  border-radius: 4px;
`;

const BlogBody = styled(Body)`
  max-width: 40rem;

  @media (max-width: ${breakpoint + "px"}) {
    width: 90%;
    margin: 2rem auto;
    max-width: 95vw;
  }
`;

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <Layout>
      <Container ref={ref}>
        <FlexColumn alignItems="center" justifyContent="flex-start">
          <Title style={{ marginBottom: "1rem" }}>{frontmatter.title}</Title>
          <FlexRow
            style={{ width: "100%" }}
            alignItems="center"
            justifyContent="space-around"
          >
            <SubTitle style={{ fontSize: 16 }}>{frontmatter.date}</SubTitle>
            <SubTitle style={{ fontSize: 16, fontWeight: "bold" }}>
              {frontmatter.author}
            </SubTitle>
          </FlexRow>
          <BlogBody>{frontmatter.body}</BlogBody>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </FlexColumn>
      </Container>
      <ProgressBar exit={{ opacity: 0 }} style={{ scaleX }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        body
        title
        author
      }
    }
  }
`;
