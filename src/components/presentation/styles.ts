import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../utils";

export const useStyles = makeStyles({
	root: {
		paddingTop: pxToRem(16),
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},

	sticky: {
		zIndex: 10,
		position: "sticky",
		top: 0,
		width: "100%",
	},
});
