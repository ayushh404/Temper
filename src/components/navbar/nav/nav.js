"use client";

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "../acmelogo/AcmeLogo";
import links from "../links/links";
import { usePathname } from "next/navigation";
import { doLogout } from "@/lib/action";

const Nav = ({session}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = links;
  const pathname = usePathname();
  
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"xl"}>
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map((item) => (
            <NavbarItem key={item.title} className="m-2">
              <Link color="foreground" href={item.path}>
                {item.title}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>

      <NavbarContent justify="end">
        {
          session ? (
            <div className="hidden sm:flex">
              <NavbarItem className="lg:flex">
                <form action={doLogout}>
                  <button className="text-red-500" type="submit">Logout</button>
                </form>
              </NavbarItem>
            </div>
          ) : (
            <>
              <NavbarItem className="lg:flex">
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="register" variant="flat">
                  Register
                </Button>
              </NavbarItem>
            </>
          )
        }
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
              <Link color="foreground" href={item.path}>
                {item.title}
              </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
