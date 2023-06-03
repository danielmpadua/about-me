import { Box, Fade } from "@mui/material";

import DanielGreen from "../../../../assets/images/danielgreen.png";
import DanielPurple from "../../../../assets/images/danielpurple.png";
import DanielYellow from "../../../../assets/images/danielyellow.png";
import { useStyles } from "./styles";

type THeader = {
	selectedOption: string;
	showAnimation: boolean;
};

export const HeaderImage = ({ selectedOption, showAnimation }: THeader) => {
	const classes = useStyles();

	return (
		<Box className={classes.imageContainer}>
			<Fade in={selectedOption === ""} timeout={showAnimation ? 3000 : 1000}>
				<Box component="img" src={DanielPurple} alt="Daniel Padua" className={classes.image} />
			</Fade>

			<Fade in={selectedOption === "CODE"} timeout={showAnimation ? 3000 : 1000}>
				<Box component="img" src={DanielGreen} alt="Daniel Padua" className={classes.image} />
			</Fade>

			<Fade in={selectedOption === "MUSIC"} timeout={showAnimation ? 3000 : 1000}>
				<Box component="img" src={DanielYellow} alt="Daniel Padua" className={classes.image} />
			</Fade>
		</Box>
	);
};
