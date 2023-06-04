import { Header, Menu } from "..";

import { Box, Container, Typography } from "@mui/material";

import { Scrollbars } from "react-custom-scrollbars";

import { colors } from "../../styles";
import { useStyles } from "./styles";

import { LuConstruction } from "react-icons/lu";

type TPresentation = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Presentation = ({ selectedOption, changeOption }: TPresentation) => {
	const classes = useStyles();

	return (
		<Scrollbars hidden={false} autoHeight={true} autoHeightMax="100vh">
			<Box className={classes.root}>
				<Header selectedOption={selectedOption} />

				<Box className={classes.sticky}>
					<Menu selectedOption={selectedOption} changeOption={changeOption} />
				</Box>

				<Container
					maxWidth="xl"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "100vh",
					}}
				>
					<LuConstruction
						size="20vh"
						color={colors(selectedOption).primary}
						style={{
							WebkitTransition: "color 1s ease-out",
							transition: "color 1s ease-out",
							OTransition: "color 1s ease-out",
							MozTransition: "color 1s ease-out",
						}}
					/>
					<Typography
						variant="merriweather-title-xl"
						color={colors(selectedOption).primary}
						sx={{
							WebkitTransition: "color 1s ease-out",
							transition: "color 1s ease-out",
							OTransition: "color 1s ease-out",
							MozTransition: "color 1s ease-out",
						}}
					>
						Página em construção
					</Typography>
				</Container>
			</Box>
		</Scrollbars>
	);
};
