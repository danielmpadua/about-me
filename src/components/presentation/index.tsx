import { Header, Menu } from "..";

import { Box, Fade } from "@mui/material";

import { NeonArrows } from "../../assets";
import { colors } from "../../styles";
import { useStyles } from "./styles";

import { useState } from "react";

type TPresentation = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Presentation = ({ selectedOption, changeOption }: TPresentation) => {
	const classes = useStyles();

	const [showAnimation, setShowAnimation] = useState(true);

	const removeAnimation = () => {
		setShowAnimation(false);
	};
	return (
		<Box className={classes.root}>
			<Header selectedOption={selectedOption} />

			<Menu selectedOption={selectedOption} changeOption={changeOption} />

			<Fade in timeout={2000} onEntered={removeAnimation}>
				<Box className={showAnimation ? classes.icon : classes.iconAnimation}>
					<NeonArrows size={30} color={colors(selectedOption).primary} />
				</Box>
			</Fade>
		</Box>
	);
};
