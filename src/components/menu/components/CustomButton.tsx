import { Box, Button } from "@mui/material";

import { colors } from "../../../styles";
import { fontResize, pxToRem, useWidth } from "../../../utils";

type TButton = {
	text: string;
	type: string;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const CustomButton = ({ isSelected, onClick, text, type }: TButton) => {
	const width = useWidth();

	return (
		<Box
			sx={{
				border: isSelected(type) ? `1px solid ${colors(type).primary}` : "none",
				borderRadius: pxToRem(28),
				width: "80%",
				padding: pxToRem(6),
				webkitTransition: "border 500ms ease-out",
				transition: "border 500ms ease-out",
				oTransition: "border 500ms ease-out",
				mozTransition: "border 500ms ease-out",
			}}
		>
			<Button
				variant="contained"
				size="large"
				onClick={() => {
					if (!isSelected(type)) onClick(type);
				}}
				sx={{
					background: isSelected(type) ? colors(type).primary : "#000",
					color: isSelected(type) ? "#000" : "#fff",
					width: "100%",
					fontFamily: "Merriweather Sans Variable",
					fontStyle: "normal",
					fontWeight: 500,
					fontSize: fontResize(20, width),
					lineHeight: fontResize(24, width),
					borderRadius: pxToRem(20),

					"&:hover": {
						background: colors(type).primary,
						backgroundImage: colors(type).primary,
						color: "#000",
					},
				}}
			>
				{text}
			</Button>
		</Box>
	);
};
