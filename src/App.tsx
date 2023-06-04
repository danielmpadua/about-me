import { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { Presentation } from "./components";
import { CustomTheme } from "./styles";

const App = () => {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const changeOption = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<ThemeProvider theme={CustomTheme()}>
			<Presentation selectedOption={selectedOption} changeOption={changeOption} />
		</ThemeProvider>
	);
};

export default App;
