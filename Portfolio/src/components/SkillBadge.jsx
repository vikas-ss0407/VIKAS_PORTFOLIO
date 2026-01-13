function SkillBadge({ skill }) {
	const label = typeof skill === 'string' ? skill : skill.name;
	const icon = typeof skill === 'object' ? skill.icon : null;

	return (
		<span className="rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-100 shadow-lg shadow-cyan-500/5 flex items-center gap-2">
			{icon && (
				<img 
					src={icon} 
					alt={label} 
					className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
					onError={(e) => e.target.style.display = 'none'}
				/>
			)}
			{label}
		</span>
	);
}

export default SkillBadge;
