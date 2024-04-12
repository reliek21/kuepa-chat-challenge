import React from 'react';
import { CustomAvatar } from '@/components/ui/custom';
import { IName } from './interfaces/Name';

export default function Name({
	name,
	email,
	role = 'student'
}: IName): React.ReactElement {
	return (
		<div className='flex items-center'>
			<div className='flex flex-col items-end justify-center mr-5'>
				<h3 className='text-white font-medium'>{name}</h3>
				<p className='text-orange-500 text-sm'>
					{role ? 'Estudiante' : 'Moderador'}
				</p>
			</div>

			<CustomAvatar email={email} />
		</div>
	);
}
