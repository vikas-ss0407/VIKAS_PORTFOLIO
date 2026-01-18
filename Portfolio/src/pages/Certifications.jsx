import { certifications } from '../data/certifications';
import { useState } from 'react';

function Certifications() {
	const [showModal, setShowModal] = useState(false);
	const initialDisplay = 4;
	const visibleCerts = certifications.slice(0, initialDisplay);

	return (
		<section id="certifications" className="scroll-mt-24 space-y-4 sm:space-y-6">
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Certifications</p>
					<h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Professional Certifications</h2>
				</div>
			</div>

			<div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{visibleCerts.map((cert, index) => (
					<div key={index} className="group w-full glass-panel rounded-lg sm:rounded-xl p-2 sm:p-3 border-t-4 border-cyan-400/60 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex flex-col">
						<div className="space-y-1 flex-grow">
							<div>
								<h3 className="text-xs sm:text-sm font-semibold text-slate-50 line-clamp-2">{cert.title}</h3>
								<p className="text-xs text-slate-400">{cert.date}</p>
							</div>
							
							<div className="flex flex-col gap-1">
								<p className="text-xs font-medium text-cyan-300">{cert.issuer}</p>
							</div>

							{cert.credentialId && !cert.credentialUrl && (
								<p className="text-xs text-slate-400">ID: {cert.credentialId}</p>
							)}
						</div>
						
						{cert.credentialUrl && (
							<a
								href={cert.credentialUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center gap-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-3 py-1.5 rounded-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 mt-2"
							>
								View Certificate →
							</a>
						)}
					</div>
				))}
			</div>

			{certifications.length > initialDisplay && (
				<div className="flex justify-center pt-4">
					<button
						onClick={() => setShowModal(true)}
						className="rounded-full glass-panel border-2 border-cyan-400/60 hover:border-cyan-400 transition-colors flex items-center justify-center hover:bg-cyan-400/10 px-6 py-3"
						aria-label="View all certificates"
					>
						<span className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">View All Certificates</span>
					</button>
				</div>
			)}

			{showModal && (
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
					<div className="bg-slate-900 rounded-lg sm:rounded-xl border border-cyan-400/30 max-w-4xl max-h-[90vh] overflow-y-auto w-full">
						<div className="sticky top-0 bg-slate-900 border-b border-cyan-400/30 p-4 sm:p-6 flex items-center justify-between">
							<h3 className="text-xl sm:text-2xl font-semibold text-slate-50">All Certifications</h3>
							<button
								onClick={() => setShowModal(false)}
								className="text-slate-400 hover:text-slate-50 transition-colors text-2xl"
								aria-label="Close modal"
							>
								✕
							</button>
						</div>

						<div className="grid gap-3 p-4 sm:p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{certifications.map((cert, index) => (
								<div key={index} className="group glass-panel rounded-lg sm:rounded-xl p-3 sm:p-4 border-t-4 border-cyan-400/60 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex flex-col">
									<div className="space-y-2 flex-grow">
										<div>
											<h3 className="text-sm font-semibold text-slate-50 line-clamp-2">{cert.title}</h3>
											<p className="text-xs text-slate-400">{cert.date}</p>
										</div>
										
										<div className="flex flex-col gap-1">
											<p className="text-xs font-medium text-cyan-300">{cert.issuer}</p>
										</div>

										{cert.credentialId && !cert.credentialUrl && (
											<p className="text-xs text-slate-400">ID: {cert.credentialId}</p>
										)}
									</div>
									
									{cert.credentialUrl && (
										<a
											href={cert.credentialUrl}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center justify-center gap-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-3 py-1.5 rounded-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 mt-2"
										>
											View Certificate →
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default Certifications;
