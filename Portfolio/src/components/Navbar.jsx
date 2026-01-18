import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import logo from '../assets/images/logoportfolio.png';

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#certifications', label: 'Certificates' },
	{ href: '#trainings', label: 'Experience' },
	{ href: '#education', label: 'Education' },
];

function Navbar() {
	const [open, setOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('#about');
	const activeLabel = navLinks.find((item) => item.href === activeSection)?.label ?? 'About';

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(`#${entry.target.id}`);
					}
				});
			},
			{
				rootMargin: '-40% 0px -40% 0px', // favor the section near viewport center
				threshold: 0.1,
			}
		);

		navLinks.forEach((item) => {
			const section = document.querySelector(item.href);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	const linkBase = 'rounded-full px-2 sm:px-3 py-1.5 sm:py-2 transition outline-none';
	const linkActive = 'bg-white/15 text-cyan-200 ring-1 ring-cyan-400/40';
	const linkIdle = 'hover:bg-white/10 focus:bg-white/10';

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-lg transition-all duration-300">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-10 lg:px-12">
				<div className="flex items-center gap-2 sm:gap-3">
					<img src={logo} alt="Portfolio Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl object-contain" />
					<div>
					<p className="text-sm sm:text-base font-light text-slate-100">Vikas</p>
					<p className="text-lg sm:text-2xl font-bold uppercase tracking-[0.1em] text-white">Portfolio</p>
					</div>
				</div>
				<nav className="hidden items-center gap-1 rounded-full bg-white/5 px-1 sm:px-2 py-1 text-sm sm:text-base font-medium text-slate-100 shadow-lg shadow-cyan-500/5 md:flex">
					{navLinks.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className={`${linkBase} ${activeSection === item.href ? linkActive : linkIdle}`}
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="hidden md:block">
					<SocialLinks variant="compact" />
				</div>

				<div className="md:hidden text-[13px] font-semibold text-cyan-200 bg-white/5 border border-white/10 rounded-full px-3 py-0.5 tracking-wide flex-1 text-center mx-2">
					{activeLabel}
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
							className={`rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-slate-100 transition outline-none ${activeSection === item.href ? 'bg-white/15 text-cyan-200 ring-1 ring-cyan-400/40' : 'bg-white/5 hover:bg-white/10 focus:bg-white/10'}`}
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
