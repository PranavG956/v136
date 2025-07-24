'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();
  return (
    <>
      <div className="min-h-[calc(100vh-52px)] flex gap-3 flex-col items-center justify-center bg-green-50">
        <h1 className="text-4xl font-bold">Welcome to SLinks</h1>
        <p className=" text-lg">Your one-stop solution for shortening URLs with ease</p>
        <button onClick={() => Router.push("/shorten")} className="cursor-pointer px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-600 transition duration-300">Try Now</button>
      </div>
    </>
  );
}
