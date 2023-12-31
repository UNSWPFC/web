import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";

export default function profileCard(props: {
  name: string;
  role: string;
  degree: string;
  linkedIn: string;
}) {
  const { name, degree, role, linkedIn } = props;
  const imgSrc = name.split(" ")[0].toLowerCase();

  return (
    <Card shadow="lg" className="min-w-fit">
      <CardBody className="">
        <Image
          alt="headshot"
          width={200}
          height={200}
          src={"/headshots/" + imgSrc + ".jpg"}
          className="object-cover rounded-xl z-0 h-auto w-auto"
        />
      </CardBody>
      <CardFooter className="py-2 px-4 justify-between items-center">
        <div>
          <h4 className="font-bold text-large">{name}</h4>
          <p className="font-body">{role}</p>
          <small className="text-default-500">{degree}</small>
        </div>
        <Link target="_blank" href={linkedIn}>
          <Image
            width={40}
            height={40}
            src="/logos/linkedinBtn.svg"
            alt="linkedinLogo"
          ></Image>
        </Link>
      </CardFooter>
    </Card>
  );
}
