import { education } from '../data/education';

function Education() {
	return (
		<section id="education" className="scroll-mt-24 space-y-4 sm:space-y-6">
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
				<p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Education</p>
				<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50">Learning Journey</h2>
				</div>
			</div>

			<div className="space-y-4 sm:space-y-6">
				{education.map((edu, index) => (
					<div key={index} className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-cyan-400/60">
						<div className="grid gap-4 sm:gap-6 lg:grid-cols-[auto_1fr]">
							{edu.logo && (
								<div className="flex justify-center lg:justify-start">
									<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg">
										<img 
											src={edu.logo} 
											alt={`${edu.school} logo`}
											className="w-full h-full object-contain"
										/>
									</div>
								</div>
							)}
							<div>
						<h3 className="text-xl sm:text-2xl font-semibold text-slate-50">{edu.degree}</h3>
						<p className="text-sm sm:text-base font-medium text-cyan-300">{edu.school}</p>
						<p className="text-sm sm:text-base text-slate-400">{edu.year}</p>
								{edu.grade && <p className="text-sm sm:text-base font-semibold text-green-400">Grade: {edu.grade}</p>}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Education;
