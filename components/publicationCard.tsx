"use client";

import React from "react";
import { Card, CardBody, Link, Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function PublicationCard(props: {
  publication: {
    title: string;
    date: string;
    description: string;
    nav: string;
    images: string[];
    cover: string;
  };
}) {
  const pub = props.publication;
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
    >
      <Card className="border-none" shadow="lg">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4 flex justify-center items-center">
              <Image
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src={"/publications/" + pub.nav + "/" + pub.cover}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex md:flex-row flex-col justify-start md:justify-between">
                <h3 className="font-bold font-brand text-2xl">{pub.title}</h3>
                <p className="font-light text-small text-foreground/80">
                  {pub.date}
                </p>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <p className="font-light">{pub.description}</p>
              </div>

              <div className="flex w-full items-center pt-4">
                <Button
                  as={Link}
                  className="bg-blue-600 text-white shadow-lg"
                  href={`publications/${pub.nav}`}
                  variant="flat"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
