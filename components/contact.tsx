'use client';

import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import emailjs from '@emailjs/browser';
import { toast } from './ui/use-toast';

const formSchema = z.object({
	user_name: z.string().min(2).max(50),
	user_subject: z.string().min(2).max(50),
	user_email: z.string().email().min(2),
	message: z.string(),
});

const Contact = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: '',
			user_email: '',
			user_name: '',
			user_subject: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const res = await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', values, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

			toast({
				title: 'Success',
				description: 'Your email has been sent',
			});

			form.reset();
		} catch (err) {
			toast({
				title: 'Error',
				description: 'Internal server error',
			});
		}
	};

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
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-5'
							>
								<FormField
									control={form.control}
									name='user_name'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder='Name'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='user_email'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder='Email'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='user_subject'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder='Subject'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='message'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Textarea
													placeholder='Message'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									variant={'premium'}
									type='submit'
								>
									Submit
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</motion.section>
	);
};

export default Contact;
