module.exports = {
  siteMetadata: {
    siteUrl: "https://www.bolsteredmedia.com",
    title: "Bolstered Media",
    description:
      "To help you grow your online store, you need an experienced team. While driving over $100 million in online sales, our team has scaled dozens of direct to consumer programs for some of the most recognizable brands in the world. Utilizing proven advertising strategies along with tested and proven tactics, we know what it takes to generate profitable sales.",
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
        name: `content`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `case-studies`,
        path: `${__dirname}/src/content/case-studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `componentImages`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-WZ4GY8MSTD", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: "GTM-TZQMZ3W", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    "gatsby-cookie-notice",
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
