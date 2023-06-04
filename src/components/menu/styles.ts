import { makeStyles } from "@material-ui/core";

import { colors } from "../../styles";
import { pxToRem } from "../../utils";

export const useStyles = makeStyles({
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
	},

	purpleBackground: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
		background: `linear-gradient(to bottom right, rgba(150,51,237,0.25), rgba(88,88,88,0.05))`,
	},

	greenBackground: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
		background: `linear-gradient(rgba(14,133,1,0.25), rgba(88,88,88,0.05))`,
	},

	yellowBackground: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
		background: "linear-gradient(to bottom left, rgba(249,194,0,0.2), rgba(88,88,88,0.05))",
	},

	arrow: {
		height: pxToRem(132),
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},

	iconAnimation: {
		animation: "$fadeIn 2s infinite ease",
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},

	icon: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},

	transition: {
		transition: "fill 1s ease-out",
		OTransition: "fill 1s ease-out",
		MozTransition: "fill 1s ease-out",
		WebkitTransition: "fill 1s ease-out",
	},
});
