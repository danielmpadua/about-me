import { Box, Fade, Slide, Typography } from "@mui/material";

import { colors } from "../../../../styles";
import { pxToRem } from "../../../../utils";
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
					<Typography variant="merriweather-title-xl" color="#fff">
						Prazer, sou
					</Typography>
				</Slide>

				{showAnimation && (
					<Slide in direction="left" timeout={2000}>
						<Typography variant="merriweather-title-xl" color={colors(selectedOption).primary}>
							Daniel Pádua
						</Typography>
					</Slide>
				)}

				{!showAnimation && (
					<Typography variant="merriweather-title-xl" color={colors(selectedOption).primary} className={classes.titleTransition}>
						Daniel Pádua
					</Typography>
				)}
			</Box>

			{showAnimation && (
				<Fade in timeout={3000}>
					<Box className={classes.line} sx={{ border: `${pxToRem(2)} solid ${colors(selectedOption).primary}` }} />
				</Fade>
			)}

			{!showAnimation && <Box className={classes.lineTransition} sx={{ border: `${pxToRem(2)} solid ${colors(selectedOption).primary}` }} />}
		</Box>
	);
};
