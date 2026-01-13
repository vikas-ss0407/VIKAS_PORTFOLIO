import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function Projects() {
	return (
		<section id="projects" className="scroll-mt-24 space-y-6">
			<div className="flex items-center gap-3">
				<div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Projects</p>
					<h2 className="text-3xl font-semibold text-slate-50">Selected work</h2>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						technologies={project.technologies}
						link={project.link}
						repo={project.repo}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
