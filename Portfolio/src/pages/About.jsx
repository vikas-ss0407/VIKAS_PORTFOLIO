import SocialLinks from '../components/SocialLinks';

function About() {
	return (
		<section id="about" className="scroll-mt-24 space-y-6">
			{/* Hero Section with Photo */}
			<div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 lg:px-12">
				<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent" aria-hidden />
				<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					{/* Left Content */}
					<div className="max-w-2xl space-y-4">
						<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">About Me</p>
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

					{/* Right Side - Photo & Info Box */}
					<div className="mt-6 flex w-full flex-col items-start gap-4 lg:mt-0 lg:max-w-sm">
						{/* Profile Photo */}
						<div className="relative w-full overflow-hidden rounded-2xl border-2 border-cyan-400/30 aspect-square">
							<img
								src="/images/profile.jpg"
								alt="Vikas Kumar - Product Engineer"
								className="h-full w-full object-cover"
								onError={(e) => {
									e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23334155%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22%2394a3b8%22 font-family=%22sans-serif%22%3EAdd Your Photo%3C/text%3E%3C/svg%3E';
								}}
							/>
						</div>

						{/* Highlights Box */}
						<div className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
							<p className="text-sm font-semibold text-slate-50">Highlights</p>
							<ul className="space-y-3 text-sm text-slate-300">
								<li>• 4+ years building React interfaces</li>
								<li>• Led migrations to Vite + Tailwind</li>
								<li>• Comfortable with design handoff and Figma</li>
								<li>• Mentor for junior engineers</li>
							</ul>
						</div>

						{/* Currently Exploring Box */}
						<div className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
							<p className="text-sm font-semibold text-slate-200">Currently exploring</p>
							<ul className="space-y-3 text-sm text-slate-300">
								<li>• Animations with Framer Motion</li>
								<li>• High-signal dashboards with real-time data</li>
								<li>• Accessible, keyboard-first navigation patterns</li>
							</ul>
						</div>

						{/* Social Links */}
						<div className="w-full">
							<SocialLinks variant="full" />
						</div>
					</div>
				</div>
			</div>

			{/* Detailed About Section */}
			<div className="glass-panel grid gap-8 rounded-3xl p-8 lg:grid-cols-2">
				<div className="space-y-4 text-base leading-relaxed text-slate-300">
					<h2 className="text-2xl font-semibold text-slate-50">A builder with product instincts</h2>
					<p>
						I create digital products that feel purposeful and fast. With a background in frontend craft and a curiosity for backend systems, I can ship end-to-end features that balance user delight with maintainable code.
					</p>
					<p>
						My approach combines rapid iteration, thoughtful UI states, and sensible performance budgets. I care about accessibility, predictable architecture, and leaving teams with clear documentation.
					</p>
				</div>
				<div className="space-y-6">
					<div>
						<h3 className="text-lg font-semibold text-slate-50 mb-3">Experience</h3>
						<div className="space-y-4 text-sm text-slate-300">
							<div className="border-l-2 border-cyan-400/50 pl-4">
								<p className="font-semibold text-slate-100">Senior Frontend Engineer</p>
								<p className="text-slate-400">Tech Company • 2022 - Present</p>
							</div>
							<div className="border-l-2 border-indigo-400/50 pl-4">
								<p className="font-semibold text-slate-100">Full-Stack Developer</p>
								<p className="text-slate-400">Startup • 2020 - 2022</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
