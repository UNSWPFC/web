import { PastEvents } from "../constants/pastEventsInfo";
import style from "./events.module.css";
import EventCard from "@/components/eventCard";

export default function PastEventsSection() {
  return (
    <>
      <div className={`${style.eventsSectionBG} bg py-20 lg:py-36`}>
        <p className="font-brand font-bold text-white text-2xl xs:text-3xl herotext:text-4xl text-center pb-16 xs:pb-24">
          Past Events
        </p>
        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center lg:grid lg:grid-cols-2 gap-8">
            {PastEvents.map((e) => (
              <EventCard event={e} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
