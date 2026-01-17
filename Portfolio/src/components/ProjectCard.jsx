import { useState } from 'react';

function ProjectCard({ title, year, subtitle, preview, description, frontend, backend, database, hardware, aiModel, features, image, liveLink, githubLink }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	// Combine all tech for display (exclude basic web technologies and hardware)
	const techToDisplay = [
		...(frontend || []).filter(tech => !['HTML', 'CSS', 'JavaScript'].includes(tech)),
		...(backend || []),
		database,
		aiModel
	].filter(Boolean);
	const techString = techToDisplay.join(' | ');

	return (
		<>
			{/* Card */}
			<article 
				className="glass-panel flex flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition duration-200 hover:border-cyan-400/60 cursor-pointer group h-full"
				onClick={openModal}
			>
				{/* Header with Title and Year */}
				<div className="flex items-start justify-between gap-2 flex-wrap">
					<div>
						<h3 className="text-lg sm:text-xl font-bold text-slate-50">{title}</h3>
						{year && <span className="text-xs text-cyan-300 font-medium">({year})</span>}
					</div>
				</div>
			{/* Project Image */}
			{image && (
				<div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/10 to-indigo-500/10">
					<img 
						src={image} 
						alt={title}
						className="w-full h-full object-cover"
					/>
				</div>
			)}
				{/* Subtitle */}
				{subtitle && (
					<p className="text-sm sm:text-base font-semibold text-cyan-300">{subtitle}</p>
				)}

				{/* Tech Stack with pipes */}
				<div>
					<p className="text-xs sm:text-sm text-slate-400 font-medium break-words whitespace-normal">{techString}</p>
				</div>

				{/* Preview Description - 1-2 lines */}
				{preview && (
					<p className="text-xs sm:text-sm text-slate-300 line-clamp-2 flex-1 min-h-0">{preview}</p>
				)}

				{/* View Project Button - Hidden on desktop hover, always on mobile */}
				<div className="hidden sm:flex mt-auto pt-2">
					<button 
						className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 text-sm font-semibold text-slate-100 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:from-cyan-500/30 hover:to-indigo-500/30 hover:border-cyan-400/50"
						onClick={(e) => {
							e.stopPropagation();
							openModal();
						}}
					>
						View Project
					</button>
				</div>

				{/* Mobile only - always show button */}
				<div className="sm:hidden mt-auto pt-2">
					<button 
						className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 text-sm font-semibold text-slate-100 transition-all duration-200 hover:from-cyan-500/30 hover:to-indigo-500/30 hover:border-cyan-400/50"
						onClick={(e) => {
							e.stopPropagation();
							openModal();
						}}
					>
						View Project
					</button>
				</div>
			</article>

			{/* Modal */}
			{isModalOpen && (
				<div 
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
					onClick={closeModal}
				>
					<div 
						className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
							aria-label="Close modal"
						>
							<svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						{/* Modal Content */}
						<div className="p-6 sm:p-8 space-y-5 sm:space-y-6">
							{/* Title and Year */}
							<div>
								<div className="flex items-baseline gap-3 flex-wrap">
									<h2 className="text-2xl sm:text-3xl font-bold text-slate-50">{title}</h2>
									{year && <span className="text-sm font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full">{year}</span>}
								</div>
								{subtitle && (
									<p className="text-base sm:text-lg text-cyan-300 font-semibold mt-2">{subtitle}</p>
								)}
							</div>

							{/* Full Description */}
							<div className="border-t border-white/10 pt-4 sm:pt-5">
								<p className="text-sm sm:text-base leading-relaxed text-slate-300">
									{description}
								</p>
							</div>

							{/* Tech Stack Breakdown */}
							<div className="space-y-3 sm:space-y-4 border-t border-white/10 pt-4 sm:pt-5">
								{frontend && frontend.length > 0 && (
									<div>
										<h3 className="text-sm font-semibold text-slate-100 mb-2">Frontend:</h3>
										<p className="text-sm text-slate-300">{frontend.join(', ')}</p>
									</div>
								)}
								{backend && backend.length > 0 && (
									<div>
										<h3 className="text-sm font-semibold text-slate-100 mb-2">Backend:</h3>
										<p className="text-sm text-slate-300">{backend.join(', ')}</p>
									</div>
								)}
								{database && (
									<div>
										<h3 className="text-sm font-semibold text-slate-100 mb-2">Database:</h3>
										<p className="text-sm text-slate-300">{database}</p>
									</div>
								)}
								{hardware && (
									<div>
										<h3 className="text-sm font-semibold text-slate-100 mb-2">Hardware:</h3>
										<p className="text-sm text-slate-300">{hardware}</p>
									</div>
								)}
								{aiModel && (
									<div>
										<h3 className="text-sm font-semibold text-slate-100 mb-2">AI Model:</h3>
										<p className="text-sm text-slate-300">{aiModel}</p>
									</div>
								)}
							</div>

							{/* Features */}
							{features && features.length > 0 && (
								<div className="border-t border-white/10 pt-4 sm:pt-5">
									<h3 className="text-sm font-semibold text-slate-100 mb-3">Features:</h3>
									<ul className="space-y-2">
										{features.map((feature, index) => (
											<li key={index} className="flex gap-2 text-sm text-slate-300">
												<span className="text-cyan-400 flex-shrink-0">•</span>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
								{githubLink && (
									<a
										href={githubLink}
										target="_blank"
										rel="noreferrer"
										className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-sm sm:text-base font-semibold text-indigo-300 transition hover:bg-indigo-500/30 hover:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
									>
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
										</svg>
										View Code
									</a>
								)}
								{liveLink && (
									<a
										href={liveLink}
										target="_blank"
										rel="noreferrer"
										className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-sm sm:text-base font-semibold text-cyan-300 transition hover:bg-cyan-500/30 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
									>
										<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
										View Live App
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProjectCard;
