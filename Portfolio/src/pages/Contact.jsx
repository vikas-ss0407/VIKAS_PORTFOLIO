function Contact() {
	return (
		<section id="contact" className="scroll-mt-24 space-y-6">
			<div className="flex items-center gap-3">
				<div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" aria-hidden />
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Contact</p>
					<h2 className="text-3xl font-semibold text-slate-50">Let us talk</h2>
				</div>
			</div>

			<div className="glass-panel grid gap-8 rounded-3xl p-8 lg:grid-cols-2">
				<div className="space-y-4 text-base leading-relaxed text-slate-300">
					<p>
						Whether you have a role in mind, need help shipping a feature, or just want to exchange notes on product engineering, I am one email away.
					</p>
					<p className="text-sm text-slate-400">I usually respond within one business day.</p>
				</div>

				<form className="space-y-4">
					<div>
						<label className="text-sm font-semibold text-slate-200" htmlFor="name">Name</label>
						<input
							id="name"
							type="text"
							placeholder="Your name"
							className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70"
						/>
					</div>
					<div>
						<label className="text-sm font-semibold text-slate-200" htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							placeholder="you@example.com"
							className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70"
						/>
					</div>
					<div>
						<label className="text-sm font-semibold text-slate-200" htmlFor="message">Message</label>
						<textarea
							id="message"
							rows="4"
							placeholder="Tell me about the project or the role."
							className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
