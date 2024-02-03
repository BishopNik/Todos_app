/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'h'
		'm';

	@media screen and (min-width: 375px) {
		width: 375px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1440px) {
		display: grid;
		grid-template-columns: 260px auto;
		grid-template-areas:
			's h'
			's m';
		width: 1440px;
	}
`;

export const SideBar = styled.aside`
	grid-area: s;
	width: 260px;
	height: 100vh;
	min-height: 770px;
	outline: 1px solid blue;

	@media screen and (max-width: 1439px) {
		display: none;
	}
`;

export const Header = styled.header`
	grid-area: h;
	min-width: 320px;
	height: 60px;
	outline: 1px solid red;

	@media screen and (min-width: 768px) {
		height: 68px;
	}
`;

export const Main = styled.main`
	position: relative;
	grid-area: m;
	background-color: #1f1f1f;
	min-width: 320px;
	height: calc(100vh - 60px);

	@media screen and (min-width: 375px) {
		min-height: 702px;
	}

	@media screen and (min-width: 768px) {
		min-height: 702px;
		max-height: calc(100vh - 68px);
	}

	@media screen and (min-width: 1440px) {
		min-height: 702px;
	}
`;