import React from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { CONFIG_ENVIRONMENTS } from '@/config';
import { cn } from '@/lib/utils';

import 'bootstrap-icons/font/bootstrap-icons.css';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

export const metadata: Metadata = {
	title: 'Next.js Boilerplate',
	description: 'Generated by Next.js Boilerplate'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Analytics />
			<SpeedInsights />
			<GoogleAnalytics gaId={CONFIG_ENVIRONMENTS.GOOGLE_ANALYTICS} />
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
