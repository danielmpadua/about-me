import { makeStyles } from "@material-ui/core";

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
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},

	iconAnimation: {
		position: "absolute",
		bottom: pxToRem(16),
		animation: "$fadeIn 2s infinite ease",
	},

	icon: {
		position: "absolute",
		bottom: pxToRem(16),
	},
});
