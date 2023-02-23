import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://nextjs.org">
              My Portfolio!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            This is a personal portfolio project built with Next.js and Tailwind
            CSS.
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="/about"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">About Me &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn more about my background and skills.
              </p>
            </a>

            <a
              href="/projects"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Projects &rarr;</h3>
              <p className="mt-4 text-xl">
                Check out some of my recent projects and experiments.
              </p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
