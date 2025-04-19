/** @format */

import React, { useContext } from 'react';
import { MainContext } from 'components/Helpers';
import {
	CloseButton,
	IconClose,
	LinkShowAll,
	ModalContainer,
	RadioButton,
	RadioButtonGroup,
	Title,
	TitleBox,
	TitleRadioButtons,
	Input,
	Label,
} from './Filter.styled';

const radioOptions = [
	{ value: 'without', label: 'Without priority', color: 'rgba(255, 255, 255, 0.3)' },
	{ value: 'low', label: 'Low', color: 'rgba(143, 161, 208, 1)' },
	{ value: 'medium', label: 'Medium', color: 'rgba(224, 156, 181, 1)' },
	{ value: 'high', label: 'High', color: 'rgba(190, 219, 176, 1)' },
];

export const Filter = ({ setIsOpen }) => {
	const { filter, setFilter } = useContext(MainContext);

	const handleOptionChange = ({ target: { value } }) => setFilter(value);

	return (
		<ModalContainer>
			<TitleBox>
				<Title>Filters</Title>
			</TitleBox>
			<CloseButton type='button' onClick={() => setIsOpen(false)}>
				<IconClose name='close' />
			</CloseButton>
			<div>
				<LinkShowAll onClick={() => setFilter('all')}>Show all</LinkShowAll>
			</div>
			<TitleRadioButtons>Label color</TitleRadioButtons>
			<RadioButtonGroup>
				{radioOptions.map(({ value, label, color }) => (
					<RadioButton key={value}>
						<Input
							type='radio'
							value={value}
							checked={filter === value}
							onChange={handleOptionChange}
							id={value}
						/>
						<Label htmlFor={value} color={color}>
							{label}
						</Label>
					</RadioButton>
				))}
			</RadioButtonGroup>
		</ModalContainer>
	);
};
