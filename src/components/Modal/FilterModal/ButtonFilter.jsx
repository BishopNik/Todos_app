/** @format */

import { ModalFilter } from 'components/Modal/FilterModal/FilterModal';
import { useState } from 'react';

export const ButtonFilter = () => {
	const [isModalState, setIsModalState] = useState(false);

	const stateСhangeModal = () => {
		if (isModalState === true) {
			setIsModalState(false);
		} else {
			setIsModalState(true);
		}
	};

	return (
		<div>
			<button onClick={stateСhangeModal}></button>
			<ModalFilter stateСhangeModal={stateСhangeModal} isModalState={isModalState} />
		</div>
	);
};
