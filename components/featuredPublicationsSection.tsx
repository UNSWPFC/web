import style from "../app/publications/publications.module.css";
import { publicationInfo } from "../app/constants/publicationsInfo";
import PublicationCard from "@/components/publicationCard";

export default function FeaturedPublicationsSection(props: {
  isHomePage: boolean;
}) {
  const isHomePage = props.isHomePage;
  return (
    <>
      <div
        className={`${
          isHomePage
            ? style.homePublicationsSectionBG
            : style.featuredPublicationsSectionBG
        } bg py-20 lg:pt-36`}
      >
        <div className="pb-16 xs:pb-24">
          <p className="font-brand font-bold text-zinc-800 leading-normal text-center text-2xl xs:text-3xl herotext:text-4xl pb-12">
            Featured Publication
          </p>
          <p className="font-body text-center">
            Learn about how you can improve your personal finance
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center">
            <PublicationCard publication={publicationInfo[0]} />
          </div>
        </div>
      </div>
    </>
  );
}
