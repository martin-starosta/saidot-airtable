import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Saidot Knowledge`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: "keyXQSb7Fw4NiwLw7", // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: "appAH158n8Vgxbzyc",
            tableName: "Models",
            tableView: "Grid view",
            mapping: { Policy: "text/markdown" },
            link: { Policy: "Policies" },
          },
          {
            baseId: "app4hZ4zjVWJAi85p",
            tableName: "Policies",
            tableView: "Grid view",
          },
        ],
      },
    },
  ],
};

export default config;
