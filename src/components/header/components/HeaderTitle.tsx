import { useState } from "react";

import { Box, Fade, Slide, Typography } from "@mui/material";

import { colors } from "../../../styles";
import { IsMobile, pxToRem } from "../../../utils";

type THeaderTitle = {
	selectedOption: string;
};

export const HeaderTitle = ({ selectedOption }: THeaderTitle) => {
	const [showAnimation, setShowAnimation] = useState(true);

	const removeAnimation = () => {
		setShowAnimation(false);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: pxToRem(IsMobile() ? 8 : 16), width: "fit-content" }}>
			<Box
				sx={{
					gap: pxToRem(8),
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<Slide in direction="down" timeout={2005} onEntered={removeAnimation}>
					<Typography variant="merriweather-heading2" color="#fff">
						Prazer, sou
					</Typography>
				</Slide>

				{showAnimation && (
					<Slide in direction="left" timeout={2000}>
						<Typography variant="merriweather-heading2" color={colors(selectedOption).primary}>
							Daniel Pádua
						</Typography>
					</Slide>
				)}

				{!showAnimation && (
					<Typography
						variant="merriweather-heading2"
						color={colors(selectedOption).primary}
						sx={{
							transition: "color 1s ease-out",
							OTransition: "color 1s ease-out",
							MozTransition: "color 1s ease-out",
							WebkitTransition: "color 1s ease-out",
						}}
					>
						Daniel Pádua
					</Typography>
				)}
			</Box>

			{showAnimation && (
				<Fade in timeout={3000}>
					<Box
						sx={{
							width: "75%",
							borderRadius: pxToRem(8),
							border: `${pxToRem(1)} solid ${colors(selectedOption).primary}`,
						}}
					/>
				</Fade>
			)}

			{!showAnimation && (
				<Box
					sx={{
						width: "75%",
						border: `${pxToRem(1)} solid ${colors(selectedOption).primary}`,
						borderRadius: pxToRem(8),
						transition: "border 1s ease-out",
						OTransition: "border 1s ease-out",
						MozTransition: "border 1s ease-out",
						WebkitTransition: "border 1s ease-out",
					}}
				/>
			)}
		</Box>
	);
};
