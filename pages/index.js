import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link"></p>
          <p className="link"></p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Image</p>

          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/74160672?s=400&v=4" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-39 flex-grow w-5/5">
        <Image
          src="https://www.google.co.id/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-10/12 mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
        </div>

        <div className="flex flex-row w-2/2 space-y-0 space-x-4 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button type="submit" onClick={search} className="btn text-center">
            Google Search
          </button>
          <button type="submit" onClick={search} className="btn text-center">
            Im Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
