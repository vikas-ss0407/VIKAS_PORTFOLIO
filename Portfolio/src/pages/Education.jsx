import { education } from '../data/education';

function Education() {
	return (
		<section id="education" className="scroll-mt-24 space-y-6">
			<div className="flex items-center gap-3">
				<div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Education</p>
					<h2 className="text-3xl font-semibold text-slate-50">Learning Journey</h2>
				</div>
			</div>

			<div className="space-y-6">
				{education.map((edu, index) => (
					<div key={index} className="glass-panel rounded-2xl p-6 lg:p-8 border-l-4 border-cyan-400/60">
						<div className="grid gap-6 lg:grid-cols-3">
							<div className="lg:col-span-2 space-y-3">
								<div>
									<h3 className="text-xl font-semibold text-slate-50">{edu.degree}</h3>
									<p className="text-sm font-medium text-cyan-300">{edu.school}</p>
									<p className="text-sm text-slate-400">{edu.year}</p>
								</div>
								<p className="text-base leading-relaxed text-slate-300">{edu.description}</p>
							</div>
							<div className="space-y-3 rounded-xl bg-white/5 p-4 border border-white/10">
								<p className="text-sm font-semibold text-slate-50">Key Achievements</p>
								<ul className="space-y-2">
									{edu.achievements.map((achievement, i) => (
										<li key={i} className="text-sm text-slate-300 flex items-start gap-2">
											<span className="text-cyan-300 font-bold">✓</span>
											<span>{achievement}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Education;
