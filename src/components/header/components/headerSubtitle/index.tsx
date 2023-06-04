import { Box, Slide, Typography } from "@mui/material";

import { useStyles } from "./styles";

export const HeaderSubtitle = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Slide in direction="left" timeout={2000}>
				<Typography color="#808ca4" variant="merriweather-subtitle-xl">
					Um engenheiro de software apaixonado por tecnologia, música, desenvolvimento pessoal e diversas outras coisas.
				</Typography>
			</Slide>

			<Slide in direction="left" timeout={2000}>
				<Typography color="#808ca4" variant="merriweather-subtitle-xl">
					Vamos trocar uma ideia?
				</Typography>
			</Slide>

			<Slide in direction="left" timeout={2000}>
				<Typography color="#808ca4" variant="merriweather-subtitle-xl">
					Entre em contato clicando nas minhas redes sociais abaixo! (Recomendo o Instagram)
				</Typography>
			</Slide>
		</Box>
	);
};
