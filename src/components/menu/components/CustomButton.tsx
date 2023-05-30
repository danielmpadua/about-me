import { Box, IconButton, Typography } from "@mui/material";

import { colors } from "../../../styles";
import { pxToRem, useWidth } from "../../../utils";

type TButton = {
	text: string;
	type: string;
	icon: JSX.Element;
	onClick: (option: string) => void;
	isSelected: (value: string) => boolean;
};

export const CustomButton = ({ isSelected, onClick, text, type, icon }: TButton) => {
	const width = useWidth();

	const buttonSize = () => {
		if (width === "xs") return pxToRem(30);
		if (width === "sm" || width === "md") return pxToRem(50);
		return pxToRem(60);
	};

	return (
		<Box
			onClick={() => {
				if (!isSelected(type)) onClick(type);
			}}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: pxToRem(8),
			}}
		>
			<Box
				sx={{
					border: isSelected(type) ? `2px solid ${colors(type).primary}` : `2px solid transparent`,
					borderRadius: pxToRem(200),
					width: buttonSize(),
					height: buttonSize(),
					padding: pxToRem(4),
					webkitTransition: "border 500ms ease-out",
					transition: "border 500ms ease-out",
					oTransition: "border 500ms ease-out",
					mozTransition: "border 500ms ease-out",
				}}
			>
				<IconButton
					size="large"
					sx={{
						background: isSelected(type) ? colors(type).primary : "#000",
						color: isSelected(type) ? "#000" : colors(type).primary,
						width: "100%",
						height: "100%",
						padding: pxToRem(4),
						WebkitTransition: "color 250ms ease-out, background 500ms ease-out",
						transition: "color 250ms ease-out, background 500ms ease-out",
						OTransition: "color 250ms ease-out, background 500ms ease-out",
						MozTransition: "color 250ms ease-out, background 500ms ease-out",
						"&:hover": {
							background: colors(type).primary,
							backgroundImage: colors(type).primary,
							color: "#000",
						},
					}}
				>
					{icon}
				</IconButton>
			</Box>
			<Typography variant="oswald-heading6" color="#fff">
				{text}
			</Typography>
		</Box>
	);
};
