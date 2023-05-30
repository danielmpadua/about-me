import { GiGuitarHead } from "react-icons/gi";
import { RxPerson, RxCode } from "react-icons/rx";

import { Box, Container, Grid } from "@mui/material";

import { colors } from "../../../styles";
import { gradientPosition, pxToRem } from "../../../utils";
import { CustomButton } from "./CustomButton";

type TMenu = {
	selectedOption: string;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const MenuNoAnimation = ({ selectedOption, onClick, isSelected }: TMenu) => {
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
					background: `linear-gradient(${gradientPosition(selectedOption)} ${colors(selectedOption).backgroundMenu} , rgba(88,88,88,0.10))`,
					position: "absolute",
					width: "100%",
					height: "100%",
					zIndex: 5,
				}}
			/>
			<Container maxWidth="xl" sx={{ zIndex: 10 }}>
				<Grid container spacing={2}>
					<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<CustomButton isSelected={isSelected} onClick={onClick} text="Sobre mim" type="" icon={<RxPerson size={pxToRem(40)} />} />
					</Grid>

					<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<CustomButton isSelected={isSelected} onClick={onClick} text="Programação" type="CODE" icon={<RxCode size={pxToRem(40)} />} />
					</Grid>

					<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<CustomButton isSelected={isSelected} onClick={onClick} text="Música" type="MUSIC" icon={<GiGuitarHead size={pxToRem(40)} />} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
