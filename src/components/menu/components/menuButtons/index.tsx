import { GiGuitarHead } from "react-icons/gi";
import { RxPerson, RxCode } from "react-icons/rx";

import { Box, Container, Fade, Grid, Slide } from "@mui/material";

import { pxToRem } from "../../../../utils";
import { CustomIconButton } from "../customIconButton";
import { useStyles } from "./styles";

type TMenuButtons = {
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const MenuButtons = ({ onClick, isSelected }: TMenuButtons) => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl" className={classes.container}>
			<Fade in timeout={1500}>
				<Grid container spacing={2}>
					<Grid item xs={4} className={classes.itemContainer}>
						<Slide direction="down" in timeout={1500}>
							<Box m={0} p={0} width="fit-content">
								<CustomIconButton isSelected={isSelected} onClick={onClick} text="Sobre mim" type="" icon={<RxPerson size={pxToRem(40)} />} />
							</Box>
						</Slide>
					</Grid>

					<Grid item xs={4} className={classes.itemContainer}>
						<Slide direction="up" in timeout={1000}>
							<Box m={0} p={0} width="fit-content">
								<CustomIconButton isSelected={isSelected} onClick={onClick} text="Programação" type="CODE" icon={<RxCode size={pxToRem(40)} />} />
							</Box>
						</Slide>
					</Grid>

					<Grid item xs={4} className={classes.itemContainer}>
						<Slide direction="down" in timeout={1250}>
							<Box m={0} p={0} width="fit-content">
								<CustomIconButton isSelected={isSelected} onClick={onClick} text="Música" type="MUSIC" icon={<GiGuitarHead size={pxToRem(40)} />} />
							</Box>
						</Slide>
					</Grid>
				</Grid>
			</Fade>
		</Container>
	);
};
