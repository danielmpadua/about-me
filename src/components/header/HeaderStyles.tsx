import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../utils";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		gap: pxToRem(16),
		overflow: "hidden",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		padding: pxToRem(32),
	},

	headerContainer: {
		display: "flex",
		justifyContent: "center",
		gap: pxToRem(30),
	},

	contentContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: pxToRem(24),
	},
});
