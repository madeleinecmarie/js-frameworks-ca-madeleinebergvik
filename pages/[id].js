import React from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";

function DetailsId({ name, image, species }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image}></img>
      <p>{species}</p>
    </div>
  );
}

export default DetailsId;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Query {
        characters {
          results {
            image
            id
            name
            species
          }
        }
      }
    `,
  });

  console.log(data);

  const { characters } = data;
  const paths = characters.results.map((char) => ({
    params: { id: char.id },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Query {
        characters {
          results {
            image
            id
            name
            species
          }
        }
      }
    `,
  });

  console.log(data);

  const { characters } = data;

  const foundChar = characters.results.find((char) => char.id === params.id);
  return {
    props: foundChar,
  };
}
