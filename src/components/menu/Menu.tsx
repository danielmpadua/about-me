import { useState } from "react";

import { Box } from "@mui/material";

import { MenuAnimation, MenuNoAnimation } from "./components";

type TMenu = {
	selectedOption: string;
	changeOption: (option: string) => void;
};

export const Menu = ({ selectedOption, changeOption }: TMenu) => {
	const [showAnimation, setShowAnimation] = useState(true);

	const isSelected = (value: string) => {
		if (value === selectedOption) return true;
		return false;
	};

	const removeAnimation = () => {
		setShowAnimation(false);
	};

	return (
		<Box>
			{showAnimation && (
				<MenuAnimation isSelected={isSelected} onClick={changeOption} selectedOption={selectedOption} removeAnimation={removeAnimation} />
			)}
			{!showAnimation && <MenuNoAnimation isSelected={isSelected} onClick={changeOption} selectedOption={selectedOption} />}
		</Box>
	);
};
