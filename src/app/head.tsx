export default function Head() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Transpo",
						applicationCategory: "MusicApplication",
						operatingSystem: "Chrome",
						description:
							"Real-time key detection tool that analyzes audio and identifies musical keys instantly.",
						url: "https://www.transpo.studio",
					}),
				}}
			/>
		</>
	);
}