import style from "./about.module.css";
import Image from "next/image";
import { Goal } from "lucide-react";

export default function OurMissionSection() {
  return (
    <div
      className={`bg bgRatio ${style.ourMissionBG} bg-slate-50 pt-8 xs:py-10 herotext:py-12 hero:py-18 max-h-32`}
    >
      <div className="hero:flex mx-auto max-w-screen-lg px-6 items-center justify-center hero:justify-start hero:h-96">
        <div className="flex justify-center hero:justify-start pb-8 hero:pb-0">
          <div className="max-w-lg">
            <div className="flex gap-3 items-center">
              <p className="font-brand font-bold text-2xl xs:text-3xl herotext:text-4xl  leading-normal ">
                Our Mission
              </p>
              <Goal />
            </div>
            <p className="font-body py-6 text-xs herotext:text-base ">
              Our mission is to empower students to take action towards a
              financially secure future. We hope to help facilitate students
              with their transition from university to adult life, with specific
              attention to the area of personal finance as it enables them to
              better pursue their various goals.
            </p>
          </div>
        </div>
        <div className="block hero:flex hero:justify-end hero:grow hero:items-center px-10 xs:px-20 hero:px-0">
          <div className="flex items-center justify-center hero:justify-end hero:pl-8">
            <Image
              width={400}
              height={400}
              src="/illustrations/goals.svg"
              alt="Logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
