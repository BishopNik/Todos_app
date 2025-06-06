/** @format */

import React, { useContext, useEffect, useMemo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
	Wrapper,
	Title,
	IconsContainer,
	EditColumn,
	DelColumn,
	List,
	ListTasks,
	ListTasksContainer,
} from './Column.styled';
import { useDispatch } from 'react-redux';
import { fetchCardsByColumnId } from 'redux/cards/operations';
import { updateStateAfterDeleteColumn } from 'redux/cards/cardsSlice';
import {
	Button,
	ButtonText,
	IconWrapper,
	AddIcon,
} from 'components/Modal/CreateNewBoardModal/CreateNewBoardModal.styled';
import styled from 'styled-components';
import { AddCardModal } from 'components/Modal';
import { Card } from 'components/Card/Card';
import { delColumn } from 'redux/columns/operations';
import { MainContext } from 'components/Helpers';
import { useCards, useCardEditing, useColumns } from 'hooks';

const AddCardButton = styled(Button)`
	width: 334px;
	max-width: 95vw;
`;

export const Column = ({ columnData, refColumn, providedPlaceholder }) => {
	const { name, _id } = columnData;
	const { isOpen, setIsOpen, cardForEditing, editCard, onRequestClose, deleteCard } =
		useCardEditing();
	const { allCards } = useCards();
	const { statusColumn } = useColumns();
	const dispatch = useDispatch();
	const { filter, setIsOpenAddColumn, setColumnEdit } = useContext(MainContext);

	useEffect(() => {
		dispatch(fetchCardsByColumnId(_id));
	}, [dispatch, _id]);

	const handleDeleteColumn = columnId => {
		if (statusColumn) return;
		dispatch(delColumn(columnId))
			.then(() => {
				dispatch(updateStateAfterDeleteColumn({ id: columnId }));
			})
			.catch(error => {
				console.error('Failed to delete column:', error);
			});
	};

	const handleEditColumn = () => {
		if (statusColumn) return;
		setIsOpenAddColumn(true);
		setColumnEdit(columnData);
	};

	const memoizedCards = useMemo(() => {
		if (_id) {
			const cardForColumn = (allCards[_id] || []).filter(card => {
				return filter === 'all' || card.priority === filter;
			});
			return cardForColumn.map((card, ind) => ({ ...card, indexCard: ind }));
		}
		return [];
	}, [_id, allCards, filter]);

	return (
		<Wrapper>
			<List>
				<Title>
					{name}
					<IconsContainer>
						<EditColumn
							type='button'
							width='16'
							height='16'
							name='edit'
							onClick={handleEditColumn}
						/>
						<DelColumn
							type='button'
							width='16'
							height='16'
							onClick={() => handleDeleteColumn(_id)}
							name='delete'
						/>
					</IconsContainer>
				</Title>
			</List>
			<ListTasksContainer ref={refColumn}>
				<ListTasks>
					{memoizedCards?.map((item, index) => (
						<Draggable key={item._id} draggableId={item._id} index={index}>
							{(provided, snapshot) => (
								<Card
									refCard={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									drag={snapshot.isDragging.toString()}
									item={item}
									deleteCard={() => deleteCard({ id: item?._id, _id })}
									editCard={() => editCard(item)}
								/>
							)}
						</Draggable>
					))}
					{providedPlaceholder}
				</ListTasks>
			</ListTasksContainer>
			<AddCardButton aria-label='Add new card' type='button' onClick={() => setIsOpen(true)}>
				<IconWrapper>
					<AddIcon name='add-board' />
				</IconWrapper>
				<ButtonText>{!memoizedCards?.length ? 'Add card' : 'Add another card'}</ButtonText>
			</AddCardButton>
			<AddCardModal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				columnId={_id}
				cardForEditing={cardForEditing}
			/>
		</Wrapper>
	);
};
