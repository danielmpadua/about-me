import { makeStyles } from "@material-ui/core";

import { pxToRem } from "../../utils";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		width: "100%",
		overflow: "hidden",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		paddingBottom: "5vh",
		paddingTop: `calc(50vh - ${pxToRem(436)})`,

		[theme.breakpoints.down("lg")]: {
			paddingTop: `calc(50vh - ${pxToRem(336)})`,
			paddingBottom: "10vh",
		},

		[theme.breakpoints.down("md")]: {
			paddingTop: `calc(50vh - ${pxToRem(286)})`,
			paddingBottom: "16vh",
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
