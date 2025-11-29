import Snakegrid from "@/components/Snakegrid";
import Image from "next/image";
import logo from "../public/newgeny.svg";
import logo1 from "../public/logogeny.svg"
import { FaXTwitter } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="container flex-wrap mx-auto text-center flex flex-col">
      <nav className=" w-full bg-[#090a0c] text-[#FFFFFFB2]  mt-5 md:mt-7 py-3 md:py-4 px-4 md:px-8  ">
        <div className="flex items-center justify-between">
          <a href="https://www.gensyn.ai/"
              className="flex items-center gap-3 md:gap-5">

            <Image src={logo1} alt="name" className="w-[30px] md:w-auto" />
            <Image src={logo} alt="name" className="w-[90px] md:w-[150px]"  />
          </a>
          <h3 className="font-semibold text-[18px] md:text-xl md:font-bold">
            GenAnt
          </h3>
        </div>
      </nav>

      <Snakegrid />

      <div className="flex w-full items-end cursor-pointer justify-end  text-right mt-[5%] ">
        <a
            href="https://x.com/haakimii__"
            className=" p-4 border-2 border-[#6e7777] hover:bg-[#fad8d133] text-white  font-bold text-[16px] flex items-center gap-2"
          >
            <FaXTwitter className="text-xl" />
            Hakimi
          </a>
      </div>
    </div>
  );
}
