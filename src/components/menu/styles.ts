import { makeStyles } from "@material-ui/core";

import { colors } from "../../styles";
import { pxToRem } from "../../utils";

export const useStyles = makeStyles((theme) => ({
	"@keyframes fadeIn": {
		"0%": {
			opacity: 1,
		},
		"50%": {
			opacity: 0.3,
		},
		"100%": {
			opacity: 1,
		},
	},

	root: {
		paddingTop: pxToRem(16),
		paddingBottom: pxToRem(16),
		display: "flex",
		maxHeight: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		background: colors().background,

		[theme.breakpoints.down("lg")]: {
			paddingTop: pxToRem(14),
			paddingBottom: pxToRem(14),
		},

		[theme.breakpoints.down("md")]: {
			paddingTop: pxToRem(12),
			paddingBottom: pxToRem(12),
		},
	},

	background: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
	},

	purpleBackground: {
		background: `linear-gradient(to bottom right, rgba(150,51,237,0.25), rgba(0,0,0,0))`,
	},

	greenBackground: {
		background: `linear-gradient(rgba(14,133,1,0.25), rgba(0,0,0,0))`,
	},

	yellowBackground: {
		background: "linear-gradient(to bottom left, rgba(249,194,0,0.2), rgba(0,0,0,0))",
	},

	arrow: {
		height: pxToRem(132),
		width: "100%",
		display: "flex",
		justifyContent: "center",
		background: `linear-gradient(rgba(0,0,0,1) 50%, rgba(0,0,0,0))`,
	},

	arrowSticky: {
		transform: "rotate(180deg)",
		background: `linear-gradient(1turn, rgba(0,0,0,1) 50%, rgba(0,0,0,0))`,
	},

	iconAnimation: {
		animation: "$fadeIn 2s infinite ease",
	},

	icon: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		marginTop: pxToRem(26),

		[theme.breakpoints.down("md")]: {
			marginTop: pxToRem(22),
		},
	},

	iconSticky: {
		marginTop: pxToRem(80),

		[theme.breakpoints.down("md")]: {
			marginTop: pxToRem(86),
		},
	},

	transition: {
		transition: "fill 1s ease-out",
		OTransition: "fill 1s ease-out",
		MozTransition: "fill 1s ease-out",
		WebkitTransition: "fill 1s ease-out",
	},
}));
