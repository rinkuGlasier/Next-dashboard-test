import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 mx-auto ">
      <div className="bg-blue-600 rounded-md p-5 py-8 mb-5">
        <h1 className="text-white font-bold">Acme</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="bg-gray-100 rounded-md inset-0 my-auto h-full p-10">
          <h1>Welcome to Acme. This is the example for the
            <span className="text-blue-600"> Next.js Learn Course,</span>  brought to you by Vercel.</h1>
            <button className="bg-blue-500 rounded-md text-white py-3 px-5 "> Log in</button>
        </div>
        <div className="">
        <Image src='/img/hero-desktop.webp' className=" lg:block hidden"  width={1000} height={800} alt="desktop" />
         <Image src='/img/hero-mobile.webp' className=" lg:hidden block"  width={560} height={600} alt="desktop" />
         </div>
      </div>
    </div>
  );
}
