import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: pxToRem(8),

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(6),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(4),
		},
	},

	iconBorderGeneral: {
		padding: pxToRem(4),
		borderRadius: pxToRem(200),
		WebkitTransition: "border 500ms ease-out, width 200ms ease-out, height 200ms ease-out",
		transition: "border 500ms ease-out, width 200ms ease-out, height 200ms ease-out",
		OTransition: "border 500ms ease-out, width 200ms ease-out, height 200ms ease-out",
		MozTransition: "border 500ms ease-out, width 200ms ease-out, height 200ms ease-out",
	},

	iconBorder: {
		width: pxToRem(60),
		height: pxToRem(60),

		[theme.breakpoints.down("lg")]: {
			width: pxToRem(55),
			height: pxToRem(55),
		},

		[theme.breakpoints.down("md")]: {
			width: pxToRem(50),
			height: pxToRem(50),
		},
	},

	iconBorderSticky: {
		width: pxToRem(50),
		height: pxToRem(50),

		[theme.breakpoints.down("lg")]: {
			width: pxToRem(45),
			height: pxToRem(45),
		},

		[theme.breakpoints.down("md")]: {
			width: pxToRem(40),
			height: pxToRem(40),
		},
	},

	icon: {
		width: "100%",
		height: "100%",
		padding: pxToRem(4),
		WebkitTransition: "color 250ms ease-out, background 500ms ease-out",
		transition: "color 250ms ease-out, background 500ms ease-out",
		OTransition: "color 250ms ease-out, background 500ms ease-out",
		MozTransition: "color 250ms ease-out, background 500ms ease-out",
		"&:hover": {
			color: "#000",
		},

		[theme.breakpoints.down("lg")]: {
			padding: pxToRem(3),
		},

		[theme.breakpoints.down("md")]: {
			padding: pxToRem(2),
		},
	},

	text: {
		fontFamily: "Merriweather Sans Variable",
		fontStyle: "normal",
		fontWeight: 800,
		color: "#fff",
		fontSize: pxToRem(20),

		[theme.breakpoints.down("lg")]: {
			fontSize: pxToRem(18),
		},

		[theme.breakpoints.down("md")]: {
			fontSize: pxToRem(16),
		},
	},
}));
