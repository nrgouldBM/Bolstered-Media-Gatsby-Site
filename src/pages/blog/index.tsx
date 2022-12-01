import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/organisms/Layout";
import { SubTitle } from "../../components/atoms/SubTitle";
import FlexRow from "../../components/atoms/FlexRow";
import styled from "styled-components";
import { Title } from "../../components/atoms/Title";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import CallToAction from "../../components/organisms/CallToAction";
import BlogCard from "../../components/molecules/BlogCard";

const TextContainer = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <FlexRow
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap-reverse"
      >
        <TextContainer>
          <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
            Blog
          </SubTitle>
          <Title
            style={{
              marginBottom: "0rem",
              fontSize: width < breakpoint ? "2.2rem" : "3rem",
              maxWidth: "35rem",
              lineHeight: width < breakpoint ? "2.8rem" : "3.5rem",
            }}
          >
            Learn from the experts.
          </Title>
        </TextContainer>
      </FlexRow>
      <FlexRow alignItems="center" justifyContent="center" wrap="wrap">
        {posts.map((post, i) => {
          const { title, path, body, date } = post.node.frontmatter;
          return (
            <BlogCard
              key={i}
              title={title}
              path={path}
              date={date}
              body={body}
            />
          );
        })}
      </FlexRow>
      <CallToAction />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            body
          }
        }
      }
    }
  }
`;
