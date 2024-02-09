import styled from 'styled-components';
import Icon from 'components/Icon/Icon.jsx';
import {Field} from 'formik';

export const ModalContainer = styled.div`
  position: relative;
  background: ${props => props.theme.modal.backgroundMain};
  color: ${props => props.theme.help.modalTextMain};
  padding: 24px;
  border-radius: 8px;
  min-width: 320px;
  @media (max-width: 767px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
  margin: 0 auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: ${props => props.theme.modal.backgroundSecondary};
  border: none;
  cursor: pointer;
`;

export const IconClose = styled(Icon)`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: ${props => props.theme.modal.iconClose};
`;

export const FormTitle = styled.h2`  
  color: ${props => props.theme.modal.textMain};
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  margin: 0px;
`;

export const SubTitles = styled.h3`  
  color: ${props => props.theme.modal.textSecondary};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  color: ${props => props.theme.profile.textMain};
  padding: 14px 18px;
  margin: 24px 0 14px 0;
  border: 1px solid ${props => props.theme.profile.inputBorder};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  background: ${props => props.theme.modal.backgroundSecondary};
  opacity: 0.4;

   &:hover {
    opacity: 1;

  color: ${props => props.theme.modal.textMain};

  &:focus {
    border-color:${props => props.theme.modal.textAccent};
  }

  ::placeholder {
    color: ${props => props.theme.modal.textSecondary}; 
  }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  color: ${props => props.theme.profile.textMain};
  height: 154px;
  padding: 14px 18px;
  margin-bottom: 24px;
  border: 1px solid  ${props => props.theme.profile.inputBorder};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  background: ${props => props.theme.modal.backgroundSecondary};
  opacity: 0.4;

   &:hover {
    opacity: 1;

  color: ${props => props.theme.modal.textMain};

  &:focus {
    border-color:${props => props.theme.modal.textAccent};
  }

  ::placeholder {
    color: ${props => props.theme.modal.textSecondary}; 
  }

  }
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioButton = styled.input`
  margin-bottom: 14px;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.profile.inputBorder};;  
  cursor: pointer;
  background-color: ${props => {
    switch (props.value) {
      case 'color1':
        return '#8FA1D0';
      case 'color2':
        return '#E09CB5';
      case 'color3':
        return '#BEDBB0';
      case 'color4':
        return 'rgba(255, 255, 255, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.3)';
    }
  }};

  &:focus {
    border: 3px solid #151515;
  }

  &:checked {    
    border: 3px solid #fff;
  }
`;

export const AddButton = styled.button`
  background-color: ${props => props.theme.help.buttonBackground};
  color: ${props => props.theme.addcolum.buttonBackground};
  padding: 10px 0 11px 0;
  border: none;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  &::before {
    content: '+';
    display: block;
    width: 28px;
    height: 28px;
    background-color: ${props => props.theme.sidebar.addButtonColor};
    border-radius: 8px;
    color: ${props => props.theme.modal.plusColor};
    font-size: 20px;
    text-align: center;
    line-height: 28px;
    margin-right: 10px;    
  }

  &:hover {
    background-color: ${props => props.theme.sidebar.hoverLogout};
  }

  &:focus {
    background-color: ${props => props.theme.sidebar.hoverLogout};    
    outline: none;    
  }
`;