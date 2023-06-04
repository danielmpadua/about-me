import { SocialIcon } from "react-social-icons";

import { Box, Slide } from "@mui/material";

import { colors } from "../../../../styles";
import { useStyles } from "./styles";

type TSocialIcons = {
	containerRef: React.MutableRefObject<null>;
};

export const SocialIcons = ({ containerRef }: TSocialIcons) => {
	const classes = useStyles();

	return (
		<Slide direction="up" in container={containerRef.current} timeout={2000}>
			<Box className={classes.container}>
				<SocialIcon target="_blank" bgColor={colors().primary} url="https://www.instagram.com/danielmpadua" className={classes.icon} />

				<SocialIcon target="_blank" bgColor={colors().primary} className={classes.icon} url="https://www.facebook.com/daniel.marianopadua" />

				<SocialIcon target="_blank" bgColor={colors("CODE").primary} url="https://www.linkedin.com/in/danielmpadua" className={classes.icon} />

				<SocialIcon target="_blank" bgColor={colors("CODE").primary} url="https://github.com/danielmpadua" className={classes.icon} />

				<SocialIcon target="_blank" bgColor={colors("MUSIC").primary} url="https://www.instagram.com/danielpaduamusic" className={classes.icon} />

				<SocialIcon target="_blank" bgColor={colors("MUSIC").primary} url="https://www.tiktok.com/@danielpaduamusic" className={classes.icon} />

				<SocialIcon target="_blank" bgColor={colors("MUSIC").primary} url="https://www.youtube.com/@danielpaduamusic/" className={classes.icon} />

				<SocialIcon target="_blank" bgColor={colors("MUSIC").primary} url="mailto:danielpaduaofficial@gmail.com" className={classes.icon} />
			</Box>
		</Slide>
	);
};
