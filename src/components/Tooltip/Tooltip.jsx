/** @format */

import React, { useEffect, useState } from 'react';
import ModalWindow, { customStyles } from '../Modal';
import { TooltipButton, TooltipContent, IconProcess } from './Tooltip.styled';
import { useColumns } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateCard } from 'redux/cards/operations';

const Tooltip = ({ isOpen, onRequestClose, card, position }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const [style, setStyle] = useState(customStyles);
	const { _id: id, columnId: oldColumnId, name } = card;

	const handleClick = columnId => {
		dispatch(updateCard({ id, columnId, name, oldColumnId }));
		onRequestClose();
	};

	useEffect(() => {
		setStyle(prevStyle => {
			return {
				...prevStyle,
				content: {
					...prevStyle.content,
					top: `${position?.top + 20}px`,
					left: `${position?.left + 10}px`,
					transform: 'translate(0, 0)',
				},
			};
		});
	}, [position]);

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
			<TooltipContent>
				{allColumns?.map(col => (
					<React.Fragment key={col._id}>
						{oldColumnId !== col._id && (
							<TooltipButton onClick={() => handleClick(col._id)}>
								{col.name}
								<IconProcess name='process-task' />
							</TooltipButton>
						)}
					</React.Fragment>
				))}
			</TooltipContent>
		</ModalWindow>
	);
};

export default Tooltip;
