function ProjectCard({ title, description, technologies, link, repo }) {
	return (
		<article className="glass-panel flex flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/60 active:translate-y-0">
			<div className="flex items-start justify-between gap-3">
				<div>
					<h3 className="text-lg sm:text-xl font-semibold text-slate-50">{title}</h3>
					<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">{description}</p>
				</div>
				<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-cyan-400/60 to-indigo-500/70 flex-shrink-0" aria-hidden />
			</div>

			<div className="flex flex-wrap gap-1.5 sm:gap-2">
				{technologies.map((tech) => (
					<span
						key={tech}
						className="rounded-full bg-white/10 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-slate-100"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="text-cyan-300 transition hover:text-cyan-200 focus:text-cyan-200 outline-none"
					>
						Live
					</a>
				)}
				{repo && (
					<a
						href={repo}
						target="_blank"
						rel="noreferrer"
						className="text-indigo-300 transition hover:text-indigo-200 focus:text-indigo-200 outline-none"
					>
						Code
					</a>
				)}
			</div>
		</article>
	);
}

export default ProjectCard;
