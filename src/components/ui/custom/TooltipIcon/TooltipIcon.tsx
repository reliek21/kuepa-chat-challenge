import React from 'react';
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui/shadcn';
import { ITooltipIcon } from './interfaces/TooltipIcon';

export default function TooltipIcon({
	icon,
	text
}: ITooltipIcon): React.ReactElement {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant='default'
					size='icon'
					className=''
					aria-label='Playground'>
					<i className={`bi bi-${icon} text-white`}></i>
				</Button>
			</TooltipTrigger>
			<TooltipContent side='right' sideOffset={5}>
				{text}
			</TooltipContent>
		</Tooltip>
	);
}
