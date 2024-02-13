/** @format */

import React, { useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';

import {
	ModalTitle,
	StyledForm,
	StyledFormField,
	BtnAdd,
	HeaderContainer,
	CloseIcon,
	IconWrapper,
	AddIcon,
	StyledErrorMessage,
} from './AddColumnModal.styled';
import { useDispatch } from 'react-redux';
import { addColumn, updateColumn } from 'redux/columns/operations';
import { columnSchema } from 'components/Helpers';

export const AddColumnModal = ({ isOpen, setIsOpen, board, columnId, columnForEditing }) => {
	const dispatch = useDispatch();
	const isEdit = !!columnForEditing;

	const handleFormSubmit = values => {
		if (columnForEditing) {
			dispatch(updateColumn({ ...values, id: columnId }));
		} else {
			dispatch(addColumn({ ...values, columnId }));
		}
	};

	const handleCloseModal = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	useEffect(() => {
		handleCloseModal();
	}, [handleCloseModal]);

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={handleCloseModal} style={customStyles}>
			<Formik
				initialValues={{
					name: '',
					boarderId: `${board}`,
				}}
				validationSchema={columnSchema}
				onSubmit={(newColumn, actions) => handleFormSubmit(newColumn)}
			>
				{({ isSubmitting }) => (
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<ModalTitle>Add column</ModalTitle>
							<CloseIcon name='close' onClick={handleCloseModal} />
						</HeaderContainer>

						<StyledFormField type='text' name='name' placeholder='Title' />
						<StyledErrorMessage name='name' component='div' />
						<BtnAdd type='submit' disabled={isSubmitting}>
							<IconWrapper>
								<AddIcon name='plus' />
							</IconWrapper>
							{isEdit ? 'Edit' : 'Add'}
						</BtnAdd>
					</StyledForm>
				)}
			</Formik>
		</ModalWindow>
	);
};
