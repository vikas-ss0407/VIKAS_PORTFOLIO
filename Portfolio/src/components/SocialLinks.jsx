const links = [
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/vikasss0407',
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
				<path
					fill="currentColor"
					d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 8.98h3.96V21H3zM9.48 9h3.8v1.64h.05c.53-.98 1.83-2 3.77-2 4.03 0 4.77 2.5 4.77 5.75V21h-3.96v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21H9.48z"
				/>
			</svg>
		),
	},
	{
		label: 'GitHub',
		href: 'https://github.com/vikas-ss0407',
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
				<path
					fill="currentColor"
					d="M12 .5A11.5 11.5 0 0 0 .5 12.22c0 5.2 3.36 9.6 8.03 11.15.58.1.8-.25.8-.56 0-.28-.02-1.22-.02-2.22-3.28.7-3.97-1.42-3.97-1.42-.53-1.37-1.3-1.74-1.3-1.74-1.07-.74.08-.74.08-.74 1.18.08 1.8 1.2 1.8 1.2 1.05 1.86 2.75 1.32 3.42 1 .1-.76.4-1.32.72-1.62-2.62-.3-5.38-1.34-5.38-6 0-1.32.46-2.38 1.2-3.22-.12-.3-.52-1.52.1-3.16 0 0 .98-.32 3.2 1.22a11 11 0 0 1 5.82 0c2.22-1.54 3.2-1.22 3.2-1.22.62 1.64.22 2.86.1 3.16.76.84 1.2 1.9 1.2 3.22 0 4.68-2.77 5.7-5.4 6 .42.36.78 1.06.78 2.16 0 1.56-.02 2.82-.02 3.22 0 .3.22.66.8.55A11.53 11.53 0 0 0 23.5 12.2 11.5 11.5 0 0 0 12 .5Z"
				/>
			</svg>
		),
	},
	{
		label: 'LeetCode',
		href: 'https://leetcode.com/u/vikasss0407/',
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
				<path
					fill="currentColor"
					d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.2 1.2 0 0 0-.16 1.606l5.356 7.257-2.08 3.829a1.2 1.2 0 0 0 1.634 1.534l3.58-6.573a1.2 1.2 0 0 0 0-1.22L10.5 7.428l2.116-3.094a1.2 1.2 0 0 0-.133-1.606zm6.697 11.66c-.681.264-1.611.228-2.42-.perform-.787-.276-1.486-.568-2.1-.97l-.049-.028c-.025-.013-.049-.030-.075-.045-.125-.055-.245-.11-.358-.159H9.627a1.2 1.2 0 0 0 0 2.4h4.352a1.2 1.2 0 0 1 0 2.4H8.427a1.2 1.2 0 0 0 0 2.4h5.552a1.2 1.2 0 0 1 0 2.4H7.227a1.2 1.2 0 0 0 0 2.4h6.2z"
				/>
			</svg>
		),
	},
	{
		label: 'Email',
		href: 'mailto:hello@example.com',
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
				<path
					fill="currentColor"
					d="M3 5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h18c.83 0 1.5-.67 1.5-1.5v-11C22.5 5.67 21.83 5 21 5H3Zm.75 2.25 7.63 4.77c.38.23.86.23 1.24 0l7.63-4.77V17.5H3.75V7.25Zm16.5-1.5L12 11.25 3.75 5.75h16.5Z"
				/>
			</svg>
		),
	},
];

function SocialLinks({ variant = 'full' }) {
	const base = 'flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-100';

	return (
		<div className="flex flex-wrap items-center gap-3">
			{links.map((item) => (
				<a
					key={item.label}
					href={item.href}
					target={item.href.startsWith('mailto:') ? undefined : '_blank'}
					rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
					className={variant === 'compact' ? 'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-100' : base}
				>
					{item.icon}
					{variant === 'full' && <span>{item.label}</span>}
				</a>
			))}
		</div>
	);
}

export default SocialLinks;
