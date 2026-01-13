import SocialLinks from '../components/SocialLinks';

function Home() {
	return (
		<section id="home" className="flex flex-col gap-8 pt-10">
			<div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 lg:px-12">
				<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent" aria-hidden />
				<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					<div className="max-w-2xl space-y-4">
						<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Product Engineer</p>
						<h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
							Hi, I am Vikas. I build thoughtful web experiences that balance polish with performance.
						</h1>
						<p className="text-base leading-relaxed text-slate-300 sm:text-lg">
							Full-stack developer focused on React, modern CSS, and resilient backend APIs. I love fast feedback loops, clean DX, and shipping impactful products.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<a
								href="#projects"
								className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
							>
								View Projects
							</a>
							<a
								href="#contact"
								className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:-translate-y-0.5"
							>
								Contact Me
							</a>
						</div>
					</div>
					<div className="mt-6 flex w-full flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 lg:mt-0 lg:max-w-sm">
						<p className="text-sm font-semibold text-slate-200">Currently exploring</p>
						<ul className="space-y-3 text-sm text-slate-300">
							<li>• Animations with Framer Motion</li>
							<li>• High-signal dashboards with real-time data</li>
							<li>• Accessible, keyboard-first navigation patterns</li>
						</ul>
						<SocialLinks variant="full" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
