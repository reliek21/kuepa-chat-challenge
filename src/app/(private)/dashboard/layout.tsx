import React from 'react';
import { Metadata } from 'next';

import { ContainerWrapper, SessionWrapper } from '@/components/context';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Dashboard'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ContainerWrapper>
			<SessionWrapper>{children}</SessionWrapper>
		</ContainerWrapper>
	);
}
