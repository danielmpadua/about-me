import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(32),

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(22),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(16),
		},
	},
}));
