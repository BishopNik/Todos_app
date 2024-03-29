/** @format */

import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';
import Icon from 'components/Icon';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalTitle = styled.p`
  color: ${props => props.theme.help.modalTextMain};
  font-size: 18px;
  margin-bottom: 24px;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    width: 100%;
  }
  width: 350px;
  outline: none;
  border-radius: 8px solid rgba(17, 17, 17, 0.1);
  background: ${props => props.theme.modal.backgroundMain};
  padding: 24px;
`;

export const CloseIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: ${props => props.theme.modal.iconClose};
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: ${props => props.theme.sidebar.hoverLogout};
  }
  &:focus {
    stroke: ${props => props.theme.sidebar.hoverLogout};
  }
`;

export const StyledFormField = styled(Field)`
  color: ${props => props.theme.profile.textMain};
  padding: 14px 18px;
  background: inherit;
  outline: none;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.profile.inputBorder};
  margin-bottom: 24px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 5px;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.sidebar.addButtonColor};
  margin-right: 8px;
`;
export const BtnAdd = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme.help.buttonBackground};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${props => props.theme.sidebar.hoverLogout};
  }
`;
export const AddIcon = styled(Icon)`
  width: 14px;
  height: 14px;
  fill: transparent;
  stroke: ${props => props.theme.modal.plusColor};
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 50%;
  left: 40%;
  opacity: 0.8;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  color: black;
  font-size: 10px;
  font-weight: normal;
  letter-spacing: 0.04em;
  line-height: 1.45;
`;

export const FieldContainer = styled.div`
  position: relative;
`;
