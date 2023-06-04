import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../utils";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		overflow: "hidden",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		paddingBottom: pxToRem(32),
		paddingTop: `calc(50vh - ${pxToRem(450)})`,

		[theme.breakpoints.down("lg")]: {
			paddingTop: `calc(50vh - ${pxToRem(350)})`,
		},

		[theme.breakpoints.down("md")]: {
			paddingTop: `calc(50vh - ${pxToRem(300)})`,
		},
	},

	headerContainer: {
		display: "flex",
		justifyContent: "center",
		gap: pxToRem(30),

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(26),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(22),
		},
	},

	contentContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: pxToRem(24),

		[theme.breakpoints.down("lg")]: {
			gap: pxToRem(20),
		},

		[theme.breakpoints.down("md")]: {
			gap: pxToRem(16),
		},
	},
}));
