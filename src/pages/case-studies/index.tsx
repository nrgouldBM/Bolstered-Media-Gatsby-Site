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
import { Helmet } from "react-helmet";

const TextContainer = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 54rem;
  margin: auto;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1080px) {
    max-width: 95vw;
    justify-content: center;
  }
`;

export default function CaseStudyIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <Helmet meta={[{ name: "robots", content: "noindex" }]} />
      <FlexRow
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap-reverse"
      >
        <TextContainer>
          <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
            Case Studies
          </SubTitle>
          <Title
            style={{
              marginBottom: "0rem",
              fontSize: width < breakpoint ? "2.2rem" : "3rem",
              maxWidth: "35rem",
              lineHeight: width < breakpoint ? "2.8rem" : "3.5rem",
            }}
          >
            See our work in action.
          </Title>
        </TextContainer>
      </FlexRow>
      <BlogContainer>
        {posts.length < 1 ? (
          <FlexRow
            alignItems="center"
            justifyContent="center"
            style={{ width: "100%" }}
          >
            <SubTitle>No Content.</SubTitle>
          </FlexRow>
        ) : (
          posts.map((post, i) => {
            const { title, path, body, date, author, category } =
              post.node.frontmatter;
            const third = (i + 1) % 3 == 0 && width > 1080;
            return (
              <BlogCard
                key={i}
                title={title}
                path={path}
                date={date}
                body={body}
                category={category}
                author={author}
                style={third ? { width: "52rem" } : null}
              />
            );
          })
        )}
      </BlogContainer>
      <CallToAction />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "case-study" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            body
            author
            category
          }
        }
      }
    }
  }
`;
