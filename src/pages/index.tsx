import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../components/counter/Counter";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { GetServerSideProps } from "next";
import { wrapper } from "../store";
import { incrementByAmount } from "../redux/slices/counterSlice/counterSlice";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ req }) => {
    store.dispatch(incrementByAmount(10));
    return { props: {} };
  });

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <Link href={"/other"}>Go to other page</Link>
      </header>
    </div>
  );
};

export default IndexPage;
