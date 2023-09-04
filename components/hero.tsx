'use client';

import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='flex flex-col items-center justify-center space-y-6 h-full '
		>
			<h1 className='max-w-[70rem] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold '>Anang Firmansyah</h1>
			<h1 className='max-w-[70rem] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient animate-type'>{`I'm Web Developer.`}</h1>
			<p className='max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8'>{`I'm a creative professional specializing in Web Developer. I transform ideas into digital realities. Explore my portfolio.`}</p>
			<div className='sm:space-x-4 space-y-4 sm:space-y-0 space-x-0 flex flex-col sm:flex-row w-full sm:w-fit sm:flex-none'>
				<Button className='px-[32px]'>Hire Me</Button>
				<Button
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
