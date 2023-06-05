import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	root: {
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

	scroll: {
		zIndex: 15,
		width: "3px",
		borderRadius: "4px",
		opacity: 0.5,
		transition: "backgroundColor 1s ease-out, background 1s ease-out, color 1s ease-out",
		OTransition: "backgroundColor 1s ease-out, background 1s ease-out, color 1s ease-out",
		MozTransition: "backgroundColor 1s ease-out, background 1s ease-out, color 1s ease-out",
		WebkitTransition: "backgroundColor 1s ease-out, background 1s ease-out, color 1s ease-out",
	},
});
