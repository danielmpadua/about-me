import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: pxToRem(16),
		width: "fit-content",
	},

	title: {
		gap: pxToRem(8),
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},

	titleTransition: {
		transition: "color 1s ease-out",
		OTransition: "color 1s ease-out",
		MozTransition: "color 1s ease-out",
		WebkitTransition: "color 1s ease-out",
	},

	line: {
		width: pxToRem(445),
		borderRadius: pxToRem(8),
	},

	lineTransition: {
		width: pxToRem(445),
		borderRadius: pxToRem(8),
		transition: "border 1s ease-out",
		OTransition: "border 1s ease-out",
		MozTransition: "border 1s ease-out",
		WebkitTransition: "border 1s ease-out",
	},
});
