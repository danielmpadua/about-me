import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles({
	imageContainer: {
		height: pxToRem(620),
		width: pxToRem(400.38),
		position: "relative",
	},

	image: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
	},
});
