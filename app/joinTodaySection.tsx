import { Link, Button } from "@nextui-org/react";

export default function JoinTodaySection() {
  return (
    <>
      <div className="bg-slate-50 bg py-16 lg:py-24">
        <div className="pb-8 xs:pb-12">
          <p className="font-brand font-bold text-zinc-800 leading-normal text-center text-2xl xs:text-3xl herotext:text-4xl pb-12">
            Join PFC today!
          </p>
          <p className="font-body text-center">
            Follow these easy steps to get involved!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center gap-8">
            <Button
              as={Link}
              href="https://forms.gle/mFkmdRqTojUUY1MU9"
              isExternal
              className="bg-blue-600 text-white shadow-lg"
              size="lg"
            >
              Become a member
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
