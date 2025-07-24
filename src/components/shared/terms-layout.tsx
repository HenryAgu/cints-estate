"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TermsSection {
	id: string;
	title: string;
	content: string;
}

interface TermsLayoutProps {
	sections: TermsSection[];
	fontClassName?: string; // optional custom font class
}

export default function TermsLayout({
	sections,
	fontClassName = "font-serif",
}: TermsLayoutProps) {
	const [activeId, setActiveId] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
						break;
					}
				}
			},
			{ rootMargin: "0px 0px -70% 0px", threshold: 0.3 },
		);

		sections.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [sections]);

	return (
		<div className="flex lg:flex-row flex-col min-h-screen text-[#121212] px-4 lg:px-8 xl:px-10 2xl:px-20 py-8 lg:py-14">
			{/* Sidebar */}
			<aside
				className={`${fontClassName} w-full lg:w-64 bg-white py-4 lg:p-4 lg:sticky lg:top-0 h-fit lg:h-screen`}
			>
				<nav className="space-y-2">
					{sections.map((section) => (
						<Link
							key={section.id}
							href={`#${section.id}`}
							className={`block px-4 py-2 rounded transition text-base lg:text-lg font-normal lg:leading-[140%] ${
								activeId === section.id
									? "bg-brand-secondary-500 text-white"
									: "hover:bg-brand-secondary-500 hover:text-white"
							}`}
						>
							{section.title.replace(/^\d+\.\s/, "")}
						</Link>
					))}
				</nav>
			</aside>

			{/* Main Content */}
			<main className="flex-1 lg:px-6 py-5 space-y-8 lg:space-y-10 overflow-y-auto scroll-smooth">
				{sections.map((section) => (
					<section key={section.id} id={section.id}>
						<h2 className="text-xl lg:text-[26px] lg:leading-[140%] text-black font-bold mb-2">
							{section.title}
						</h2>
						<p
							className={`${fontClassName} text-base lg:text-lg text-black font-light lg:leading-[180%]`}
						>
							{section.content}
						</p>
					</section>
				))}
			</main>
		</div>
	);
}
