import { GiGuitarHead } from "react-icons/gi";
import { RxPerson, RxCode } from "react-icons/rx";

import { Container, Fade, Grid } from "@mui/material";

import { pxToRem } from "../../../../utils";
import { CustomIconButton } from "../customIconButton";
import { useStyles } from "./styles";

type TMenuButtons = {
	isSticky: boolean;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const MenuButtons = ({ onClick, isSelected, isSticky }: TMenuButtons) => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl" className={classes.container}>
			<Fade in timeout={1500}>
				<Grid container spacing={2}>
					<Grid item xs={4} className={classes.itemContainer}>
						<CustomIconButton
							slideDirection="down"
							slideTimeout={1500}
							isSticky={isSticky}
							isSelected={isSelected}
							onClick={onClick}
							text="Sobre mim"
							type=""
							icon={<RxPerson size={pxToRem(40)} />}
						/>
					</Grid>

					<Grid item xs={4} className={classes.itemContainer}>
						<CustomIconButton
							slideDirection="up"
							slideTimeout={1000}
							isSticky={isSticky}
							isSelected={isSelected}
							onClick={onClick}
							text="Programação"
							type="CODE"
							icon={<RxCode size={pxToRem(40)} />}
						/>
					</Grid>

					<Grid item xs={4} className={classes.itemContainer}>
						<CustomIconButton
							slideTimeout={1250}
							slideDirection="down"
							isSticky={isSticky}
							isSelected={isSelected}
							onClick={onClick}
							text="Música"
							type="MUSIC"
							icon={<GiGuitarHead size={pxToRem(40)} />}
						/>
					</Grid>
				</Grid>
			</Fade>
		</Container>
	);
};
