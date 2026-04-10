"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
	// Logo click handler removed as it's now handled internally
}

export function Navbar({}: NavbarProps = {}) {
	const [isOpen, setIsOpen] = useState(false);
	const [hasEntered, setHasEntered] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const router = useRouter();

	// One-time entrance animation
	useEffect(() => {
		const timer = setTimeout(() => setHasEntered(true), 800);
		return () => clearTimeout(timer);
	}, []);

	// Close dropdown when clicking outside
	useEffect(() => {
		if (!isOpen) return;
		const handleClickOutside = (e: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	const scrollTo = (id: string) => {
		setIsOpen(false);
		if (pathname !== "/") {
			router.push(`/#${id}`);
			return;
		}
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleLogoClick = () => {
		setIsOpen(false);
		if (pathname !== "/") {
			router.push("/#hero");
		} else {
			scrollTo("hero");
		}
	};

	return (
		<nav
			className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-4xl transition-all duration-700 ease-out ${hasEntered ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
		>
			<div className="relative" ref={dropdownRef}>
				<div className="flex items-center justify-between p-2 pr-4 md:pr-6 bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/80 w-full h-[72px] relative z-20">
					{/* Logo */}
					<button
						type="button"
						onClick={handleLogoClick}
						className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-[1.03] transition-transform duration-300 relative group cursor-pointer"
						aria-label="Navigate to home"
					>
						<div className="absolute inset-0 rounded-full border border-brand-orange opacity-0 group-hover:animate-ping" />
						<Image
							src="/assets/logo-svgs/transpo-Logo.svg"
							alt="Transpo"
							width={32}
							height={32}
							className="relative z-10"
							unoptimized
						/>
					</button>

					{/* Desktop Links */}
					<div className="hidden md:flex flex-1 items-center justify-center gap-12 text-sm font-semibold text-gray-600 cursor-pointer">
						<button
							type="button"
							onClick={() => scrollTo("products")}
							className="hover:text-brand-orange transition-colors tracking-wide cursor-pointer"
						>
							Products
						</button>
						<div className="w-[1px] h-8 bg-gray-200" />
						<button
							type="button"
							onClick={() => scrollTo("support")}
							className="hover:text-brand-orange transition-colors tracking-wide cursor-pointer"
						>
							Support
						</button>
						<div className="w-[1px] h-8 bg-gray-200" />
						<button
							type="button"
							onClick={() => scrollTo("feedback")}
							className="hover:text-brand-orange transition-colors tracking-wide cursor-pointer"
						>
							Feedback
						</button>
					</div>

					{/* Desktop CTA */}
					<button
						type="button"
						onClick={() => scrollTo("signup")}
						className="hidden md:flex bg-[#D19039] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-brand-orange hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 tracking-wide cursor-pointer"
					>
						sign up
					</button>

					{/* Mobile Menu Toggle */}
					<button
						type="button"
						className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-gray-700 gap-1.5 hover:text-brand-orange transition-colors ml-auto mr-1 cursor-pointer"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle Navigation"
						aria-expanded={isOpen}
					>
						<div
							className={`w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
						/>
						<div
							className={`w-5 h-0.5 bg-current rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
						/>
						<div
							className={`w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
						/>
					</button>
				</div>

				{/* Mobile Dropdown — CSS-only transitions, no Framer Motion layout recalc */}
				<div
					className={`absolute top-[80px] left-0 right-0 bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col z-10 md:hidden pb-4 transition-all duration-300 ease-out origin-top ${isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"}`}
				>
					<div className="flex flex-col items-center pt-4 border-b border-gray-100 mx-4">
						<button
							type="button"
							onClick={() => scrollTo("products")}
							className="w-full py-4 text-center font-bold text-gray-700 hover:text-brand-orange active:bg-gray-50 rounded-xl transition-colors cursor-pointer"
						>
							Products
						</button>
					</div>
					<div className="flex flex-col items-center border-b border-gray-100 mx-4">
						<button
							type="button"
							onClick={() => scrollTo("support")}
							className="w-full py-4 text-center font-bold text-gray-700 hover:text-brand-orange active:bg-gray-50 rounded-xl transition-colors cursor-pointer"
						>
							Support
						</button>
					</div>
					<div className="flex flex-col items-center border-b border-gray-100 mx-4 mb-4">
						<button
							type="button"
							onClick={() => scrollTo("feedback")}
							className="w-full py-4 text-center font-bold text-gray-700 hover:text-brand-orange active:bg-gray-50 rounded-xl transition-colors cursor-pointer"
						>
							Feedback
						</button>
					</div>
					<div className="px-6">
						<button
							type="button"
							onClick={() => scrollTo("signup")}
							className="w-full bg-[#D19039] text-white py-4 rounded-2xl font-bold shadow-md active:-translate-y-0 tracking-wide text-lg text-center cursor-pointer"
						>
							sign up
						</button>
					</div>
				</div>
			</div>
		</nav>

	);
}
