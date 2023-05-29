import { useState } from "react";

import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Header, Menu } from "./components";
import { CustomTheme } from "./styles";

const App = () => {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const changeOption = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<ThemeProvider theme={CustomTheme()}>
			<Header selectedOption={selectedOption} />
			<Menu selectedOption={selectedOption} changeOption={changeOption} />
		</ThemeProvider>
	);
};

export default App;
