import { createTheme } from "@mui/material/styles";

import "@fontsource-variable/oswald";
import "@fontsource-variable/merriweather-sans";

import { pxToRem } from "../utils";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		"oswald-caption-medium": React.CSSProperties;
		"oswald-caption-bold": React.CSSProperties;
		"oswald-body-bold": React.CSSProperties;
		"oswald-body-regular": React.CSSProperties;
		"oswald-heading2": React.CSSProperties;
		"oswald-heading3": React.CSSProperties;
		"oswald-heading4": React.CSSProperties;
		"oswald-heading5": React.CSSProperties;
		"oswald-heading6": React.CSSProperties;
		"oswald-footnote-regular": React.CSSProperties;
		"oswald-footnote-bold": React.CSSProperties;

		"merriweather-title-xl": React.CSSProperties;
		"merriweather-subtitle-xl": React.CSSProperties;
		"merriweather-menu-xl": React.CSSProperties;
		"merriweather-body-regular": React.CSSProperties;
		"merriweather-heading2": React.CSSProperties;
		"merriweather-heading3": React.CSSProperties;
		"merriweather-heading4": React.CSSProperties;
		"merriweather-heading5": React.CSSProperties;
		"merriweather-heading6": React.CSSProperties;
		"merriweather-footnote-regular": React.CSSProperties;
		"merriweather-footnote-bold": React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		"oswald-caption-medium"?: React.CSSProperties;
		"oswald-caption-bold"?: React.CSSProperties;
		"oswald-body-bold"?: React.CSSProperties;
		"oswald-body-regular"?: React.CSSProperties;
		"oswald-heading2"?: React.CSSProperties;
		"oswald-heading3": React.CSSProperties;
		"oswald-heading4": React.CSSProperties;
		"oswald-heading5": React.CSSProperties;
		"oswald-heading6"?: React.CSSProperties;
		"oswald-footnote-regular"?: React.CSSProperties;
		"oswald-footnote-bold"?: React.CSSProperties;

		"merriweather-title-xl"?: React.CSSProperties;
		"merriweather-subtitle-xl"?: React.CSSProperties;
		"merriweather-menu-xl"?: React.CSSProperties;
		"merriweather-body-regular"?: React.CSSProperties;
		"merriweather-heading2"?: React.CSSProperties;
		"merriweather-heading3": React.CSSProperties;
		"merriweather-heading4": React.CSSProperties;
		"merriweather-heading5": React.CSSProperties;
		"merriweather-heading6"?: React.CSSProperties;
		"merriweather-footnote-regular"?: React.CSSProperties;
		"merriweather-footnote-bold"?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		"oswald-caption-medium": true;
		"oswald-caption-bold": true;
		"oswald-body-bold": true;
		"oswald-body-regular": true;
		"oswald-heading2": true;
		"oswald-heading3": true;
		"oswald-heading4": true;
		"oswald-heading5": true;
		"oswald-heading6": true;
		"oswald-footnote-regular": true;
		"oswald-footnote-bold": true;

		"merriweather-title-xl": true;
		"merriweather-subtitle-xl": true;
		"merriweather-menu-xl": true;
		"merriweather-body-regular": true;
		"merriweather-heading2": true;
		"merriweather-heading3": true;
		"merriweather-heading4": true;
		"merriweather-heading5": true;
		"merriweather-heading6": true;
		"merriweather-footnote-regular": true;
		"merriweather-footnote-bold": true;
	}
}

export const CustomTheme = () => {
	return createTheme({
		typography: {
			fontFamily: ["Oswald Variable", "Merriweather Sans Variable", "sans-serif"].join(","),

			// ----------------- Oswald -----------------

			"oswald-caption-medium": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 500,
				fontSize: pxToRem(14),
				lineHeight: pxToRem(17),
			},
			"oswald-caption-bold": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 600,
				fontSize: pxToRem(14),
				lineHeight: pxToRem(17),
			},
			"oswald-body-bold": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 600,
				fontSize: pxToRem(16),
				lineHeight: pxToRem(19.36),
			},
			"oswald-body-regular": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 500,
				fontSize: pxToRem(16),
				lineHeight: pxToRem(19.36),
			},
			"oswald-heading2": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(32),
				lineHeight: pxToRem(39),
			},
			"oswald-heading3": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(28),
				lineHeight: pxToRem(34),
			},
			"oswald-heading4": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(24),
				lineHeight: pxToRem(29),
			},
			"oswald-heading5": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(21),
				lineHeight: pxToRem(25),
			},
			"oswald-heading6": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(19),
				lineHeight: pxToRem(23),
			},
			"oswald-footnote-regular": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 500,
				fontSize: pxToRem(12),
				lineHeight: pxToRem(15),
			},
			"oswald-footnote-bold": {
				fontFamily: "Oswald Variable",
				fontStyle: "normal",
				fontWeight: 600,
				fontSize: pxToRem(12),
				lineHeight: pxToRem(15),
			},

			// ----------------- Merriweather -----------------

			"merriweather-title-xl": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 800,
				fontSize: pxToRem(64),
			},
			"merriweather-subtitle-xl": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 400,
				fontSize: pxToRem(32),
			},
			"merriweather-menu-xl": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 800,
				fontSize: pxToRem(20),
			},
			"merriweather-body-regular": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 500,
				fontSize: pxToRem(16),
				lineHeight: pxToRem(19.36),
			},
			"merriweather-heading2": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(32),
				lineHeight: pxToRem(39),
			},
			"merriweather-heading3": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(28),
				lineHeight: pxToRem(34),
			},
			"merriweather-heading4": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(24),
				lineHeight: pxToRem(29),
			},
			"merriweather-heading5": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(21),
				lineHeight: pxToRem(25),
			},
			"merriweather-heading6": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 700,
				fontSize: pxToRem(19),
				lineHeight: pxToRem(23),
			},
			"merriweather-footnote-regular": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 500,
				fontSize: pxToRem(12),
				lineHeight: pxToRem(15),
			},
			"merriweather-footnote-bold": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 600,
				fontSize: pxToRem(12),
				lineHeight: pxToRem(15),
			},
		},
	});
};
