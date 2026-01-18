import { trainings } from '../data/trainings';

function Trainings() {
	return (
		<section id="trainings" className="scroll-mt-24 space-y-4 sm:space-y-6">
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
				<p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Trainings</p>
				<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50">Internships & Trainings</h2>
				</div>
			</div>

			<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
				{trainings.map((training, index) => (
					<div key={index} className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-indigo-400/60 hover:border-indigo-400 transition-colors">
						<div className="flex gap-4">
							{training.logo && (
								<div className="flex-shrink-0">
									<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg">
										<img 
											src={training.logo} 
											alt={`${training.company} logo`}
											className="w-full h-full object-contain"
										/>
									</div>
								</div>
							)}
							<div className="flex-1 space-y-2">
								<div>
							<h3 className="text-lg sm:text-xl font-semibold text-slate-50">{training.title}</h3>
							<p className="text-sm sm:text-base font-medium text-indigo-300">{training.company}</p>
							<p className="text-sm text-slate-400">{training.date}</p>
									{training.type && (
										<span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-indigo-400/10 text-indigo-300 border border-indigo-400/30">
											{training.type}
										</span>
									)}
								</div>

								{training.description && (
									<p className="text-sm sm:text-base text-slate-300 leading-relaxed">{training.description}</p>
								)}

								{training.skills && training.skills.length > 0 && (
									<div className="flex flex-wrap gap-1.5 pt-1">
										{training.skills.map((skill, i) => (
											<span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
												{skill}
											</span>
										))}
									</div>
								)}

								{training.certificateLink && (
									<div className="pt-3">
										<a
											href={training.certificateLink}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 transition hover:bg-indigo-500/30 hover:border-indigo-400/50"
										>
											<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											View Certificate
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Trainings;
