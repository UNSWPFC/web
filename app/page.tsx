import style from "./home.module.css";
import { Button } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import CalmAnimation from "../components/calmAnimation";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 pt-8 xs:pt-10 herotext:pt-12 hero:pt-18">
      <div className="hero:flex mx-auto max-w-screen-lg px-6 items-center justify-center hero:justify-start min-h-fit hero:h-96">
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
          className={`block hero:flex hero:justify-end hero:grow hero:items-center px-10 xs:px-20 hero:px-0`}
        >
          <div
            className={`flex items-center justify-center hero:justify-end object-cover aspect-square`}
          >
            <CalmAnimation />
          </div>
        </div>
      </div>
      <div className="hidden hero:flex justify-center">
        <Button isIconOnly className="bg-slate-50">
          <ChevronDown />
        </Button>
      </div>
      <div className={`${style.spacer} ${style.bg}`}></div>
    </div>
  );
}
