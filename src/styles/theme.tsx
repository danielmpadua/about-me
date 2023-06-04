import { createTheme } from "@mui/material/styles";

import "@fontsource-variable/merriweather-sans";

import { pxToRem } from "../utils";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		"merriweather-title-xl": React.CSSProperties;
		"merriweather-subtitle-xl": React.CSSProperties;
		"merriweather-menu-xl": React.CSSProperties;

		"merriweather-title-lg": React.CSSProperties;
		"merriweather-subtitle-lg": React.CSSProperties;
		"merriweather-menu-lg": React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		"merriweather-title-xl"?: React.CSSProperties;
		"merriweather-subtitle-xl"?: React.CSSProperties;
		"merriweather-menu-xl"?: React.CSSProperties;

		"merriweather-title-lg"?: React.CSSProperties;
		"merriweather-subtitle-lg"?: React.CSSProperties;
		"merriweather-menu-lg"?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		"merriweather-title-xl": true;
		"merriweather-subtitle-xl": true;
		"merriweather-menu-xl": true;

		"merriweather-title-lg": true;
		"merriweather-subtitle-lg": true;
		"merriweather-menu-lg": true;
	}
}

export const CustomTheme = () => {
	return createTheme({
		typography: {
			fontFamily: ["Merriweather Sans Variable", "sans-serif"].join(","),

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
				fontSize: pxToRem(24),
			},
			"merriweather-menu-xl": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 800,
				fontSize: pxToRem(20),
			},

			"merriweather-title-lg": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 800,
				fontSize: pxToRem(48),
			},
			"merriweather-subtitle-lg": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 400,
				fontSize: pxToRem(20),
			},
			"merriweather-menu-lg": {
				fontFamily: "Merriweather Sans Variable",
				fontStyle: "normal",
				fontWeight: 800,
				fontSize: pxToRem(16),
			},
		},
	});
};
