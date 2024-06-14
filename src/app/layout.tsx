import React from 'react';
import type { Metadata } from 'next';
import { ContainerWrapper } from '@/components/context';

export const metadata: Metadata = {
	title: 'Kuepa Chat Challenge',
	description: 'Kuepa Chat Challenge'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ContainerWrapper>{children}</ContainerWrapper>;
}
