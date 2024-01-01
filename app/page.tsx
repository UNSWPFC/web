import style from "./home.module.css";
import { Link } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`${style.bg} bg-slate-50 pt-10 xs:pt-12 herotext:pt-14 hero:pt-18 bg bgRatio hero:wavesLargeSpacer`}
    >
      <div className="hero:flex mx-auto max-w-screen-lg px-6 items-center justify-center hero:justify-start hero:h-96">
        <div className="hero:flex">
          <div>
            <p className="font-body uppercase py-6 text-center hero:text-left text-xs herotext:text-sm">
              Welcome to PFC
            </p>
            <p className="font-brand font-bold text-2xl xs:text-3xl herotext:text-4xl text-zinc-800 leading-normal text-center hero:text-left">
              Personal finance
              <br />
              starts with you.
            </p>
          </div>
        </div>
        <div
          className={`block hero:flex hero:justify-end hero:grow hero:items-center py-12 hero:py-0`}
        >
          <div className={`flex items-center justify-center hero:justify-end`}>
            <Image
              width={200}
              height={200}
              src="/illustrations/blooming.svg"
              alt="Logo"
              className="h-96 w-auto"
            ></Image>
            {/* other potential imgs: blooming, invest, savings, */}
          </div>
        </div>
      </div>
      <div className="hidden hero:flex justify-center pt-16">
        <Link className="cursor-pointer" color="foreground">
          <ChevronDown />
        </Link>
      </div>
    </div>
  );
}
