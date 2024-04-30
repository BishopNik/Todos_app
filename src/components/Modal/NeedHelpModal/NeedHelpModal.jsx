/** @format */

import { useContext, useState } from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
import { toastError, toastSuccess } from 'components/Helpers';
import { needHelpSchema } from '../../Helpers/ModalSchemas';
import {
	StyledForm,
	HeaderContainer,
	CloseIcon,
	StyledTextArea,
	LabelBox,
	StyledField,
	Button,
	ButtonText,
	Title,
	ErrorMsg,
} from './NeedHelpModal.styled';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import { MainContext } from 'components/Helpers';
import Loader from 'components/Loader';

export const NeedHelpModal = () => {
	const { isOpenHelp, setIsOpenHelp } = useContext(MainContext);
	const [isSending, setIsSending] = useState(false);

	const handlerOnSubmit = async values => {
		setIsSending(true);
		try {
			const { email, comment } = values;
			const response = await axios.post('/help', { email, text: comment });
			toastSuccess(response.data.message);
			setIsOpenHelp(false);
		} catch ({ response }) {
			toastError(response?.data?.message);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<>
			<ModalWindow
				isOpen={isOpenHelp}
				onRequestClose={() => setIsOpenHelp(false)}
				style={customStyles}
			>
				<Formik
					initialValues={{ email: '', comment: '' }}
					onSubmit={handlerOnSubmit}
					validationSchema={needHelpSchema}
				>
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<Title>Need help</Title>
							<CloseIcon name='close' onClick={() => setIsOpenHelp(false)} />
						</HeaderContainer>
						<LabelBox>
							<label>
								<StyledField
									name='email'
									type='email'
									placeholder='Email address'
									autoFocus
								/>
								<ErrorMsg name='email' component='span' />
							</label>
							<label>
								<Field
									name='comment'
									type='text'
									placeholder='Comment'
									as={StyledTextArea}
								/>
								<ErrorMsg name='comment' component='span' />
							</label>
						</LabelBox>

						<Button type='submit'>
							<ButtonText>Send</ButtonText>
						</Button>
					</StyledForm>
				</Formik>
			</ModalWindow>
			{isSending && <Loader />}
		</>
	);
};
