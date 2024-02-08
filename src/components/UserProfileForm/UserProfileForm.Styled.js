/** @format */

import Icon from 'components/Icon/Icon.jsx';
import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

// export const Container = styled.div`
//   background: linear-gradient(
//     180deg,
//     rgba(196, 196, 196, 0) 25%,
//     #bedbb0 92.19%
//   );
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0 20px 0 20px;
//   height: 100vh;
//   min-width: 320px;
//   margin-left: auto;
//   margin-right: auto;
//   width: 100%;
//   @media (min-width: 375px) and (max-width: 767px) {
//     width: 375px;
//   }
//   @media (max-width: 1439px) {
//     max-width: 768px;
//   }
//   @media (min-width: 1440px) {
//     width: 1440px;
//   }
// `;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	margin-top: 14px;
	/* padding: 24px; */

	@media (max-width: 375px) {
		width: 100%;
	}
	@media (min-width: 376px) and (max-width: 767px) {
		/* width: 335px; */
		/* padding: 24px; */
	}
	@media (min-width: 768px) {
		/* width: 424px; */
		/* padding: 40px; */
	}
	border-radius: 8px;
	background: #151515;
`;

export const LabelBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	/* margin-top: 14px; */
	@media (min-width: 768px) {
		/* gap: 14px; */
	}
`;

export const StyledField = styled(Field)`
	color: #fff;
	border-radius: 8px;
	border: 1px solid #bedbb0;
	padding: 14px 18px 14px 18px;
	opacity: 0.4;
	background: #1f1f1f;
	width: 100%;

	box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;

export const IconHideShow = styled(Icon)`
	width: 18px;
	height: 18px;
`;

export const Button = styled.button`
	display: flex;
	width: 100%;
	margin-top: 24px;
	padding: 14px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: #bedbb0;

	color: #161616;

	text-align: center;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px;
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
	color: red;
`;

/*
export const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  height: 100vh;
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 375px) and (max-width: 767px) {
    width: 375px;
  }
  @media (max-width: 1439px) {
    max-width: 768px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;



export const NavBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Link = styled(NavLink)`
color: ${({ end }) => (end ? '#FFFFFF' : '#FFFFFF4D')};
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-decoration: none;
`;



export const ErrMessageStyled = styled(ErrorMessage)`
  color: red;
`;



export const IconHideShow = styled(Icon)`
  width: 18px;
  height: 18px;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #bedbb0;
`;

export const ButtonText = styled.span`
  color: #161616;

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
*/