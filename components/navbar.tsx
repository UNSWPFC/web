import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

export default function Home() {
  return (
    <Navbar isBordered className="shadow-md">
      <NavbarBrand>
        <Image width={60} height={60} src="/pfcLogo.png"></Image>
        <p className="font-brand font-bold text-xl text-yellow-600">
          UNSW Personal Finance Society
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Publications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Sponsors
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>
        <Button
          as={Link}
          className="bg-gradient-to-tr from-gold-400 to-orange-400 text-white shadow-lg"
          href="#"
          variant="flat"
        >
          Join Us
        </Button>
      </NavbarItem>
    </Navbar>
  );
}
