/** @format */

import React from 'react';
import { ButtonGoogle, GoogleIcon, IconContainer, ButtonText } from './ButtonGoogle.styled';

const host = process.env.REACT_APP_BASE_BACKEND_URL;

function Button_Google() {
	return (
		<ButtonGoogle type='submit'>
			<IconContainer>
				<GoogleIcon name='Google__G__logo' />
			</IconContainer>
			<ButtonText href={`${host}/api/auth/google`}>Log In with Google</ButtonText>
		</ButtonGoogle>
	);
}

export default Button_Google;
