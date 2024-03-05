/** @format */

import React, { useRef } from 'react';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';
import { useBoards } from 'hooks';

export const BoardsList = () => {
	const { allBoards } = useBoards();
	const listRef = useRef(null);

	const handleScroll = ({ deltaY }) => {
		listRef.current.scrollTop += deltaY;
	};

	return (
		<>
			<ListContainer onWheel={handleScroll} ref={listRef}>
				{allBoards.length >= 1 &&
					allBoards.map(({ _id: id, name, icon }) => (
						<BoardItem key={id} boardId={id} nameBoard={name} icon={icon} />
					))}
			</ListContainer>
		</>
	);
};
