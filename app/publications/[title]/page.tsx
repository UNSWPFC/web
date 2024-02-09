import style from "../publications.module.css";
import { PublicationInfo } from "@/app/constants/publicationsInfo";
import NotFound from "@/app/not-found";
import Gallery from "./gallery";

export default function PublicationPage({
  params,
}: {
  params: { title: string };
}) {
  const pub = PublicationInfo.find((pub) => pub.nav === params.title);

  if (pub == null) {
    return <NotFound />;
  }

  return (
    <>
      <div className={`bg-slate-50`}>
        <div className="hero:flex mx-auto max-w-screen-lg px-6 items-center py-8 xs:py-24 lg:py-32">
          <div className="flex justify-center hero:justify-start">
            <div className="">
              <p className="font-brand font-bold text-2xl xs:text-3xl herotext:text-4xl text-zinc-800 py-3">
                {pub.title}
              </p>
              <p className="font-light text-small text-foreground/80 py-3">
                {pub.date}
              </p>
              <p className="font-light text-xs herotext:text-base py-3">
                {pub.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.publicationPageBG} bg py-20 lg:py-36`}>
        <Gallery images={pub.images} pubNav={pub.nav} />
      </div>
    </>
  );
}
