import style from "./sponsors.module.css";
import SponsorCard from "@/components/sponsorCard";
import { WeMoneyInfo } from "../constants/sponsorsInfo";
import SponsorUsSection from "./sponsorUsSection";

export default function Sponsors() {
  return (
    <>
      <div
        className={`${style.ourSponsorsBG} bg pt-20 lg:pt-36 pb-36 lg:pb-48`}
      >
        <p className="font-brand font-bold text-zinc-800 leading-normal text-center text-2xl xs:text-3xl herotext:text-4xl pb-12">
          Our Sponsors
        </p>
        <p className="font-body text-center">
          Special thanks to those that make what we do possible
        </p>
      </div>
      <div
        className={`${style.sponsorsBG} bg flex justify-center items-center py-12 lg:py-36 px-12`}
      >
        <SponsorCard sponsor={WeMoneyInfo} />
      </div>
      <SponsorUsSection />
    </>
  );
}
