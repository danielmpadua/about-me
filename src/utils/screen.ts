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

export const fontResize = (pxValue: number, width: "xs" | "sm" | "md" | "lg" | "xl") => {
	if (width === "xs") return pxToRem(pxValue / 2);
	if (width === "sm") return pxToRem(pxValue / 1.4);
	if (width === "md") return pxToRem(pxValue / 1.2);
	if (width === "lg") return pxToRem(pxValue);
	return pxToRem(pxValue * 1.4);
};

export const gradientPosition = (selectedOption?: string) => {
	if (selectedOption === "CODE") return "";
	if (selectedOption === "MUSIC") return "to bottom left,";
	return "to bottom right,";
};

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
