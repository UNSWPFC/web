import style from "./about.module.css";
import ProfileCard from "@/components/profileCard";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import ProfileDisplay from "./profileDisplay";

export default function ExecutivesSection() {
  return (
    <div
      className={`bg-slate-50 pt-8 xs:py-10 herotext:py-12 hero:py-18 spacer ${style.executivesBG} max-h-32`}
    >
      <div className="flex mx-auto max-w-screen-lg justify-center">
        <div className="flex max-w-lg justify-center">
          <div>
            <p className="font-brand font-bold text-2xl xs:text-3xl herotext:text-4xl text-center pb-8">
              Executives
            </p>
            <ProfileDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}
