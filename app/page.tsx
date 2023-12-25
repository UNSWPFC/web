import style from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 pt-24">
      <div className="flex mx-auto max-w-screen-lg px-6 items-center">
        <div className="flex justify-start">
          <div>
            <p className="font-body uppercase py-6">Welcome to PFC</p>
            <p className="font-brand font-bold text-4xl text-zinc-800 leading-normal">
              Personal finance
              <br />
              starts with you.
            </p>
          </div>
        </div>
        <div className="flex justify-end grow items-center">
          <Image
            width={400}
            height={400}
            src="/illustrations/everyday.svg"
            alt="Logo"
          ></Image>
          {/* other potential imgs: blooming, invest, savings, */}
        </div>
      </div>
      <div className={`${style.spacer} ${style.bg}`}></div>
    </div>
  );
}
