import style from "./sponsors.module.css";
import SponsorCard from "@/components/sponsorCard";
import { WeMoneyInfo } from "../constants/sponsorsInfo";

export default function Sponsors() {
  return (
    <>
      <div className={`${style.ourSponsorsBG} bg flex justify-center py-48`}>
        <p className="font-brand font-bold text-2xl xs:text-3xl herotext:text-4xl text-zinc-800 leading-normal text-center hero:text-left">
          Our Sponsors
        </p>
      </div>
      <div
        className={`${style.sponsorsBG} bg flex justify-center items-center py-48 px-12`}
      >
        <SponsorCard sponsor={WeMoneyInfo} />
      </div>
    </>
  );
}
