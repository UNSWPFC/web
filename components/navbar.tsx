import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";

export default function navbar() {
  const menuItems = [
    { name: "About Us", nav: "/about" },
    { name: "Events", nav: "/events" },
    { name: "Publications", nav: "/publications" },
    { name: "Sponsors", nav: "/sponsors" },
    { name: "Join Us", nav: "https://forms.gle/mFkmdRqTojUUY1MU9" },
  ];

  return (
    <Navbar isBlurred={false}>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="xs:hidden" justify="center">
        <NavbarBrand className="gap-3 cursor-pointer" as={Link} href="/">
          <Image
            width={40}
            height={40}
            src="/logos/pfcLogo.svg"
            alt="Logo"
          ></Image>
          <p className="font-brand font-bold text-orange-400 text-sm xs:text-xl">
            UNSW Personal
            <br />
            Finance Club
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden xs:flex lg:hidden" justify="center">
        <NavbarBrand
          className="gap-3 whitespace-pre-wrap cursor-pointer"
          as={Link}
          href="/"
        >
          <Image
            width={40}
            height={40}
            src="/logos/pfcLogo.svg"
            alt="pfcLogo"
          ></Image>
          <p className="font-brand font-bold text-orange-400 text-sm xs:text-xl">
            UNSW Personal Finance Club
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="start">
        <NavbarBrand className="gap-3 cursor-pointer" as={Link} href="/">
          <Image
            width={40}
            height={40}
            src="/logos/pfcLogo.svg"
            alt="Logo"
          ></Image>
          <p className="font-brand font-bold text-orange-400 text-xl">
            UNSW Personal Finance Club
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="hidden lg:flex gap-4 font-light">
          <NavbarItem>
            <Link color="foreground" href="/about">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/events">
              Events
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/publications">
              Publications
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/sponsors">
              Sponsors
            </Link>
          </NavbarItem>
        </div>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="https://forms.gle/mFkmdRqTojUUY1MU9"
            isExternal
            className="bg-blue-600 text-white shadow-lg hidden lg:flex"
            variant="flat"
          >
            Join Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={`w-full text-2xl font-light leading-loose ${
                index === menuItems.length - 1 ? "text-blue-600" : "text-black"
              }`}
              isExternal={index === menuItems.length - 1}
              href={item.nav}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
