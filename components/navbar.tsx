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

export default function App() {
  const menuItems = [
    "About Us",
    "Events",
    "Publications",
    "Sponsors",
    "Join Us",
  ];

  return (
    <Navbar isBordered>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="xs:hidden" justify="center">
        <NavbarBrand className="gap-3 text-wrap">
          <Image width={40} height={40} src="/logo.svg" alt="Logo"></Image>
          <p className="font-brand font-bold text-orange-400 text-sm xs:text-xl">
            UNSW Personal <br />
            Finance Society
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden xs:flex lg:hidden" justify="center">
        <NavbarBrand className="gap-3 text-wrap whitespace-pre-wrap">
          <Image width={40} height={40} src="/logo.svg" alt="Logo"></Image>
          <p className="font-brand font-bold text-orange-400 text-sm xs:text-xl">
            UNSW Personal Finance Society
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="start">
        <NavbarBrand className="gap-3">
          <Image width={40} height={40} src="/logo.svg" alt="Logo"></Image>
          <p className="font-brand font-bold text-orange-400 text-xl">
            UNSW Personal Finance Society
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="hidden lg:flex gap-4">
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
        </div>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            className="bg-blue-600 text-white shadow-lg hidden lg:flex"
            href="#"
            variant="flat"
          >
            Join Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${
                index === menuItems.length - 1 ? "text-blue-600" : "text-black"
              }`}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
