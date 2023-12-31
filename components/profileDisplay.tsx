"use client";

import ProfileCard from "@/components/profileCard";
import { Tabs, Tab } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfileDisplay(props: {
  categories: {
    category: string;
    data: {
      name: string;
      role: string;
      degree: string;
      linkedIn: string;
    }[];
  }[];
}) {
  const categories = props.categories;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Tabs
          color="primary"
          variant="bordered"
          items={categories}
          className="pb-8"
          classNames={{
            tabList: "bg-slate-50",
          }}
        >
          {(item) => (
            <Tab key={item.category} title={item.category}>
              <AnimatePresence>
                <motion.div
                  className="flex gap-12 min-w-max px-20"
                  key={item.category}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.data.map((person) => (
                    <ProfileCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      degree={person.degree}
                      linkedIn={person.linkedIn}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
}
