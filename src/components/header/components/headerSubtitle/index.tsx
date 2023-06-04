import { Slide, Box } from "@mui/material";

import { useStyles } from "./styles";

export const HeaderSubtitle = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Slide in direction="left" timeout={2000}>
				<Box className={classes.text}>
					Um engenheiro de software apaixonado por tecnologia, música, desenvolvimento pessoal e diversas outras coisas.
				</Box>
			</Slide>

			<Slide in direction="left" timeout={2000}>
				<Box className={classes.text}>Vamos trocar uma ideia?</Box>
			</Slide>

			<Slide in direction="left" timeout={2000}>
				<Box className={classes.text}>Entre em contato clicando nas minhas redes sociais abaixo! (Recomendo o Instagram)</Box>
			</Slide>
		</Box>
	);
};
