import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles({
	container: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(32),
	},

	icon: {
		width: pxToRem(59),
		height: pxToRem(59),
	},
});
