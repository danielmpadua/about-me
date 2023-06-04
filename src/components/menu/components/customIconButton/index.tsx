import { Box, IconButton, Typography } from "@mui/material";

import { colors } from "../../../../styles";
import { pxToRem } from "../../../../utils";
import { useStyles } from "./styles";

type TButton = {
	text: string;
	type: string;
	icon: JSX.Element;
	isSticky: boolean;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const CustomIconButton = ({ isSelected, onClick, text, type, icon, isSticky }: TButton) => {
	const classes = useStyles();

	return (
		<Box
			className={classes.container}
			onClick={() => {
				if (!isSelected(type)) onClick(type);
			}}
		>
			<Box
				className={classes.iconBorder}
				sx={{
					width: pxToRem(isSticky ? 50 : 60),
					height: pxToRem(isSticky ? 50 : 60),
					padding: pxToRem(isSticky ? 2 : 4),
					border: isSelected(type) ? `2px solid ${colors(type).primary}` : `2px solid transparent`,
				}}
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

			<Typography sx={{ display: isSticky ? "none" : "inherit" }} variant="merriweather-menu-xl" color="#fff">
				{text}
			</Typography>
		</Box>
	);
};
