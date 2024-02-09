// import { ModalEditProfile } from '../../components/Modal/EditForm/ModalEditProfile';
import { useState } from 'react';
import data from '../../img/list_img.json';
import { UserInfoWrapper, UserName, UserAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';


export const UserInfo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [isModalState, setIsModalState] = useState(false);
  console.log(selectUser)
  // const activeUserTheme = useSelector(selectUserTheme);

  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };

  //  const setDefaultAvatar = () => {
  //   if (activeUserTheme === 'dark') {
  //     return data.user.dark;
  //   } else if (activeUserTheme === 'light') {
  //     return data.user.light;
  //   } else if (activeUserTheme === 'violet') {
  //     return data.user.violet;
  //   }
  // };

  return (
    <div>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserAvatar
          src={data.user.dark || avatarURL} 
          alt="user name"
          onClick={stateСhangeModal}
				/>
      </UserInfoWrapper>
      {/* <ModalEditProfile
        stateСhangeModal={stateСhangeModal}
        isModalState={isModalState}
      /> */}
    </div>
  );
};

export default UserInfo;

