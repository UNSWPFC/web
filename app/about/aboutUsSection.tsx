import style from "./about.module.css";
import { Card } from "@nextui-org/react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div
      className={`bg bgRatio ${style.aboutUsBG} bg-slate-50 pt-8 xs:py-10 herotext:py-12 hero:py-18`}
    >
      <div className="hero:flex mx-auto max-w-screen-lg px-6 items-center hero:h-96">
        <div className="flex justify-center hero:justify-start">
          <div className="max-w-sm">
            <p className="font-brand font-bold text-2xl xs:text-3xl herotext:text-4xl text-zinc-800 leading-normal">
              About Us
            </p>
            <p className="font-body py-6 text-xs herotext:text-base">
              PFC is a student run non-constituent society, with the primary
              goal of upskilling our members in the area of financial
              management. We aim to educate young people of all backgrounds to
              take responsibility for themselves and make sound financial
              decisions.
            </p>
          </div>
        </div>
        <div className="block hero:flex hero:justify-end hero:grow hero:items-center px-5 xs:px-10 hero:px-0">
          <div className="flex items-center justify-center hero:justify-end hero:pl-8">
            <Card radius="lg" className="border-none" shadow="lg">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={550}
                src="/headshots/grp.jpg"
                width={550}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
