/** @format */

import {
  AuthNavContainer,
  Button,
  IconLogo,
  IconLogoBox,
  Link,
  LinkLogIn,
  LogoBox,
  LogoTitle,
  Text,
} from './AuthNavigation.Styled';
import Avatar from 'components/Avatar/Avatar';

export const AuthNavigation = () => {
  return (
    <>
      <AuthNavContainer>
        <Avatar />
        <LogoBox>
          <IconLogoBox>
          <IconLogo name="iconapp" />
          </IconLogoBox>
          <LogoTitle>Task Pro</LogoTitle>
        </LogoBox>
        <Text>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Text>

        <Button type="button">
          <Link to="/register" end>
            Registation
          </Link>
        </Button>

        <LinkLogIn to="/login" end>
          Log In
        </LinkLogIn>
      </AuthNavContainer>
    </>
  );
};