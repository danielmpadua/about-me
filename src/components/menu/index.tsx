import { useState } from "react";

import { Box, Fade } from "@mui/material";

import { MenuButtons } from "./components";
import { useStyles } from "./styles";

type TMenu = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Menu = ({ selectedOption, changeOption }: TMenu) => {
	const classes = useStyles();

	const [showAnimation, setShowAnimation] = useState(true);

	const isSelected = (value: string) => {
		if (value === selectedOption) return true;
		return false;
	};

	const removeAnimation = () => {
		setShowAnimation(false);
	};

	return (
		<Box className={classes.root}>
			<Fade in={selectedOption === ""} timeout={showAnimation ? 3000 : 1000} onEntered={removeAnimation}>
				<Box className={classes.purpleBackground} />
			</Fade>

			<Fade in={selectedOption === "CODE"} timeout={showAnimation ? 3000 : 1000} onEntered={removeAnimation}>
				<Box className={classes.greenBackground} />
			</Fade>

			<Fade in={selectedOption === "MUSIC"} timeout={showAnimation ? 3000 : 1000} onEntered={removeAnimation}>
				<Box className={classes.yellowBackground} />
			</Fade>

			<MenuButtons isSelected={isSelected} onClick={changeOption} />
		</Box>
	);
};
