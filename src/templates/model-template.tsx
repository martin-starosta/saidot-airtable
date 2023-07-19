import React from "react";
import { Link, graphql } from "gatsby";

import modelIcon from "../images/model.svg";
import parametersIcon from "../images/parameters.svg";

interface ModelData {
  airtable: {
    data: {
      Name: string;
      Model_overview: string;
      Logo: {
        url: string;
      }[];
    };
  };
}

const PerformaceTag: React.FC = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-row content-center border rounded-full px-12 py-6">
      <img src={parametersIcon} alt="Parameters" className="mr-1" />
      <span className="text-16 leading-24">{`${label} ${
        value ? `: ${value}` : ""
      }`}</span>
    </div>
  );
};

export default function ModelTemplate({ data }: any) {
  const model = data.airtable.data;

  return (
    <div className="w-[966px] mx-auto p-20">
      <div className="flex flex-row">
        <div className="">
          <div className="flex flex-row items-center mb-s">
            <img src={modelIcon} className="w-48 h-48 mr-3" alt="Model Icon" />
            <h1 className="font-heading text-44 leading-62">{model.Name}</h1>
          </div>
          <p className="font-inter text-16 leading-24 w-[566px] ">
            {model.Short_description}
          </p>
        </div>
        <div className="ml-auto w-[237px] h-[129px] flex flex-col justify-center">
          {model.Logo?.[0].url ? (
            <img src={model.Logo?.[0].url} alt="" />
          ) : (
            <img src="https://placehold.co/237x129" alt="" />
          )}
        </div>
      </div>
      <section>
        <h2 className="font-heading text-32 leading-40 mb-25 mt-58 ">
          Model overview
        </h2>
        <p className="font-inter text-16 leading-24 text-justify">
          {model.Model_overview}
        </p>
      </section>
      <section>
        <h2 className="font-heading text-32 leading-40 mb-25 mt-58 ">
          Training data
        </h2>
        <hr />
      </section>
      <section>
        <h2 className="font-heading text-32 leading-40 mb-25 mt-58 ">
          Risks and limitations
        </h2>
        <hr />
      </section>
      <section>
        <h2 className="font-heading text-32 leading-40 mb-25 mt-58 ">
          Training resources
        </h2>
        <hr />
        <div className="flex flex-row flex-wrap mt-3 gap-[2px]">
          <PerformaceTag
            label="Training cluster"
            value={model.Training_cluster?.[0]}
          />
          <PerformaceTag
            label="Training cost"
            value={model.Training_cost?.[0]}
          />
          <PerformaceTag
            label="Training time"
            value={model.Training_time?.[0]}
          />
          <PerformaceTag label="Parameters" value={model.Parameters?.[0]} />
        </div>
      </section>
      <section>
        <h2 className="font-heading text-32 leading-40 mb-25 mt-58 ">
          Performance
        </h2>
        <hr />
      </section>
      <section>
        <h2 className="font-heading text-32 leading-40 mb-25 mt-58 ">
          Compliance
        </h2>
        <hr />
      </section>
      <p className="font-heading text-20 leading-40 mt-6">
        Request full access to transparency reports for this model.
      </p>
      <Link className="text-blue-600" to="/">
        Back to Home
      </Link>
    </div>
  );
}

export const query = graphql`
  query AirtableData($id: String) {
    airtable(id: { eq: $id }) {
      data {
        Name
        Short_description
        Model_overview
        Risks_and_limitations
        Parameters
        Training_cluster
        Training_cost
        Training_time
        Logo {
          url
        }
      }
    }
  }
`;
