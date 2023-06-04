import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../../../utils";

export const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: pxToRem(8),
	},

	iconBorder: {
		borderRadius: pxToRem(200),
		width: pxToRem(60),
		height: pxToRem(60),
		padding: pxToRem(4),
		webkitTransition: "border 500ms ease-out",
		transition: "border 500ms ease-out",
		oTransition: "border 500ms ease-out",
		mozTransition: "border 500ms ease-out",
	},

	icon: {
		width: "100%",
		height: "100%",
		padding: pxToRem(4),
		WebkitTransition: "color 250ms ease-out, background 500ms ease-out",
		transition: "color 250ms ease-out, background 500ms ease-out",
		OTransition: "color 250ms ease-out, background 500ms ease-out",
		MozTransition: "color 250ms ease-out, background 500ms ease-out",
		"&:hover": {
			color: "#000",
		},
	},
});
