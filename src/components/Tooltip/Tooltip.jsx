/** @format */

import React, { useEffect, useState } from 'react';
import ModalWindow, { customStyles } from '../Modal';
import { TooltipButton, TooltipContent, IconProcess } from './Tooltip.styled';
import { useCards, useColumns } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateCard } from 'redux/cards/operations';
import { toastSuccess, toastError } from 'components/Helpers';

const Tooltip = ({ isOpen, onRequestClose, card, position }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const { allCards } = useCards();
	const [style, setStyle] = useState(customStyles);
	const { _id: id, columnId: oldColumnId, name } = card;

	const handleClick = columnId => {
		try {
			const indexCard = allCards[columnId].length;
			dispatch(updateCard({ id, columnId, name, indexCard, oldColumnId }));
			onRequestClose();
			toastSuccess('Card has removed');
		} catch (error) {
			toastError(error);
		}
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
