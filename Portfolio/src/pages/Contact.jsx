function Contact() {
	return (
		<section id="contact" className="scroll-mt-24 space-y-8 sm:space-y-12 flex flex-col items-center justify-center min-h-[500px]">
			<div className="text-center space-y-6">
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
					Vikas
				</h2>
				
				<p className="text-2xl sm:text-3xl text-slate-200">
					Get in touch !!
				</p>
				
				<div className="flex gap-8 sm:gap-12 justify-center pt-8">
					<a
						href="https://www.linkedin.com/in/vikasss0407"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/20 transition-all hover:scale-110"
						aria-label="LinkedIn"
					>
						<svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden>
							<path
								fill="currentColor"
								d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 8.98h3.96V21H3zM9.48 9h3.8v1.64h.05c.53-.98 1.83-2 3.77-2 4.03 0 4.77 2.5 4.77 5.75V21h-3.96v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21H9.48z"
							/>
						</svg>
					</a>
					<a
						href="mailto:vikasss0407@gmail.com"
						className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/20 transition-all hover:scale-110"
						aria-label="Email"
					>
						<svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden>
							<path
								fill="currentColor"
								d="M3 5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h18c.83 0 1.5-.67 1.5-1.5v-11C22.5 5.67 21.83 5 21 5H3Zm.75 2.25 7.63 4.77c.38.23.86.23 1.24 0l7.63-4.77V17.5H3.75V7.25Zm16.5-1.5L12 11.25 3.75 5.75h16.5Z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
