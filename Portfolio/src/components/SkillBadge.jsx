function SkillBadge({ label }) {
	return (
		<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 shadow-lg shadow-cyan-500/5">
			{label}
		</span>
	);
}

export default SkillBadge;
