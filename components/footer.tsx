import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-orange-400 py-12 mt-auto">
        <div className="mx-auto max-w-screen-lg px-6">
          <div className="flex justify-center items-center gap-3 pb-3">
            <Image
              width={40}
              height={40}
              src="/logos/pfcLogo.svg"
              alt="Logo"
            ></Image>
            <p className="font-brand font-bold text-white text-sm xs:text-xl">
              UNSW Personal Finance Club
            </p>
          </div>
          <div className="flex justify-center items-center py-3 text-sm">
            <p className="font-light text-white text-center">
              unswpfc@gmail.com
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 lg:gap-24 py-3">
            <Link
              href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VzAQAU"
              isExternal
            >
              <Image
                width={30}
                height={30}
                src="/logos/arc.png"
                alt="arcLogo"
                className="h-auto w-auto"
              ></Image>
            </Link>
            <Link href="https://www.facebook.com/unswpfc" isExternal>
              <Image
                width={40}
                height={40}
                src="/logos/fb.png"
                alt="fbLogo"
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/unswpfc/" isExternal>
              <Image
                width={40}
                height={40}
                src="/logos/ig.png"
                alt="igLogo"
              ></Image>
            </Link>
            <Link href="https://www.linkedin.com/company/unswpfc/" isExternal>
              <Image
                width={40}
                height={40}
                src="/logos/linkedin.png"
                alt="linkedinLogo"
              ></Image>
            </Link>
          </div>
          <div className="flex justify-center items-center py-3 text-sm">
            <p className="font-light text-white text-center">
              This PFC publication is proudly supported by Arc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
