import { Breakpoint, Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { pxToRem } from "./format";

type BreakpointOrNull = Breakpoint | null;

export function useWidth() {
	const theme: Theme = useTheme();
	const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
	return (
		keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useMediaQuery(theme.breakpoints.up(key));
			return !output && matches ? key : output;
		}, null) || "xs"
	);
}

export const IsMobile = () => {
	const width = useWidth();
	return width === "xs";
};

export const IsNotMobile = () => {
	return !IsMobile();
};

export const IsDesktop = () => {
	const width = useWidth();
	return Boolean(width === "xl" || width === "lg" || width === "md");
};

export const IsNotDesktop = () => {
	return !IsDesktop();
};
