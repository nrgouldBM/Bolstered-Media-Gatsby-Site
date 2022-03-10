module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Bolstered Media Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Bolstered Media",
        start_url: "/",
        description: `To help you grow your online store, you need an experienced team. While driving over $100 million in online sales, our team has scaled dozens of direct to consumer programs for some of the most recognizable brands in the world. Utilizing proven advertising strategies along with tested and proven tactics, we know what it takes to generate profitable sales`,
        icon: "src/images/icon.png",
        include_favicon: true,
      },
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
