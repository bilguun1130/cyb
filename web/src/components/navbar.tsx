"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const url = usePathname();

  const menuItems = [
    { name: "Нүүр", href: "/" },
    { name: "Бидний тухай", href: "/about" },
    { name: "Мэдээ", href: "/news" },
    { name: "Зөвлөмж", href: "/advice" },
    { name: "Хууль, эрх зүй", href: "/legal" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="flex ">
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="flex gap-4 mt-2" href="/">
            <Image
              src="https://ik.imagekit.io/ga9p1sty9/cyberLogo.png?updatedAt=1723464361508"
              alt="logo"
              width={300}
              height={300}
              className="w-12"
            />
            <p className="font-bold text-black hidden md:block">
              Кибер коммандлал
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={url === item.href ? "primary" : "foreground"}
              href={item.href}
              size="md"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={url === item.href ? "primary" : "foreground"}
              className="w-full"
              href={item.href}
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
