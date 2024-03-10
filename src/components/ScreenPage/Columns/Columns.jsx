/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { Column } from 'components/Column';
import { Styled } from './Columns.styled';
import { useBoards, useCards, useColumns } from 'hooks';
import { removeCard } from 'redux/cards/cardsSlice';
import { removeCardInBase } from 'redux/cards/operations';
import { toastError, toastSuccess } from 'components/Helpers';

export const Columns = ({ board, children }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const { allCards } = useCards();
	const { statusLoading } = useBoards();

	useEffect(() => {
		if (!statusLoading) dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board, statusLoading]);

	const onDragEnd = async e => {
		const {
			draggableId: id,
			source: { droppableId: oldColumnId, index },
			destination,
		} = e;

		const columnId = destination ? destination.droppableId : null;
		const indexCard = destination?.index;

		if (!columnId) {
			return;
		}

		if (oldColumnId === columnId && destination.index === index) {
			return;
		}

		try {
			const { name } = allCards[oldColumnId].filter(card => card._id === id)[0];
			dispatch(removeCard({ oldColumnId, columnId, id, indexCard }));
			dispatch(removeCardInBase({ id, columnId, name, indexCard, oldColumnId }));
			toastSuccess('The card has been moved');
		} catch (_) {
			toastError('Error moving card');
		}
	};

	return (
		<Styled>
			<DragDropContext onDragEnd={onDragEnd}>
				{allColumns.length > 0 &&
					allColumns.map(item => (
						<Droppable key={item._id} droppableId={`${item._id}`}>
							{provided => (
								<Column
									columnData={item}
									providedPlaceholder={provided.placeholder}
									refColumn={provided.innerRef}
									{...provided.droppableProps}
								/>
							)}
						</Droppable>
					))}
				{children}
			</DragDropContext>
		</Styled>
	);
};
