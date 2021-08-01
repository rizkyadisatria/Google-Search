import Head from "next/head";
import Header from "../components/Header";
import HeaderOptions from "../components/HeaderOptions";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResult from "../components/SearchResult";

function search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/google.ico" />
      </Head>

      {/* Header */}
      <Header />
      <HeaderOptions />
      {/* Search Results */}
      <SearchResult results={results} />
    </div>
  );
}

export default search;

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
