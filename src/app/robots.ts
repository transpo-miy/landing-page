export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: "https://www.transpo.studio/sitemap.xml",
	};
}
