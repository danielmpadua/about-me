import { useRef, useState } from "react";

import { Box } from "@mui/material";

import { HeaderImage, HeaderSubtitle, HeaderTitle, SocialIcons } from "./components";
import { useStyles } from "./styles";

type THeader = {
	selectedOption: string;
};

export const Header = ({ selectedOption }: THeader) => {
	const classes = useStyles();
	const containerRef = useRef(null);

	const [showAnimation, setShowAnimation] = useState(true);

	const removeAnimation = () => {
		setShowAnimation(false);
	};

	return (
		<Box ref={containerRef} className={classes.root}>
			<Box className={classes.headerContainer}>
				<HeaderImage selectedOption={selectedOption} showAnimation={showAnimation} />

				<Box className={classes.contentContainer}>
					<HeaderTitle selectedOption={selectedOption} showAnimation={showAnimation} removeAnimation={removeAnimation} />

					<HeaderSubtitle />

					<SocialIcons containerRef={containerRef} />
				</Box>
			</Box>
		</Box>
	);
};
