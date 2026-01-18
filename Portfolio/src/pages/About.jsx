import { useState, useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
import profileImage from '../assets/images/profile.png';

function About() {
	const [displayText, setDisplayText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const fullText = 'Full Stack Developer';
	const typingSpeed = 150;
	const deletingSpeed = 50;
	const pauseTime = 4000;

	useEffect(() => {
		let timeout;

		if (!isDeleting && displayText === fullText) {
			timeout = setTimeout(() => setIsDeleting(true), pauseTime);
		} else if (isDeleting && displayText === '') {
			setIsDeleting(false);
		} else if (isDeleting) {
			timeout = setTimeout(() => {
				setDisplayText(fullText.substring(0, displayText.length - 1));
			}, deletingSpeed);
		} else {
			timeout = setTimeout(() => {
				setDisplayText(fullText.substring(0, displayText.length + 1));
			}, typingSpeed);
		}

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting]);

	return (
		<section id="about" className="scroll-mt-0 min-h-screen flex items-center justify-center px-4 py-8 sm:px-10 lg:px-12">
			<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent" aria-hidden />
			<div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center w-full max-w-6xl">
					<div className="order-2 lg:order-1 space-y-4 sm:space-y-6 text-center lg:text-left">
					<h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-indigo-200 to-cyan-100 animate-slideIn animate-glow">
						Hi, I am Vikas
					</h1>
					<div className="space-y-3 leading-relaxed text-slate-300">
						<p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cyan-300 break-words whitespace-normal min-h-[1.5em]">
							I am a {displayText}
							<span className="animate-pulse">|</span>
						</p>
						<p className="text-base sm:text-lg">Experienced across frontend and backend, I design maintainable systems, care about performance, and keep accessibility in mind.</p>
						</div>
						<div className="flex flex-wrap items-center gap-3 sm:gap-4">
							<a
								href="https://drive.google.com/drive/folders/1LpuTCFxE9I5w0PNlwnrciKQVH3N3jSLQ?usp=drive_link"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-cyan-400/60 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-cyan-200 transition hover:bg-cyan-400/10 hover:-translate-y-0.5 active:translate-y-0"
							>
								View Resume
							</a>
						</div>
						<div className="pt-2">
							<SocialLinks variant="compact" />
						</div>
					</div>

					<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
						<div className="relative w-60 sm:w-72 lg:w-80 aspect-square overflow-hidden rounded-full border-2 border-cyan-400/40 bg-white shadow-2xl shadow-cyan-500/20">
							<img
								src={profileImage}
								alt="Vikas - Product Engineer"
								className="h-full w-full object-contain"
							/>
						</div>
					</div>
				</div>
		</section>
	);
}

export default About;
