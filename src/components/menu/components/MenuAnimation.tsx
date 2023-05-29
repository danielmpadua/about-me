import { useRef } from "react";

import { Box, Button, Container, Fade, Grid, Slide } from "@mui/material";

import { colors } from "../../../styles";
import { fontResize, pxToRem, useWidth } from "../../../utils";

type TMenu = {
	selectedOption: string;
	onClick: (option: string) => void;
	removeAnimation: () => void;
	isSelected: (value: string) => boolean;
};

export const MenuAnimation = ({ selectedOption, onClick, removeAnimation, isSelected }: TMenu) => {
	const containerRef = useRef(null);
	const width = useWidth();

	const buttonSize = () => {
		if (width === "xs") return pxToRem(46);
		if (width === "sm" || width === "md") return pxToRem(50);
		return pxToRem(56);
	};

	return (
		<Fade in timeout={3000} onEntered={removeAnimation}>
			<Box
				ref={containerRef}
				sx={{
					background: `linear-gradient(to left, ${colors(selectedOption).backgroundMenu} , rgba(88,88,88,0.24413515406162467))`,
					padding: pxToRem(32),
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={2} direction={width === "xs" ? "column" : "row"}>
						<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Slide
								in
								unmountOnExit
								mountOnEnter
								direction={width === "xs" ? "left" : "down"}
								timeout={selectedOption === "" ? 1000 : 2000}
								container={containerRef.current}
							>
								<Button
									variant="contained"
									size="large"
									onClick={() => onClick("")}
									sx={{
										background: isSelected("") ? colors("").primary : "#979da8",
										color: "#000",
										width: "80%",
										height: buttonSize(),
										fontFamily: "Merriweather Sans Variable",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: fontResize(20, width),
										lineHeight: fontResize(24, width),
										"&:hover": {
											background: isSelected("") ? colors("").primary : "#979da8",
											backgroundImage: isSelected("") ? colors("").primary : `linear-gradient(45deg, #979da8 20%, ${colors("").primary} 90%)`,
										},
									}}
								>
									Pessoal
								</Button>
							</Slide>
						</Grid>

						<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Slide
								in
								unmountOnExit
								mountOnEnter
								direction={width === "xs" ? "right" : "up"}
								timeout={selectedOption === "CODE" ? 1000 : 2000}
								container={containerRef.current}
							>
								<Button
									variant="contained"
									size="large"
									onClick={() => onClick("CODE")}
									sx={{
										background: isSelected("CODE") ? colors("CODE").primary : "#979da8",
										color: "#000",
										width: "80%",
										height: buttonSize(),
										fontFamily: "Merriweather Sans Variable",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: fontResize(20, width),
										lineHeight: fontResize(24, width),
										"&:hover": {
											background: isSelected("CODE") ? colors("CODE").primary : "#979da8",
											backgroundImage: isSelected("CODE") ? colors("CODE").primary : `linear-gradient(45deg, #979da8 20%, ${colors("").primary} 90%)`,
										},
									}}
								>
									Programação
								</Button>
							</Slide>
						</Grid>

						<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Slide
								in
								unmountOnExit
								mountOnEnter
								direction={width === "xs" ? "left" : "down"}
								timeout={selectedOption === "MUSIC" ? 1000 : 2000}
								container={containerRef.current}
							>
								<Button
									variant="contained"
									size="large"
									onClick={() => onClick("MUSIC")}
									sx={{
										background: isSelected("MUSIC") ? colors("MUSIC").primary : "#979da8",
										color: "#000",
										width: "80%",
										height: buttonSize(),
										fontFamily: "Merriweather Sans Variable",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: fontResize(20, width),
										lineHeight: fontResize(24, width),
										"&:hover": {
											background: isSelected("MUSIC") ? colors("MUSIC").primary : "#979da8",
											backgroundImage: isSelected("MUSIC")
												? colors("MUSIC").primary
												: `linear-gradient(45deg, #979da8 20%, ${colors("").primary} 90%)`,
										},
									}}
								>
									Música
								</Button>
							</Slide>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Fade>
	);
};
