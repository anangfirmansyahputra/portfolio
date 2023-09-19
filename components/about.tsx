'use client';

import { accordionItem } from '@/constant';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

// bg-slate-50 dark:bg-transparent
const About = () => {
	const onDownload = () => {
		const pdfUrl = '/assets/cv.pdf';
		// Buat elemen anchor untuk menginisiasi unduhan
		const a = document.createElement('a');
		a.href = pdfUrl;
		a.download = 'cv.pdf'; // Ganti dengan nama file yang sesuai
		a.click();
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='h-full 
			dark:text-white'>
			{/* <Container> */}
			<div className=''>
				<h1 className='text-3xl mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-5 md:mb-10 text-start leading-[1.1] md:text-6xl font-bold'>About</h1>
				<Separator />
				<div className='w-full flex flex-col-reverse sm:gap-5 mt-6'>
					<div className='flex-1 pb-10'>
						<Accordion type='single' collapsible>
							{accordionItem.map((item) => (
								<AccordionItem key={item.value} value={item.value}>
									<AccordionTrigger>{item.title}</AccordionTrigger>
									<AccordionContent className='text-muted-foreground'>{item.desc}</AccordionContent>
								</AccordionItem>
							))}
							{/* <AccordionItem
								value={"item-4"}
							>
								<AccordionTrigger>My Certificate</AccordionTrigger>
									<AccordionContent className='text-muted-foreground'>
										<ul>
											<li></li>
										</ul>
								</AccordionContent>
							</AccordionItem> */}
						</Accordion>
					</div>
					<div className='flex-1'>
						<div className='relative mx-auto aspect-square rounded-full overflow-hidden sm:w-1/2 max-w-[300px] md:w-1/3 lg:w-1/4'>
							<Image src='/assets/anang.JPG' fill alt='' priority className='object-cover object-top' />
						</div>
						<div className='my-6 flex items-center justify-center gap-5'>
							<Button variant='premium' onClick={onDownload}>
								Download CV <Download className='w-4 h-4 ml-2' />
							</Button>
						</div>
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
