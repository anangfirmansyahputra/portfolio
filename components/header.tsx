'use client';

import { navItems } from '@/constant';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import Container from './ui/container';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useEffect, useState } from 'react';

const Header = () => {
	const { setTheme } = useTheme();

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<Container>
				<nav className='flex items-center py-6 h-20 justify-between container'>
					<div className='flex items-center gap-6 md:gap-10'>
						<div className='flex items-center sm:items-start overflow-hidden'>
							<h1 className='font-bold text-3xl sm:inline-block hidden cursor-pointer'>
								A <span className='text-indigo-500'>F</span>
							</h1>
							<Button
								className='sm:hidden'
								size='icon'
								variant='ghost'
							>
								<Sheet>
									<SheetTrigger asChild>
										<Menu className='w-4 h-4' />
									</SheetTrigger>
									<SheetContent side='left'>
										<SheetHeader>
											{/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
											<SheetDescription>
												<ul className='flex flex-col items-start space-y-5'>
													{navItems.map((item) => (
														<li key={item.id}>
															<SheetClose asChild>
																<Link
																	href={item.url}
																	className='text-muted-foreground transition-colors font-medium hover:bg-gradient-to-r 
																	hover:from-indigo-500 
																	hover:via-purple-500 
																	hover:to-pink-500 
																	hover:text-transparent bg-clip-text animate-gradient'
																>
																	{item.label}
																</Link>
															</SheetClose>
														</li>
													))}
												</ul>
											</SheetDescription>
										</SheetHeader>
									</SheetContent>
								</Sheet>
							</Button>
						</div>
					</div>
					<div className='space-x-6 md:space-x-10 flex'>
						<ul className='sm:flex items-center gap-6 md:gap-10 hidden'>
							{navItems.map((item) => (
								<li key={item.id}>
									<Link
										href={item.url}
										className='
										font-medium
										text-muted-foreground transition-colors  hover:bg-gradient-to-br hover:from-indigo-500 hover:via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text animate-gradient
										
										'
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='outline'
									size='icon'
								>
									<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
									<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
									<span className='sr-only'>Toggle theme</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</nav>
			</Container>
			{/* <Separator /> */}
		</>
	);
};

export default Header;
