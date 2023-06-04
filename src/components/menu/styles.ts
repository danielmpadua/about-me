import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../utils";

export const useStyles = makeStyles({
	root: {
		paddingTop: pxToRem(16),
		paddingBottom: pxToRem(16),
		display: "flex",
		maxHeight: 300,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},

	purpleBackground: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
		background: `linear-gradient(to bottom right, rgba(150,51,237,0.25), rgba(88,88,88,0.10))`,
	},

	greenBackground: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
		background: `linear-gradient(rgba(14,133,1,0.25), rgba(88,88,88,0.10))`,
	},

	yellowBackground: {
		zIndex: 5,
		width: "100%",
		height: "100%",
		position: "absolute",
		background: "linear-gradient(to bottom left, rgba(249,194,0,0.25), rgba(88,88,88,0.10))",
	},
});
