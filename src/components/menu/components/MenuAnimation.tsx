import { useRef } from "react";
import { GiGuitarHead } from "react-icons/gi";
import { RxPerson, RxCode } from "react-icons/rx";

import { Box, Container, Fade, Grid, Grow } from "@mui/material";

import { colors } from "../../../styles";
import { gradientPosition, pxToRem } from "../../../utils";
import { CustomButton } from "./CustomButton";

type TMenu = {
	selectedOption: string;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
	removeAnimation: () => void;
};

export const MenuAnimation = ({ selectedOption, onClick, isSelected, removeAnimation }: TMenu) => {
	const menuContainerRef = useRef(null);

	return (
		<Fade in timeout={3000} onEntered={removeAnimation}>
			<Box
				sx={{
					padding: pxToRem(16),
					display: "flex",
					maxHeight: 300,
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
				<Container maxWidth="xl" sx={{ zIndex: 10 }} ref={menuContainerRef}>
					<Grid container spacing={2}>
						<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Grow in timeout={selectedOption === "" ? 1000 : 2000}>
								<Box m={0} p={0} width="fit-content">
									<CustomButton isSelected={isSelected} onClick={onClick} text="Sobre mim" type="" icon={<RxPerson size={pxToRem(40)} />} />
								</Box>
							</Grow>
						</Grid>

						<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Grow in timeout={selectedOption === "CODE" ? 1000 : 2000}>
								<Box m={0} p={0} width="fit-content">
									<CustomButton isSelected={isSelected} onClick={onClick} text="Programação" type="CODE" icon={<RxCode size={pxToRem(40)} />} />
								</Box>
							</Grow>
						</Grid>

						<Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Grow in timeout={selectedOption === "MUSIC" ? 1000 : 2000}>
								<Box m={0} p={0} width="fit-content">
									<CustomButton isSelected={isSelected} onClick={onClick} text="Música" type="MUSIC" icon={<GiGuitarHead size={pxToRem(40)} />} />
								</Box>
							</Grow>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Fade>
	);
};
