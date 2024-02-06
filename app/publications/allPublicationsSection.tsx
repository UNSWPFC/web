import style from "./publications.module.css";
import { publicationInfo } from "../constants/publicationsInfo";
import PublicationCard from "@/components/publicationCard";

export default function AllPublicationsSection() {
  return (
    <>
      <div className={`${style.allPublicationsSectionBG} bg py-20 lg:py-36`}>
        <p className="font-brand font-bold text-white text-2xl xs:text-3xl herotext:text-4xl text-center pb-16 xs:pb-24">
          All Publications
        </p>
        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center">
            {publicationInfo.map((p) => (
              <div className="py-8">
                <PublicationCard publication={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
