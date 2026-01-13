import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';

function Skills() {
	return (
		<section id="skills" className="scroll-mt-24 space-y-4 sm:space-y-6">
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Skills</p>
					<h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Tools and strengths</h2>
				</div>
			</div>

			<div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				<div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6">
					<h3 className="text-base sm:text-lg font-semibold text-slate-50">Programming Languages</h3>
					<div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
						{skills.languages.map((item) => (
							<SkillBadge key={typeof item === 'string' ? item : item.name} skill={item} />
						))}
					</div>
				</div>

				<div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6">
					<h3 className="text-base sm:text-lg font-semibold text-slate-50">Frontend</h3>
					<div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
						{skills.frontend.map((item) => (
							<SkillBadge key={typeof item === 'string' ? item : item.name} skill={item} />
						))}
					</div>
				</div>

				<div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6">
					<h3 className="text-base sm:text-lg font-semibold text-slate-50">Backend</h3>
					<div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
						{skills.backend.map((item) => (
							<SkillBadge key={typeof item === 'string' ? item : item.name} skill={item} />
						))}
					</div>
				</div>

				<div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6">
					<h3 className="text-base sm:text-lg font-semibold text-slate-50">Tools</h3>
					<div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
						{skills.tools.map((item) => (
							<SkillBadge key={typeof item === 'string' ? item : item.name} skill={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
