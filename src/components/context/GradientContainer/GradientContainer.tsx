import React from 'react';
import { IGradientContainer } from './interfaces/GradientContainer';

export default function GradientContainer({
	children
}: IGradientContainer): React.ReactElement {
	return (
		<main className='min-h-screen flex items-center justify-center flex-col bg-gradient-to-br from-orange-100'>
			{children}
		</main>
	);
}
