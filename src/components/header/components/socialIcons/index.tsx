import { SocialIcon } from "react-social-icons";

import { Box, Slide, useMediaQuery, useTheme } from "@mui/material";

import { colors } from "../../../../styles";
import { pxToRem } from "../../../../utils";
import { useStyles } from "./styles";

type TSocialIcons = {
	containerRef: React.MutableRefObject<null>;
};

export const SocialIcons = ({ containerRef }: TSocialIcons) => {
	const classes = useStyles();
	const theme = useTheme();

	const isBellowMd = useMediaQuery(theme.breakpoints.down("md"));
	const isBellowLg = useMediaQuery(theme.breakpoints.down("lg"));

	const SetSize = () => {
		if (isBellowMd) return pxToRem(32);
		if (isBellowLg) return pxToRem(40);
		return pxToRem(59);
	};

	return (
		<Slide direction="up" in container={containerRef.current} timeout={2000}>
			<Box className={classes.container}>
				<SocialIcon
					target="_blank"
					bgColor={colors().primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="https://www.instagram.com/danielmpadua"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors().primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="https://www.facebook.com/daniel.marianopadua"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("CODE").primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="https://www.linkedin.com/in/danielmpadua"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("CODE").primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="https://github.com/danielmpadua"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="https://www.instagram.com/danielpaduamusic"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="https://www.tiktok.com/@danielpaduamusic"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					url="https://www.youtube.com/@danielpaduamusic/"
					style={{ width: SetSize(), height: SetSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					style={{ width: SetSize(), height: SetSize() }}
					url="mailto:danielpaduaofficial@gmail.com"
				/>
			</Box>
		</Slide>
	);
};
