import React from 'react';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';

import { IContainerWrapper } from './interfaces/ContainerWrapper';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/globals.css';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

export default function ContainerWrapper({
	children
}: IContainerWrapper): React.ReactElement {
	return (
		<html lang='es'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}>
				{children}
			</body>
		</html>
	);
}
