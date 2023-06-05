import clsx from "clsx";

import { Box, IconButton, Slide } from "@mui/material";

import { colors } from "../../../../styles";
import { useStyles } from "./styles";

type TButton = {
	text: string;
	type: string;
	icon: JSX.Element;
	isSticky: boolean;
	slideTimeout: number;
	slideDirection: "left" | "right" | "up" | "down" | undefined;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const CustomIconButton = ({ isSelected, onClick, text, type, icon, isSticky, slideTimeout, slideDirection }: TButton) => {
	const classes = useStyles();

	return (
		<Slide direction={slideDirection} in timeout={slideTimeout}>
			<Box
				className={classes.container}
				onClick={() => {
					if (!isSelected(type)) onClick(type);
				}}
			>
				<Box
					className={clsx(isSticky ? classes.iconBorderSticky : classes.iconBorder, classes.iconBorderGeneral)}
					sx={{ border: isSelected(type) ? `2px solid ${colors(type).primary}` : `2px solid transparent` }}
				>
					<IconButton
						size="large"
						className={classes.icon}
						sx={{
							background: isSelected(type) ? colors(type).primary : "#000",
							color: isSelected(type) ? "#000" : colors(type).primary,
							"&:hover": {
								background: colors(type).primary,
								backgroundImage: colors(type).primary,
							},
						}}
					>
						{icon}
					</IconButton>
				</Box>

				<Box className={classes.text} sx={{ display: isSticky ? "none" : "inherit" }}>
					{text}
				</Box>
			</Box>
		</Slide>
	);
};
