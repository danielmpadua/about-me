import { useEffect, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";

import GreenFavicon from "./assets/images/danifavicongreen.png";
import PurpleFavicon from "./assets/images/danifaviconpurple.png";
import YellowFavicon from "./assets/images/danifaviconyellow.png";
import { Presentation } from "./components";
import { CustomTheme } from "./styles";

const App = () => {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const changeOption = (option: string) => {
		setSelectedOption(option);
	};

	useEffect(() => {
		const faviconUpdate = async () => {
			const favicon = document.getElementById("favicon");

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (selectedOption === "CODE") favicon.href = GreenFavicon;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			else if (selectedOption === "MUSIC") favicon.href = YellowFavicon;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			else favicon.href = PurpleFavicon;
		};

		faviconUpdate();
	}, [selectedOption]);

	return (
		<ThemeProvider theme={CustomTheme()}>
			<Presentation selectedOption={selectedOption} changeOption={changeOption} />
		</ThemeProvider>
	);
};

export default App;
