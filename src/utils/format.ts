export const pxToRem = (pxvalue: number) => {
	const newValue = `${(pxvalue / 16).toLocaleString("en-US", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})}rem`;

	return newValue;
};
