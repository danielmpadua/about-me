import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { Box, Fade, useMediaQuery } from "@mui/material";

import { NeonArrows } from "../../assets";
import { CustomTheme, colors } from "../../styles";
import { MenuButtons } from "./components";
import { useStyles } from "./styles";

type TMenu = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Menu = ({ selectedOption, changeOption }: TMenu) => {
	const theme = CustomTheme();
	const classes = useStyles();
	const ref = useRef<HTMLElement>(null);

	const [showAnimation, setShowAnimation] = useState(true);
	const [isSticky, setIsSticky] = useState(false);

	const isBellowMd = useMediaQuery(theme.breakpoints.down("md"));
	const isBellowLg = useMediaQuery(theme.breakpoints.down("lg"));

	const isSelected = (value: string) => {
		if (value === selectedOption) return true;
		return false;
	};

	const removeAnimation = () => {
		setShowAnimation(false);
	};

	const scrollHandler = () => {
		const top = ref?.current?.getBoundingClientRect()?.top;
		if (top !== undefined && top <= 0) setIsSticky(true);
		if (top !== undefined && top > 40) setIsSticky(false);
	};

	const SetSize = () => {
		if (isBellowMd) return 24;
		if (isBellowLg) return 26;
		return 28;
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler, true);
		return () => {
			window.removeEventListener("scroll", scrollHandler, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box ref={ref}>
			<Box className={classes.root}>
				<Fade in={selectedOption === ""} timeout={showAnimation ? 3000 : 1000} onEntered={removeAnimation}>
					<Box className={clsx(classes.background, classes.purpleBackground)} />
				</Fade>

				<Fade in={selectedOption === "CODE"} timeout={showAnimation ? 3000 : 1000} onEntered={removeAnimation}>
					<Box className={clsx(classes.background, classes.greenBackground)} />
				</Fade>

				<Fade in={selectedOption === "MUSIC"} timeout={showAnimation ? 3000 : 1000} onEntered={removeAnimation}>
					<Box className={clsx(classes.background, classes.yellowBackground)} />
				</Fade>

				<MenuButtons isSticky={isSticky} isSelected={isSelected} onClick={changeOption} />
			</Box>

			<Fade in timeout={2000}>
				<Box className={clsx(classes.arrow, isSticky && classes.arrowSticky)}>
					<Box className={clsx(classes.icon, !showAnimation && classes.iconAnimation, isSticky && classes.iconSticky)}>
						<NeonArrows size={SetSize()} color={colors(selectedOption).primary} className={classes.transition} />
					</Box>
				</Box>
			</Fade>
		</Box>
	);
};
