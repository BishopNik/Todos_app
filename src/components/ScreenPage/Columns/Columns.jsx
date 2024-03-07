/** @format */

import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { Column } from 'components/Column';
import { Styled } from './Columns.styled';
import { useBoards, useColumns, useCards } from 'hooks';
import { updateCard } from 'redux/cards/operations';

export const Columns = ({ board, children }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const { statusLoading } = useBoards();
	const { allCards } = useCards();

	useEffect(() => {
		if (!statusLoading) dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board, statusLoading]);

	const memoizedColumns = useMemo(() => allColumns, [allColumns]);

	const onDragEnd = e => {
		const {
			draggableId: id,
			source: { droppableId: oldColumnId },
			destination,
		} = e;
		const columnId = destination ? destination.droppableId : null;

		if (!columnId) {
			return;
		}

		if (columnId === oldColumnId) {
		} else {
			const dragCard = allCards[oldColumnId].filter(c => c._id === id);
			dispatch(updateCard({ id, columnId, name: dragCard[0].name, oldColumnId }));
		}
	};

	return (
		<Styled>
			<DragDropContext onDragEnd={onDragEnd}>
				{memoizedColumns.length > 0 &&
					memoizedColumns.map(item => (
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
