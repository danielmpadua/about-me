import { Box, Container, Grid } from "@mui/material";

import { colors } from "../../../styles";
import { pxToRem, useWidth } from "../../../utils";
import { CustomButton } from "./CustomButton";

type TMenu = {
	selectedOption: string;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const MenuNoAnimation = ({ selectedOption, onClick, isSelected }: TMenu) => {
	const width = useWidth();

	return (
		<Box
			sx={{
				padding: pxToRem(16),
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
			}}
		>
			<Box
				sx={{
					background: `linear-gradient(to left, ${colors(selectedOption).backgroundMenu} , rgba(88,88,88,0.24413515406162467))`,
					position: "absolute",
					width: "100%",
					height: "100%",
				}}
			/>
			<Container maxWidth="xl">
				<Grid container spacing={2} direction={width === "xs" ? "column" : "row"}>
					<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<CustomButton isSelected={isSelected} onClick={onClick} text="Pessoal" type="" />
					</Grid>

					<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<CustomButton isSelected={isSelected} onClick={onClick} text="Programação" type="CODE" />
					</Grid>

					<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<CustomButton isSelected={isSelected} onClick={onClick} text="Música" type="MUSIC" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
