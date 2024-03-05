/** @format */

import React from 'react';
import { UserProfileForm } from 'components/UserProfileForm';
import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';
import ModalWindow, { customStyles } from 'components/Modal';
import { closeIconStyles } from './EditProfileModal.styled';

export const EditProfileModal = ({ isModalState, stateСhangeModal }) => {
	return (
		<ModalWindow
			isOpen={isModalState}
			onRequestClose={stateСhangeModal}
			style={customStyles}
			contentLabel='onRequestClose'
		>
			<FiltersIcon name='close' onClick={stateСhangeModal} style={closeIconStyles} />

			<UserProfileForm stateСhangeModal={stateСhangeModal} isModalState={isModalState} />
		</ModalWindow>
	);
};
