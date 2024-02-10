/** @format */

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 335px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	color: ${props => props.theme.colum.textMain};
	font-size: 18px;
	border-radius: 8px;
	width: 334px;
	padding: 14px 24px;
	background-color: ${props => props.theme.profile.background};;
	color: ${props => props.theme.help.modalTextMain};
	font-size: 14px;
	font-weight: 500;
	display: flex;
	height: 58px;
	align-items: center;
	justify-content: space-between;
`;

export const List = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	gap: 8px;
	height: calc(100vh - 250px);
	overflow-y: auto;
`;

export const IconsContainer = styled.div`
	display: flex;
	gap: 8px;
	margin-left: auto;
`;

export const EditColumn = styled.svg`
	stroke: ${({ theme }) => theme.sidebar.projectIcon};
	cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.sidebar.textAccent};
`;

export const DelColumn = styled.svg`
	stroke:${({ theme }) => theme.sidebar.projectIcon};
	cursor: pointer;

	 &:hover,
     &:focus {
    stroke: ${({ theme }) => theme.sidebar.textAccent};
`;
