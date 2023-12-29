import style from "./about.module.css";
import ProfileCard from "@/components/profileCard";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "@nextui-org/react";

export default function ProfileDisplay() {
  return (
    <>
      <div className="flex justify-center items-center pb-8">
        <Link className="cursor-pointer" color="foreground">
          <ChevronLeft size={32} />
        </Link>
        <p className="font-brand font-bold text-lg text-center px-12">
          Co-Presidents
        </p>
        <Link className="cursor-pointer" color="foreground">
          <ChevronRight size={32} />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-12 min-w-max px-20">
          <ProfileCard
            name="Vinuk Ekanayake"
            role="Co-President"
            degree="Actuarial Studies"
            linkedIn="https://www.linkedin.com/in/vinuke/"
          />
          <ProfileCard
            name="Catherine Yang"
            role="Co-President"
            degree="Commerce/Information Systems"
            linkedIn="https://www.linkedin.com/in/catherine-yang-08981a269/"
          />
        </div>
      </div>
    </>
  );
}
