import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: pxToRem(16),
		width: pxToRem(700),

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(14),
			width: pxToRem(580),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(8),
			width: pxToRem(450),
		},
	},

	text: {
		color: "#808ca4",
		fontFamily: "Merriweather Sans Variable",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: pxToRem(24),

		[theme.breakpoints.down("lg")]: {
			fontSize: pxToRem(20),
		},

		[theme.breakpoints.down("md")]: {
			fontSize: pxToRem(16),
		},
	},
}));
