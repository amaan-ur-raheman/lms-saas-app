"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Companions", href: "/companions" },
	{ label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
    const path = usePathname();

	return (
		<nav className="flex items-center gap-8">
			{navItems.map(({ label, href }) => (
				<Link href={href} key={label} className={cn(path === href && "text-primary font-semibold")}>
					{label}
				</Link>
			))}
		</nav>
	);
};

export default NavItems;
