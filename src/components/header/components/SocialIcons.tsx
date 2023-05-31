import { SocialIcon } from "react-social-icons";

import { Box, Slide } from "@mui/material";

import { colors } from "../../../styles";
import { IsMobile, pxToRem, useWidth } from "../../../utils";

type TSocialIcons = {
	containerRef: React.MutableRefObject<null>;
};

export const SocialIcons = ({ containerRef }: TSocialIcons) => {
	const width = useWidth();

	const iconSize = () => {
		if (IsMobile()) return pxToRem(20);
		if (width === "sm" || width === "md") return pxToRem(24);
		if (width === "lg") return pxToRem(28);
		return pxToRem(40);
	};

	return (
		<Slide direction="up" in container={containerRef.current} timeout={2000}>
			<Box sx={{ display: "flex", alignItems: "center", gap: pxToRem(16) }}>
				<SocialIcon
					target="_blank"
					bgColor={colors().primary}
					url="https://www.instagram.com/danielmpadua"
					style={{ width: iconSize(), height: iconSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors().primary}
					style={{ width: iconSize(), height: iconSize() }}
					url="https://www.facebook.com/daniel.marianopadua"
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("CODE").primary}
					url="https://www.linkedin.com/in/danielmpadua"
					style={{ width: iconSize(), height: iconSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("CODE").primary}
					url="https://github.com/danielmpadua"
					style={{ width: iconSize(), height: iconSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					url="https://www.instagram.com/danielpaduamusic"
					style={{ width: iconSize(), height: iconSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					url="https://www.tiktok.com/@danielpaduamusic"
					style={{ width: iconSize(), height: iconSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					url="https://www.youtube.com/@danielpaduamusic/"
					style={{ width: iconSize(), height: iconSize() }}
				/>

				<SocialIcon
					target="_blank"
					bgColor={colors("MUSIC").primary}
					url="mailto:danielpaduaofficial@gmail.com"
					style={{ width: iconSize(), height: iconSize() }}
				/>
			</Box>
		</Slide>
	);
};
