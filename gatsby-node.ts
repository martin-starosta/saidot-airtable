import path from "path";
import { slug } from "./src/utils/helpers";
// Create pages dynamically

const modelTemplate = path.resolve(`./src/templates/model-template.tsx`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allAirtable {
        nodes {
          id
          data {
            Name
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log("Error retrieving data from Airtable", result.errors);
    return;
  }

  result.data.allAirtable.nodes.forEach((node) => {
    createPage({
      path: `/model/${slug(node.data.Name)}`,
      component: modelTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
