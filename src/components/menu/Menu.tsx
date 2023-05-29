import { useRef } from "react";

import { Box, Button, Container, Fade, Grid, Slide } from "@mui/material";

import { colors } from "../../styles";
import { pxToRem } from "../../utils";

type TMenu = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Menu = ({ selectedOption, changeOption }: TMenu) => {
	const containerRef = useRef(null);

	const isSelected = (value: string) => {
		if (value === selectedOption) return true;
		return false;
	};

	return (
		<Fade in timeout={3000} unmountOnExit mountOnEnter>
			<Box
				ref={containerRef}
				sx={{
					background: colors(selectedOption).backgroundMenu,
					backgroundImage: `linear-gradient(to left, ${colors(selectedOption).backgroundMenu} , rgba(88,88,88,0.24413515406162467))`,
					padding: pxToRem(32),
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
					webkitTransition: "background 1s ease-out",
					transition: "background 1s ease-out",
					oTransition: "background 1s ease-out",
					mozTransition: "background 1s ease-out",
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={4}>
						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Slide in unmountOnExit mountOnEnter direction="down" timeout={selectedOption === "" ? 1000 : 2000} container={containerRef.current}>
								<Button
									variant="contained"
									size="large"
									onClick={() => changeOption("")}
									sx={{
										background: isSelected("") ? colors("").primary : "#979da8",
										color: "#000",
										width: "80%",
										height: pxToRem(56),
										fontFamily: "Merriweather Sans Variable",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: pxToRem(24),
										lineHeight: pxToRem(29),
										"&:hover": {
											background: colors().primary,
										},
									}}
								>
									Pessoal
								</Button>
							</Slide>
						</Grid>

						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Slide in unmountOnExit mountOnEnter direction="up" timeout={selectedOption === "CODE" ? 1000 : 2000} container={containerRef.current}>
								<Button
									variant="contained"
									size="large"
									onClick={() => changeOption("CODE")}
									sx={{
										background: isSelected("CODE") ? colors("CODE").primary : "#979da8",
										color: "#000",
										width: "80%",
										height: pxToRem(56),
										fontFamily: "Merriweather Sans Variable",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: pxToRem(24),
										lineHeight: pxToRem(29),
										"&:hover": {
											background: colors("CODE").primary,
										},
									}}
								>
									Programação
								</Button>
							</Slide>
						</Grid>

						<Grid
							item
							xs={4}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Slide
								in
								unmountOnExit
								mountOnEnter
								direction="down"
								timeout={selectedOption === "MUSIC" ? 1000 : 2000}
								container={containerRef.current}
							>
								<Button
									variant="contained"
									size="large"
									onClick={() => changeOption("MUSIC")}
									sx={{
										background: isSelected("MUSIC") ? colors("MUSIC").primary : "#979da8",
										color: "#000",
										width: "80%",
										height: pxToRem(56),
										fontFamily: "Merriweather Sans Variable",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: pxToRem(24),
										lineHeight: pxToRem(29),
										"&:hover": {
											background: colors("MUSIC").primary,
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
