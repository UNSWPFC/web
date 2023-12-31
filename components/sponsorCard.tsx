"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function App(props: {
  sponsor: {
    name: string;
    description: string;
    link: string;
    imgSrc: string;
  };
}) {
  const sponsor = props.sponsor;
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="max-w-[500px]" shadow="lg">
        <CardHeader className="flex">
          <Image
            alt={sponsor.name}
            height={200}
            src={"/sponsors/" + sponsor.imgSrc}
            width={200}
          />
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{sponsor.description}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            as={Link}
            isExternal
            className="bg-blue-600 text-white shadow-lg"
            href={sponsor.link}
            variant="flat"
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
