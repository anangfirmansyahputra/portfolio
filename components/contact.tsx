'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';

const Contact = () => {
	return (
		<motion.section className='pb-10 h-full'>
			<h1 className='text-3xl mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-5 md:mb-10 text-start leading-[1.1] md:text-6xl font-bold'>Contact</h1>
			<Separator />
			<div className='flex mt-10 pb-10'>
				<Card className='flex-1'>
					<CardHeader>
						<CardTitle>Let’s discuss your project</CardTitle>
						<CardDescription>Please contact me if you want to discuss or want to talk another thing</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='flex'>
							<div className='flex-1 flex flex-col gap-5 items-start'>
								<Input placeholder='Name' />
								<Input placeholder='Your email' />
								<Input placeholder='Subject' />
								<Textarea placeholder='Message' />
								<Button variant='premium'>Submit</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</motion.section>
	);
};

export default Contact;
