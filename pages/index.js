import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Router, useRouter } from "next/router";
import Header from "../components/header/header";

export default function Characters({ characters }) {
  console.log(characters.results);
  const router = useRouter();

  const handleOnClick = (id) => {
    router.push(`/${id}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Framework CA</title>
        <meta name="Rick and Morty" content="Rick and Morty API site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className={styles.grid}>
          {characters.results.map(({ id, image, name, species }) => (
            <div key={id} className={styles.card}>
              <div onClick={() => handleOnClick(id)}>
                <img src={image}></img>
              </div>
              <h3>{name}</h3>
              <p>ID: {id}</p>
              <p>Species: {species}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
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

  const { characters } = data;
  return {
    props: {
      characters,
    },
  };
}
