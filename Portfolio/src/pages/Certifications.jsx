import { certifications } from '../data/certifications';

function Certifications() {
	return (
		<section id="certifications" className="scroll-mt-24 space-y-4 sm:space-y-6">
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Certifications</p>
					<h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Professional Certifications</h2>
				</div>
			</div>

			<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
				{certifications.map((cert, index) => (
					<div key={index} className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6 border-t-4 border-cyan-400/60 hover:border-cyan-400 transition-colors">
						<div className="flex gap-4">
							{cert.logo && (
								<div className="flex-shrink-0">
									<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg">
										<img 
											src={cert.logo} 
											alt={`${cert.issuer} logo`}
											className="w-full h-full object-contain"
										/>
									</div>
								</div>
							)}
							<div className="flex-1 space-y-2">
								<div>
									<h3 className="text-base sm:text-lg font-semibold text-slate-50">{cert.title}</h3>
									<p className="text-xs sm:text-sm font-medium text-cyan-300">{cert.issuer}</p>
									<p className="text-xs text-slate-400">{cert.date}</p>
								</div>

								{cert.skills && cert.skills.length > 0 && (
									<div className="flex flex-wrap gap-1.5 pt-1">
										{cert.skills.map((skill, i) => (
											<span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
												{skill}
											</span>
										))}
									</div>
								)}

								{cert.credentialUrl && (
									<a
										href={cert.credentialUrl}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
									>
										View Credential →
									</a>
								)}

								{cert.credentialId && !cert.credentialUrl && (
									<p className="text-xs text-slate-400 mt-1">ID: {cert.credentialId}</p>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Certifications;
