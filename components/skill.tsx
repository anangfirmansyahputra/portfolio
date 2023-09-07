'use client';
import { itemSkills } from '@/constant';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import Image from 'next/image';

const Skill = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='pb-10 h-full'
		>
			<h1 className='text-3xl mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-5 md:mb-10 text-start leading-[1.1] md:text-6xl font-bold'>My Skills</h1>
			<Separator />
			<p className='my-10 max-w-[85%] w-full mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-center'>{`I'm a skilled web developer fluent in JavaScript and Typescript, specializing in Next.js and React.js frameworks. I excel at utilizing Prisma ORM and Node.js to build efficient, dynamic web applications.`}</p>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4 pb-10'>
				{itemSkills.map((item) => (
					<Card key={item.title}>
						<CardHeader>
							<CardTitle>{item.icon}</CardTitle>
							<CardDescription>{item.title}</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{item.desc}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</motion.section>
	);
};

export default Skill;
