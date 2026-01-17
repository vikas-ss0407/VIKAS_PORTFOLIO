import SocialLinks from './SocialLinks';

function Footer() {
	return (
		<footer className="border-t border-white/5 bg-slate-950/80">
			<div className="mx-auto flex max-w-6xl flex-col gap-3 sm:gap-4 px-4 py-6 sm:px-10 lg:px-12 sm:py-8">
				<div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-base sm:text-lg font-semibold text-slate-100">Let us build something great.</p>
						<p className="text-xs sm:text-sm text-slate-400">Open to freelance, full-time, or collaborative opportunities.</p>
					</div>
					<SocialLinks variant="full" />
				</div>
				<div className="flex flex-col gap-2 border-t border-white/5 pt-3 sm:pt-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-xs uppercase tracking-[0.25em] text-slate-500">Crafted with React & Tailwind</p>
					<p className="text-xs sm:text-sm text-slate-400">© {new Date().getFullYear()} Vikas. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
