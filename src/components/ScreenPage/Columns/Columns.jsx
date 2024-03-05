/** @format */

import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { Column } from 'components/Column';
import { Styled } from './Columns.styled';
import { useBoards, useColumns } from 'hooks';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const Columns = ({ board, children }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const { statusLoading } = useBoards();

	useEffect(() => {
		if (!statusLoading) dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board, statusLoading]);

	const memoizedColumns = useMemo(() => allColumns, [allColumns]);

	// const onDragEnd = e => console.log(e);

	return (
		// <DragDropContext onDragEnd={onDragEnd}>
		// 	<Droppable droppableId='droppable'>
		// 		{(provided, snapshot) => (
		<Styled>
			{memoizedColumns.length > 0 &&
				memoizedColumns.map(item => (
					<Column
						columnData={item}
						key={item._id}
						// innerRef={provided.innerRef}
					/>
				))}
			{children}
		</Styled>
		// 		)}
		// 	</Droppable>
		// </DragDropContext>
	);
};
