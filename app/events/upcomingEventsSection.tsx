import { UpcomingEvents } from "../constants/upcomingEventsInfo";
import style from "./events.module.css";
import EventCard from "@/components/eventCard";
import { Link } from "@nextui-org/react";

export default function UpcomingEventsSection() {
  return (
    <>
      <div className={`${style.eventsBG} bg pt-20 lg:pt-36`}>
        <div className="pb-16 xs:pb-24">
          <p className="font-brand font-bold text-zinc-800 leading-normal text-center text-2xl xs:text-3xl herotext:text-4xl pb-12">
            Upcoming Events
          </p>
          <p className="font-body text-center">
            Follow our{" "}
            <Link href="https://www.facebook.com/unswpfc" isExternal>
              Facebook
            </Link>{" "}
            page to stay updated!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center gap-8">
            {UpcomingEvents.map((e) => (
              <EventCard event={e} key={e.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
