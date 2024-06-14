import React from 'react';
import styles from './container.module.scss';

export default function MarginContainer({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col items-center justify-center py-0 px-56'>
			<div className='w-full max-w-max'>{children}</div>
		</div>
	);
}
