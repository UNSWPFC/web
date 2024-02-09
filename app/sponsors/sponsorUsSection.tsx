import { Link, Button, Chip } from "@nextui-org/react";

export default function SponsorUsSection() {
  return (
    <>
      <div className="bg-white bg py-16 lg:py-24">
        <div className="pb-8 xs:pb-12">
          <p className="font-brand font-bold text-zinc-800 leading-normal text-center text-2xl xs:text-3xl herotext:text-4xl pb-12">
            Want to sponsor us?
          </p>
          <p className="font-light text-center">Send us an email at</p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center gap-8">
            <Chip size="lg">
              <p className="font-light">unswpfc@gmail.com</p>
            </Chip>
          </div>
        </div>
      </div>
    </>
  );
}
