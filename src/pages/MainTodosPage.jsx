/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainComponent } from 'components/MainComponent';
import { FilterBtn } from 'components/Filter';
import MainDashboard from 'components/ScreenPage/MainDashboard/MainDashboard';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { AddCardModal } from 'components/Modal';
import { SayNameBoard } from 'components/Helpers';

function MainTodosPage() {
	const [isOpen, setIsOpen] = useState(false);
	const { board } = useParams();

	const nameBoard = SayNameBoard(board);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				style={{ position: 'absolute', right: '50px', top: '150px' }}
			>
				Add card
			</button>
			<AddCardModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />

			<FilterBtn />

			{nameBoard && <HeaderDashboard title={nameBoard} />}
			<MainComponent>{board && <MainDashboard />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
