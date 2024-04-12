import React from 'react';
import { IFlexContainer } from './interface/FlexContainer.interface';

export default function FlexContainer({ children }: IFlexContainer) {
	return (
		<div className='flex items-center justify-center gap-2 my-4'>
			{children}
		</div>
	);
}
