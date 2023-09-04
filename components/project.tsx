'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import { myProjects } from '@/constant';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const Project = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='pb-10 h-full'
		>
			<h1 className='text-3xl mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-5 md:mb-10 text-start leading-[1.1] md:text-6xl font-bold'>My Projects</h1>
			<Separator />
			<div className='mt-10 w-full gap-5 grid grid-cols-1 md:grid-cols-3 pb-10'>
				{myProjects.map((item) => (
					<Card
						key={item.name}
						className='border-secondary hover:ring-1 ring-primary transition'
					>
						<CardHeader>
							<CardTitle>{item.name}</CardTitle>
							<CardDescription>This is a clone from Thread app who created by Meta. So you can can do </CardDescription>
						</CardHeader>
						<CardFooter>
							<Button className='w-full'>Demo</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</motion.section>
	);
};

export default Project;
