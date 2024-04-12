import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/shadcn';
import { formatEmail } from '@/helpers';

import { ICustomAvatar } from './interfaces/CustomAvatar';

export default function CustomAvatar({
	email
}: ICustomAvatar): React.ReactElement {
	return (
		<Avatar>
			<AvatarFallback className='font-bold bg-transparent border-2 border-orange-500 text-white'>
				{formatEmail(email)}
			</AvatarFallback>
		</Avatar>
	);
}
