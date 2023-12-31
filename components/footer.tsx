import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function footer() {
  return (
    <>
      <div className="bg-orange-400 py-12">
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
          <div className="flex justify-center items-center gap-6 lg:gap-24 py-3">
            <Link href="#">
              <Image
                width={30}
                height={30}
                src="/logos/arc.png"
                alt="arcLogo"
                className="h-auto w-auto"
              ></Image>
            </Link>
            <Link target="_blank" href="https://www.facebook.com/unswpfc">
              <Image
                width={40}
                height={40}
                src="/logos/fb.png"
                alt="fbLogo"
              ></Image>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/unswpfc/">
              <Image
                width={40}
                height={40}
                src="/logos/ig.png"
                alt="igLogo"
              ></Image>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/unswpfc/"
            >
              <Image
                width={40}
                height={40}
                src="/logos/linkedin.png"
                alt="linkedinLogo"
              ></Image>
            </Link>
          </div>

          <div className="flex justify-center items-center py-3 text-sm">
            <p className="text-white text-center">
              This PFC publication is proudly supported by Arc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
