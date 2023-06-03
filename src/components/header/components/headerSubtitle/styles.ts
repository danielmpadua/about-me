import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: pxToRem(16),
		width: pxToRem(893),
	},

	text: {
		gap: pxToRem(8),
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});
