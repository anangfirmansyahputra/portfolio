'use client';

import { accordionItem, itemSkills } from '@/constant';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Container from './ui/container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

// bg-slate-50 dark:bg-transparent
const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='h-full 
			dark:text-white'
		>
			{/* <Container> */}
			<div className=''>
				<h1 className='text-3xl mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-5 md:mb-10 text-start leading-[1.1] md:text-6xl font-bold'>About</h1>
				<Separator />
				<div className='w-full flex sm:flex-row flex-col sm:gap-5 mt-6'>
					<div className='flex-1'>
						<Accordion
							type='single'
							collapsible
						>
							{accordionItem.map((item) => (
								<AccordionItem
									key={item.value}
									value={item.value}
								>
									<AccordionTrigger>{item.title}</AccordionTrigger>
									<AccordionContent className='text-muted-foreground'>{item.desc}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='flex-1'>
						<Button variant='premium'>
							Download CV <Download className='w-4 h-4 ml-2' />
						</Button>
					</div>
				</div>
				{/* <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-center'>{`I'm a skilled web developer fluent in JavaScript, specializing in Next.js and React.js frameworks. I excel at utilizing Prisma ORM and Node.js to build efficient, dynamic web applications.`}</p>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4'>
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
				</div> */}
			</div>
			{/* </Container> */}
		</motion.section>
	);
};

export default About;
