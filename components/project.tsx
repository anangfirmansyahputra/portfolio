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
					<div
						key={item.name}
						// className='hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-lg p-[1px] transition'
					>
						<Card className='h-full flex flex-col justify-between'>
							<CardHeader>
								<CardTitle>{item.name}</CardTitle>
								<CardDescription>{item.description}</CardDescription>
							</CardHeader>
							<CardFooter>
								<Button
									className='w-full'
									variant='premium'
								>
									Demo
								</Button>
							</CardFooter>
						</Card>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Project;
