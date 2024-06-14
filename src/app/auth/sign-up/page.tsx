import React from 'react';
import { Metadata } from 'next';

import { GradientContainer } from '@/components/context';
import { MarginContainer } from '@/components/ui/custom';
import { SignUpSection } from '@/sections';

// TODO: improve SEO here
export const metadata: Metadata = {
	title: 'Sign Up Page',
	description: 'Sign Up Page'
};

export default function SignUpPage(): React.ReactElement {
	return (
		<GradientContainer>
			<MarginContainer>
				<SignUpSection />
			</MarginContainer>
		</GradientContainer>
	);
}
