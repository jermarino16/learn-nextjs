import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface Props {
  title?: string;
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children, title = "My Portfolio" }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto my-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
