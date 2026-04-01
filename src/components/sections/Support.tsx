import { SectionWrapper } from "../layout/SectionWrapper";

export function Support() {
	return (
		<SectionWrapper
			id="support"
			title="Support"
		>
			<div className="text-center w-full max-w-2xl mx-auto text-white">
				<h2 className="font-calistoga text-3xl md:text-5xl font-bold mb-6 leading-tight">
					We&apos;re here to help
				</h2>
				<p className="text-white/80 text-lg mb-10 font-medium">
					Whether you found a bug or just want to tell us how much you love the
					product, our support lines are open.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a href="/faq" className="bg-white text-[#4A2B14] shadow-lg hover:shadow-xl hover:-translate-y-1 px-8 py-3 rounded-full font-bold transition-all w-full sm:w-auto">
						Read FAQs
					</a>
					{/* <button className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-colors w-full sm:w-auto">
						Visit Help Center
					</button> */}
				</div>
			</div>
		</SectionWrapper>
	);
}
