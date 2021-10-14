import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>MTech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <p>1 section</p>
        <p>2 section</p>
      </main>
      <footer className="flex items-center justify-center w-full h-12 border-t bg-black">
        <p className="text-white">
          <span className="text-red-800">M</span>TECH PRECISION &#169; 2021
        </p>
      </footer>
    </div>
  );
}
