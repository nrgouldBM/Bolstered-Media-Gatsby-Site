module.exports = {
  siteMetadata: {
    siteUrl: "https://www.bolsteredmedia.com",
    title: "Bolstered Media",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "babel-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-minify",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Bolstered Media",
        start_url: "/",
        description: `To help you grow your online store, you need an experienced team. While driving over $100 million in online sales, our team has scaled dozens of direct to consumer programs for some of the most recognizable brands in the world. Utilizing proven advertising strategies along with tested and proven tactics, we know what it takes to generate profitable sales`,
        icon: "src/images/icon.png",
        include_favicon: true,
        background_color: "#fff",
        theme_color: "#fff533",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        // modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogContent`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `componentImages`,
        path: `${__dirname}/src/images`,
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TZQMZ3W",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
};
