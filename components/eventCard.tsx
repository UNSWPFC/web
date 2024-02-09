"use client";

import React from "react";
import { Link, Image } from "@nextui-org/react";
// import Image from "next/image";
import { motion } from "framer-motion";

export default function EventCard(props: {
  event: {
    title: string;
    eventLink: string;
    imgSrc: string;
  };
}) {
  const event = props.event;
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <Link href={event.eventLink} isExternal>
        <Image
          alt={event.title}
          width={500}
          src={"/events/" + event.imgSrc}
          radius="lg"
          shadow="sm"
          className="object-cover max-h-64"
        />
      </Link>
    </motion.div>
  );
}
