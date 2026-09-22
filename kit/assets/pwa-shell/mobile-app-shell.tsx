"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import "./mobile-app-shell.css";

export type MobileNavItem = { href: string; label: string; icon: ReactNode };

export function MobileAppShell({ items }: { items: MobileNavItem[] }) {
  const pathname = usePathname();
  if (items.length > 4) throw new Error("A mobile app shell supports at most four primary destinations.");
  return <nav className="mobile-app-shell" aria-label="Primary navigation">{items.map((item) => {
    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
    return <Link key={item.href} href={item.href} prefetch className={`mobile-app-shell__item${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined}><span aria-hidden>{item.icon}</span><span>{item.label}</span></Link>;
  })}</nav>;
}
