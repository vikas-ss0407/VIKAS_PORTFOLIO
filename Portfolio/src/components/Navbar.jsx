import { useState } from 'react';
import SocialLinks from './SocialLinks';

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#education', label: 'Education' },
	{ href: '#contact', label: 'Contact' },
];

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
				<div className="flex items-center gap-3">
					<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500" aria-hidden />
					<div>
						<p className="text-sm uppercase tracking-[0.18em] text-slate-400">Portfolio</p>
						<p className="text-lg font-semibold text-slate-100">Vikas Kumar</p>
					</div>
				</div>

				<nav className="hidden items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-sm font-medium text-slate-100 shadow-lg shadow-cyan-500/5 md:flex">
					{navLinks.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-3 py-2 transition hover:bg-white/10"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="hidden md:block">
					<SocialLinks variant="compact" />
				</div>

				<button
					type="button"
					onClick={() => setOpen((prev) => !prev)}
					className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-cyan-400/50 md:hidden"
					aria-label="Toggle navigation"
					aria-expanded={open}
				>
					<span className="block h-0.5 w-6 rounded-full bg-current" />
					<span className="mt-1.5 block h-0.5 w-6 rounded-full bg-current" />
					<span className="mt-1.5 block h-0.5 w-4 rounded-full bg-current" />
				</button>
			</div>

			{open && (
				<div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4 sm:px-10 lg:px-12 md:hidden">
					{navLinks.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
						>
							{item.label}
						</a>
					))}
					<div className="rounded-xl bg-white/5 px-4 py-3">
						<SocialLinks variant="full" />
					</div>
				</div>
			)}
			<div className="rainbow-bar" aria-hidden />
		</header>
	);
}

export default Navbar;
