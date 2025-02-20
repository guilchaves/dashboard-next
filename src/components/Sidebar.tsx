"use client";
import UserItem from "./UserItem";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  User,
  Inbox,
  CreditCard,
  Bell,
  Settings,
  Cookie,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", icon: <User />, text: "Profile" },
        { link: "/", icon: <Inbox />, text: "Inbox" },
        { link: "/", icon: <CreditCard />, text: "Billing" },
        { link: "/", icon: <Bell />, text: "Notifications" },
      ],
    },
    {
      group: "Settings",
      items: [
        { link: "/", icon: <Settings />, text: "General Settings" },
        { link: "/", icon: <Cookie />, text: "Privacy" },
        { link: "/", icon: <MessageSquare />, text: "Logs" },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300] min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <Link key={optionKey} href={option.link}>
                    <CommandItem className="flex gap-2 cursor-pointer">
                      {option.icon}
                      {option.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span>Team settings</span>
        </Link>
      </div>
    </div>
  );
}
