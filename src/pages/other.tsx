import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Counter from "../components/counter/Counter";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const OtherPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <Link href={"/"}>Go to home page</Link>
      </header>
    </div>
  );
};

export default OtherPage;
