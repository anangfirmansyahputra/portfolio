'use client';

import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
	const openInNewTab = (url: string) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};
	
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='flex flex-col items-center justify-center space-y-6 h-full '
		>
			<h1 className='max-w-[70rem] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold '>Anang Firmansyah</h1>
			<TypeAnimation
			className='max-w-[70rem] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient'
				sequence={[
					// Same substring at the start will only be typed out once, initially
					"I'm Web Developer.",
					2000, // wait 1s before replacing "Mice" with "Hamsters"
					'Fullstack Javascript',
					2000,
				]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
			/>
			<p className='max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8'>{`I'm a creative professional specializing in Web Developer. I transform ideas into digital realities. Explore my portfolio.`}</p>
			<div className='sm:space-x-4 space-y-4 sm:space-y-0 space-x-0 flex flex-col sm:flex-row w-full sm:w-fit sm:flex-none'>
				<Button
					onClick={() => openInNewTab("http://Wa.me//6287760125317")}
					className='px-[32px]'
					variant='premium'
				>
					Hire Me
				</Button>
				<Button
					onClick={() => openInNewTab("https://github.com/anangfirmansyahputra")}
					className='px-[32px]'
					variant={'secondary'}
				>
					Github
				</Button>
			</div>
		</motion.section>
	);
};

export default Hero;
