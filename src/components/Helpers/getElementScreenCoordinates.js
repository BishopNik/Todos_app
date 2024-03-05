/** @format */

export const getElementScreenCoordinates = elementRef => {
	if (elementRef.current) {
		const rect = elementRef.current.getBoundingClientRect();
		const { top, left } = rect;

		return { top, left };
	}
};
