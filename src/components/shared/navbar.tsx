"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import clsx from "clsx";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface Nav {
	title: string;
	path: string;
}

const nav: Nav[] = [
	{ title: "Shortlet", path: "/shortlet" },
	{ title: "Buy", path: "/buy" },
	{ title: "Development", path: "/development" },
];

interface NavbarProps {
	color?: string;
}

const Navbar = ({ color = "#988261" }: NavbarProps) => {
	const [showMenu, setShowMenu] = useState(false);
	const [animateMenu, setAnimateMenu] = useState(false);

	const handleOpen = () => {
		setShowMenu(true);
		setTimeout(() => setAnimateMenu(true), 10);
	};

	const handleClose = () => {
		setAnimateMenu(false);
		setTimeout(() => setShowMenu(false), 300);
	};

	return (
		<nav
			className={`${HelveticaNeue.className} relative px-4 lg:px-10 xl:px-14 2xl:px-20 py-3 lg:py-5  w-full mx-auto flex items-center justify-between`}
			style={{ color }}
		>
			{/* Desktop Nav */}
			<ul className="hidden lg:flex items-center gap-x-5 lg:gap-x-10">
				{nav.map((item, index) => (
					<li key={index}>
						<Link
							href={item.path}
							className="relative text-base lg:text-lg font-normal transition-all duration-200 ease-in hover:font-bold"
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>

			{/* Hamburger Button */}
			<Button
				type="button"
				variant="ghost"
				className="p-0 block lg:hidden"
				onClick={handleOpen}
			>
				<Image
					src="/icons/menu.svg"
					alt="menu_icon"
					width={24}
					height={24}
					className="w-6 h-6"
				/>
			</Button>

			{/* Slide-in Mobile Menu */}
			{showMenu && (
				<div
					className={clsx(
						"fixed top-21 left-0 right-0 z-50 h-screen w-full bg-white px-5 pt-2 flex lg:hidden flex-col gap-y-10 transition-transform duration-300 ease-in-out",
						animateMenu ? "translate-y-0" : "-translate-y-full",
					)}
				>
					<Button
						type="button"
						variant="ghost"
						className="p-0 flex items-end justify-end"
						onClick={handleClose}
					>
						<Image
							src="/icons/close.svg"
							alt="close_icon"
							width={24}
							height={24}
							className="w-6 h-6"
						/>
					</Button>
					<ul className="flex flex-col gap-y-8 text-center">
						{nav.map((item, index) => (
							<li key={index}>
								<Link
									href={item.path}
									className="relative text-2xl font-normal transition-all duration-200 ease-in hover:font-bold"
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Country Selector */}
			<div className="flex items-center gap-x-0.5">
				<Image
					src="/icons/flag.svg"
					alt="flag-icon"
					width={32}
					height={24}
					className="lg:aspect-[32/24] lg:w-8 lg:h-6 w-4 h-3"
				/>
				<select className="text-base lg:text-lg font-normal">
					<option value="United Kingdom">United Kingdom</option>
				</select>
			</div>
		</nav>
	);
};

export default Navbar;
