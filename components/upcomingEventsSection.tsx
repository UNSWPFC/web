import { UpcomingEvents } from "../app/constants/upcomingEventsInfo";
import style from "../app/events/events.module.css";
import EventCard from "@/components/eventCard";
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { MoreHorizontal } from "lucide-react";

export default function UpcomingEventsSection() {
  const noUpcomingEvents = UpcomingEvents.length == 0 ? true : false;
  return (
    <>
      <div className={`${style.eventsBG} bg py-20 lg:pt-36`}>
        <div className="pb-16 xs:pb-24">
          <p className="font-brand font-bold text-zinc-800 leading-normal text-center text-2xl xs:text-3xl herotext:text-4xl pb-12">
            Upcoming Events
          </p>
          <p className="font-light text-center">
            Follow our{" "}
            <Link href="https://www.facebook.com/unswpfc" isExternal>
              Facebook
            </Link>{" "}
            page to stay updated!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-screen-lg px-6 flex flex-wrap justify-center gap-8">
            {noUpcomingEvents && (
              <Card className="p-12">
                <CardHeader className="flex justify-center items-center">
                  <MoreHorizontal />
                </CardHeader>
                <CardBody>No upcoming events. Stay tuned!</CardBody>
              </Card>
            )}
            {!noUpcomingEvents &&
              UpcomingEvents.map(
                (e: { title: string; imgSrc: string; eventLink: string }) => (
                  <EventCard event={e} key={e.title} />
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
}
