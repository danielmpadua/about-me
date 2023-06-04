import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { LuConstruction } from "react-icons/lu";

import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Presentation } from "./components";
import { CustomTheme, colors } from "./styles";

const App = () => {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const changeOption = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<ThemeProvider theme={CustomTheme()}>
			<Scrollbars hidden={false} autoHeight={true} autoHeightMax="100vh">
				<Presentation selectedOption={selectedOption} changeOption={changeOption} />
				<Container
					maxWidth="xl"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "100vh",
					}}
				>
					<LuConstruction
						size="20vh"
						color={colors(selectedOption).primary}
						style={{
							WebkitTransition: "color 1s ease-out",
							transition: "color 1s ease-out",
							OTransition: "color 1s ease-out",
							MozTransition: "color 1s ease-out",
						}}
					/>
					<Typography
						variant="merriweather-heading3"
						color={colors(selectedOption).primary}
						sx={{
							WebkitTransition: "color 1s ease-out",
							transition: "color 1s ease-out",
							OTransition: "color 1s ease-out",
							MozTransition: "color 1s ease-out",
						}}
					>
						Página em construção
					</Typography>
				</Container>
			</Scrollbars>
		</ThemeProvider>
	);
};

export default App;
