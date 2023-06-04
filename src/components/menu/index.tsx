import { useEffect, useRef, useState } from "react";

import { Box, Fade } from "@mui/material";

import { NeonArrows } from "../../assets";
import { colors } from "../../styles";
import { pxToRem } from "../../utils";
import { MenuButtons } from "./components";
import { useStyles } from "./styles";

type TMenu = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Menu = ({ selectedOption, changeOption }: TMenu) => {
	const classes = useStyles();
	const ref = useRef<HTMLElement>(null);

	const [showAnimation, setShowAnimation] = useState(true);
	const [isSticky, setIsSticky] = useState(false);

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
		if (top !== undefined && top > 5) setIsSticky(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler, true);
		return () => {
			window.removeEventListener("scroll", scrollHandler, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box ref={ref} sx={{ height: 180 }}>
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

				<MenuButtons isSticky={isSticky} isSelected={isSelected} onClick={changeOption} />
			</Box>

			<Fade in timeout={2000}>
				<Box
					className={classes.arrow}
					sx={{
						transform: isSticky ? "rotate(180deg)" : "inherit",
						background: `linear-gradient(${isSticky ? "1turn," : ""}rgba(0,0,0,1) 50%, rgba(0,0,0,0))`,
					}}
				>
					<Box className={showAnimation ? classes.icon : classes.iconAnimation} sx={{ marginTop: pxToRem(isSticky ? 68 : 32) }}>
						<NeonArrows size={30} color={colors(selectedOption).primary} className={classes.transition} />
					</Box>
				</Box>
			</Fade>
		</Box>
	);
};
