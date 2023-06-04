import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles((theme) => ({
	imageContainer: {
		height: pxToRem(620),
		width: pxToRem(400.38),
		position: "relative",

		[theme.breakpoints.down("lg")]: {
			height: pxToRem(420),
			width: pxToRem(271.23),
		},

		[theme.breakpoints.down("md")]: {
			height: pxToRem(309.7),
			width: pxToRem(200),
		},
	},

	image: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
	},
}));
