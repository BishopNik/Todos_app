/** @format */

import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';

export const BoardsList = () => {
  const { board } = useParams();
  const listRef = useRef(null);

  const handleScroll = event => {
    const delta = event.deltaY;
    listRef.current.scrollTop += delta;
  };

  return (
    <>
      <ListContainer onWheel={handleScroll} ref={listRef}>
        {/* -----Here map---- */}
        <BoardItem idBoard={board} />
        <BoardItem idBoard={'00000'} />
        <BoardItem idBoard={'33255'} />
      </ListContainer>
    </>
  );
};
