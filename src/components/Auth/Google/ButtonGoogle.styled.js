/** @format */

import Icon from 'components/Icon';
import styled from 'styled-components';

export const ButtonGoogle = styled.button`
	display: flex;
	width: 100%;
	outline: none;
	padding: 0px;
	border: none;
	justify-content: start;
	align-items: center;
	border-radius: 8px;
	background: ${props => props.theme.sidebar.addButtonBackground};
	overflow: hidden;
	gap: 70px;
	cursor: pointer;
	transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		background: ${props => props.theme.sidebar.addButtonHover};
	}
`;

export const IconContainer = styled.div`
	background-color: white;
	width: 49px;
	outline: none;
	height: 49px;
	border: none;
	display: flex;
	position: relative;
`;

export const GoogleIcon = styled(Icon)`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ButtonText = styled.a`
	color: #161616;
	text-align: center;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px;
	text-decoration: none;
`;
