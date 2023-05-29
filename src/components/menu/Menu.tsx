import { Box, Button, Container, Grid } from "@mui/material";

import Wave from "../../assets/icons/Wave";
import { colors } from "../../styles";
import { pxToRem } from "../../utils";

type TMenu = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Menu = ({ selectedOption, changeOption }: TMenu) => {
	const isSelected = (value: string) => {
		if (value === selectedOption) return true;
		return false;
	};

	return (
		<Box
			sx={{
				position: "relative",
			}}
		>
			<Box
				sx={{
					background: colors(selectedOption).backgroundMenu,
					backgroundImage: `linear-gradient(to left, ${colors(selectedOption).backgroundMenu} , rgba(88,88,88,0.24413515406162467))`,
					padding: pxToRem(32),
					display: "flex",
					alignItems: "center",
					justifyContent: "center",

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
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};
