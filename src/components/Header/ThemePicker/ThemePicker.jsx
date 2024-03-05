/** @format */

import React, { useState, useRef, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'components/Helpers';
import { IconThemeMenu, PopupBlock, PopupItem, Text, Wrapper } from './ThemePicker.styled';
import { theme } from 'constants/theme';
import { changeTheme } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Loader from 'components/Loader';

const ThemePicker = () => {
	const { setThemeCurrent } = useContext(ThemeContext);
	const dispatch = useDispatch();
	const [isShownPopup, setIsShownPopup] = useState(false);
	const themeRef = useRef();
	const { isLoading } = useAuth();

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);

		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const handleOutsideClick = event => {
		const path = event.composedPath();

		if (!path.includes(themeRef.current)) {
			setIsShownPopup(false);
		}
	};

	const handleTheme = (property, name) => {
		setThemeCurrent(property);
		dispatch(changeTheme(name));
		setIsShownPopup(false);
	};

	const handlePopup = () => setIsShownPopup(!isShownPopup);

	return (
		<Wrapper ref={themeRef} onClick={handlePopup}>
			<Text>Theme</Text>
			<IconThemeMenu name='chevron-down' />
			{isShownPopup && (
				<PopupBlock>
					{theme.map(({ name, property }) => (
						<PopupItem onClick={() => handleTheme(property, name)} key={name}>
							{name}
						</PopupItem>
					))}
				</PopupBlock>
			)}
			{isLoading && <Loader />}
		</Wrapper>
	);
};

export default ThemePicker;
