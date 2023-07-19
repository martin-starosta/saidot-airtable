import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useStaticQuery, graphql, Link } from "gatsby";
import { slug } from "../utils/helpers";

interface ModelData {
  data: {
    Name: string;
  };
}

const IndexPage: React.FC<PageProps> = () => {
  const modelsData = useStaticQuery(graphql`
    query {
      allAirtable {
        nodes {
          data {
            Name
          }
        }
      }
    }
  `);

  const data: ModelData[] = modelsData.allAirtable.nodes;
  return (
    <div>
      {data.map((model: ModelData) => {
        return (
          <div>
            <Link to={`/model/${slug(model.data.Name)}`}>
              {model.data.Name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IndexPage;
