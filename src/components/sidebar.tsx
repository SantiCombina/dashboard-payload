"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

import { useWindowWidth } from "@react-hook/window-size";

import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isCollapsed, setisCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  const toggleCollapse = () => {
    setisCollapsed(!isCollapsed);
  };

  return (
    <TooltipProvider>
      <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
        {!mobileWidth && (
          <div className="absolute right-[-20px] top-7">
            <Button
              aria-label="Toggle Sidebar Collapse"
              onClick={toggleCollapse}
              variant="secondary"
              className="rounded-full p-2"
            >
              <ChevronRight
                className={cn(
                  "trasition-all duration-300",
                  isCollapsed ? "" : "rotate-180",
                )}
              />
            </Button>
          </div>
        )}
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              variant: "default",
              href: "/",
            },
            {
              title: "Users",
              icon: UsersRound,
              variant: "ghost",
              href: "/users",
            },
            {
              title: "Orders",
              icon: ShoppingCart,
              variant: "ghost",
              href: "/orders",
            },
            {
              title: "Settings",
              icon: Settings,
              variant: "ghost",
              href: "/settings",
            },
          ]}
        />
      </div>
    </TooltipProvider>
  );
}
