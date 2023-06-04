import clsx from "clsx";

import { Box, Fade, Slide } from "@mui/material";

import { colors } from "../../../../styles";
import { useStyles } from "./styles";

type THeaderTitle = {
	selectedOption: string;
	showAnimation: boolean;
	removeAnimation: () => void;
};

export const HeaderTitle = ({ selectedOption, showAnimation, removeAnimation }: THeaderTitle) => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box className={classes.title}>
				<Slide in direction="down" timeout={2005} onEntered={removeAnimation}>
					<Box className={classes.text}>Prazer, sou</Box>
				</Slide>

				{showAnimation && (
					<Slide in direction="left" timeout={2000}>
						<Box className={classes.text} sx={{ color: colors(selectedOption).primary }}>
							Daniel Pádua
						</Box>
					</Slide>
				)}

				{!showAnimation && (
					<Box className={clsx(classes.titleTransition, classes.text)} sx={{ color: colors(selectedOption).primary }}>
						Daniel Pádua
					</Box>
				)}
			</Box>

			{showAnimation && (
				<Fade in timeout={3000}>
					<Box className={classes.line} sx={{ borderColor: `${colors(selectedOption).primary}` }} />
				</Fade>
			)}

			{!showAnimation && <Box className={clsx(classes.line, classes.lineTransition)} sx={{ borderColor: `${colors(selectedOption).primary}` }} />}
		</Box>
	);
};
