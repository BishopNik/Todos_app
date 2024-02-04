/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ModalFilter from '../Filter/ModalFilter/ModalFilter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
	TextEmptyBoard,
	ButtonCreateBoard,
} from './MainComponent.styled';

function MainComponent({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const { id } = useParams(null);
	console.log('🚀 ~ MainComponent ~ id:', id);
	return (
		<>
			<ButtonFilter type='button' onClick={openModal}>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			<ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			{children ? (
				children
			) : (
				<TextEmptyBoard>
					Before starting your project, it is essential{' '}
					<ButtonCreateBoard type='button'>to create a board</ButtonCreateBoard> to
					visualize and track all the necessary tasks and milestones. This board serves as
					a powerful tool to organize the workflow and ensure effective collaboration
					among team members.
				</TextEmptyBoard>
			)}
		</>
	);
}

export default MainComponent;
