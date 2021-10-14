import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>MTech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="nav flex flex-col items-center justify-center w-full flex-1 px-20 text-center"></main>

      <footer className="flex items-center justify-center w-full h-12 border-t bg-black">
        <p className="text-white">
          <span className="text-red-800">M</span>TECH PRECISION &#169; 2021
        </p>
      </footer>
    </div>
  );
}
