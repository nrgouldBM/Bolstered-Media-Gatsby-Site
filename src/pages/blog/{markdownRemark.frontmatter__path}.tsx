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
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  margin: auto;
  margin-bottom: 3rem;
  min-height: 50vh;
  max-width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

const BlogBody = styled.div`
  max-width: 40rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
    font-weight: 500;
    white-space: normal;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }

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
          <FlexColumn
            style={{ width: "100%" }}
            alignItems="flex-start"
            justifyContent="space-evenly"
          >
            <SubTitle style={{ fontSize: 16, marginBottom: 4 }}>
              {frontmatter.date}
            </SubTitle>
            <SubTitle style={{ fontSize: 16, marginTop: 4 }}>
              {frontmatter.author}
            </SubTitle>
          </FlexColumn>
          <BlogBody>
            <ReactMarkdown>{frontmatter.body}</ReactMarkdown>
          </BlogBody>
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
