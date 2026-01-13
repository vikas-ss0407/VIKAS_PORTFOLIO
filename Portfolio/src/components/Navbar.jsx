import { useState } from 'react';
import SocialLinks from './SocialLinks';
import logo from '../assets/images/logoportfolio.png';

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
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-10 lg:px-12">
				<div className="flex items-center gap-2 sm:gap-3">
					<img src={logo} alt="Portfolio Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl object-contain" />
					<div>
						<p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-slate-400">Portfolio</p>
						<p className="text-sm sm:text-lg font-semibold text-slate-100">Vikas</p>
					</div>
				</div>

				<nav className="hidden items-center gap-1 rounded-full bg-white/5 px-1 sm:px-2 py-1 text-xs sm:text-sm font-medium text-slate-100 shadow-lg shadow-cyan-500/5 md:flex">
					{navLinks.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-2 sm:px-3 py-1.5 sm:py-2 transition hover:bg-white/10 focus:bg-white/10 outline-none"
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
					className="rounded-lg border border-white/10 p-1.5 text-slate-200 transition hover:border-cyan-400/50 md:hidden"
					aria-label="Toggle navigation"
					aria-expanded={open}
				>
					<span className="block h-0.5 w-5 rounded-full bg-current" />
					<span className="mt-1 block h-0.5 w-5 rounded-full bg-current" />
					<span className="mt-1 block h-0.5 w-4 rounded-full bg-current" />
				</button>
			</div>

			{open && (
				<div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 pb-3 sm:px-10 lg:px-12 md:hidden">
					{navLinks.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="rounded-lg bg-white/5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:bg-white/10 outline-none"
						>
							{item.label}
						</a>
					))}
					<div className="rounded-lg bg-white/5 px-3 py-2">
						<SocialLinks variant="full" />
					</div>
				</div>
			)}
			<div className="rainbow-bar" aria-hidden />
		</header>
	);
}

export default Navbar;
