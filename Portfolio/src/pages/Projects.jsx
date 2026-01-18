import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function Projects() {
	return (
		<section id="projects" className="scroll-mt-24 space-y-4 sm:space-y-6">
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
				<p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Projects</p>
				<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50">Selected work</h2>
				</div>
			</div>

			<div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						year={project.year}
						subtitle={project.subtitle}
						preview={project.preview}
						description={project.description}
						frontend={project.frontend}
						backend={project.backend}
						database={project.database}
						hardware={project.hardware}
						aiModel={project.aiModel}
						features={project.features}					image={project.image}						liveLink={project.liveLink}
						githubLink={project.githubLink}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
