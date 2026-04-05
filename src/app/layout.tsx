import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const calistoga = Calistoga({
	variable: "--font-calistoga",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Transpo | Music, your way.",
	description:
		"Transpo detects the key of any audio in real time — so your music adapts to you.",
	keywords: [
		"music",
		"key detection",
		"chrome extension",
		"transpo",
		"real-time audio analysis",
		"detect key of a song",
		"real time key detection",
		"music key finder",
		"audio key detection chrome extension",
		"find song key online",
		"transpo app",
	],
	openGraph: {
		title: "Transpo | Music, your way.",
		description: "Transpo detects the key of any audio in real time.",
		url: "https://www.transpo.studio",
		siteName: "Transpo",
		images: [{ url: "/opengraph-image.png" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Transpo | Music, your way.",
		description: "Transpo detects the key of any audio in real time.",
		images: ["/twitter-image.png"],
	},
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/icon.svg", type: "image/svg+xml" },
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${calistoga.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col font-sans bg-background text-foreground scroll-smooth">
				{children}
			</body>
		</html>
	);
}
