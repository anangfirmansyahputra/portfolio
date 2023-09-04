'use client';

import { AnimatePresence } from 'framer-motion';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <AnimatePresence>{children}</AnimatePresence>;
};

export default Layout;
