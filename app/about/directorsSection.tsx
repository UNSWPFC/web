import style from "./about.module.css";
import ProfileDisplay from "../../components/profileDisplay";
import { DirectorsProfilesData } from "../constants/profileData";

export default function DirectorsSection() {
  return (
    <div
      className={`bg bgRatio ${style.directorsBG} bg-slate-50 pt-8 xs:py-10 herotext:py-12 hero:py-18 max-h-32 profilesSection`}
    >
      <div className="flex mx-auto max-w-screen-lg justify-center">
        <div className="flex max-w-lg justify-center">
          <div>
            <p className="font-brand font-bold text-2xl text-white xs:text-3xl herotext:text-4xl text-center pb-8">
              Directors
            </p>
            <ProfileDisplay categories={DirectorsProfilesData} />
          </div>
        </div>
      </div>
    </div>
  );
}
