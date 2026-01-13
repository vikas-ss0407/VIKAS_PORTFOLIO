function ProjectCard({ title, description, technologies, link, repo }) {
	return (
		<article className="glass-panel flex flex-col gap-4 rounded-2xl p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/60">
			<div className="flex items-start justify-between gap-3">
				<div>
					<h3 className="text-xl font-semibold text-slate-50">{title}</h3>
					<p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
				</div>
				<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/60 to-indigo-500/70" aria-hidden />
			</div>

			<div className="flex flex-wrap gap-2">
				{technologies.map((tech) => (
					<span
						key={tech}
						className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="text-cyan-300 transition hover:text-cyan-200"
					>
						Live
					</a>
				)}
				{repo && (
					<a
						href={repo}
						target="_blank"
						rel="noreferrer"
						className="text-indigo-300 transition hover:text-indigo-200"
					>
						Code
					</a>
				)}
			</div>
		</article>
	);
}

export default ProjectCard;
