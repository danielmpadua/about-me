import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "fit-content",
		gap: pxToRem(16),

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(14),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(8),
		},
	},

	title: {
		gap: pxToRem(8),
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(6),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(4),
		},
	},

	titleTransition: {
		transition: "color 1s ease-out",
		OTransition: "color 1s ease-out",
		MozTransition: "color 1s ease-out",
		WebkitTransition: "color 1s ease-out",
	},

	line: {
		borderStyle: "solid",
		width: pxToRem(445),
		borderRadius: pxToRem(8),
		borderWidth: pxToRem(2),

		[theme.breakpoints.down("lg")]: {
			width: pxToRem(333),
			borderRadius: pxToRem(6),
			borderWidth: pxToRem(1),
		},

		[theme.breakpoints.down("md")]: {
			width: pxToRem(250),
			borderRadius: pxToRem(4),
			borderWidth: pxToRem(1),
		},
	},

	lineTransition: {
		transition: "border 1s ease-out",
		OTransition: "border 1s ease-out",
		MozTransition: "border 1s ease-out",
		WebkitTransition: "border 1s ease-out",
	},

	text: {
		fontFamily: "Merriweather Sans Variable",
		fontStyle: "normal",
		fontWeight: 800,
		fontSize: pxToRem(64),
		color: "#fff",

		[theme.breakpoints.down("lg")]: {
			fontSize: pxToRem(48),
		},

		[theme.breakpoints.down("md")]: {
			fontSize: pxToRem(36),
		},
	},
}));
