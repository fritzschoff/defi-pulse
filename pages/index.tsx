import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Error from "@components/Error";
import { GasStationAPIRespond } from "@interfaces/gas-station.interface";
import Dashboard from "@components/Dashboard";
import styles from "@styles/Home.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Home: NextPage = () => {
  const [gasAPIData, setGasAPIData] = useState<GasStationAPIRespond | null>(
    null
  );
  const [apiError, setError] = useState<string>("");
  const [automaticRefetch, setAutomaticRefetch] = useState(false);

  const fetchGasInformation = async () => {
    const gasStationAPIRespond = fetch(`${location.origin}/api/gas-station`);
    gasStationAPIRespond
      .then((res) => res.json())
      .catch((error) =>
        setError(error?.message ? error.message : "Failed to fetch data")
      )
      .then((data) => setGasAPIData(data));
  };

  const refetchGasStationData = () => {
    if (automaticRefetch)
      setTimeout(
        () => {
          fetchGasInformation().finally(refetchGasStationData);
        },
        gasAPIData?.block_time ? gasAPIData.block_time * 1000 : 10000
      );
  };

  useEffect(() => {
    fetchGasInformation();
  }, []);

  useEffect(() => {
    if (automaticRefetch) refetchGasStationData();
  }, [automaticRefetch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fill it up ⛽</title>
        <meta
          name="description"
          content="Current Gas Price for the Ethereum Blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header autoRefetch={setAutomaticRefetch} />

      <main className={styles.main}>
        {apiError && (
          <>
            <Error message={apiError} />
            <button
              onClick={() => {
                setError("");
                fetchGasInformation();
              }}
              className={styles.retryButton}
            >
              Retry
            </button>
          </>
        )}
        {gasAPIData && !apiError && <Dashboard {...gasAPIData} />}

        {!gasAPIData && !apiError && <h1>Loading...</h1>}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
