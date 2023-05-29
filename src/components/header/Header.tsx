import { SocialIcon } from "react-social-icons";

import { Box, Grid, Typography } from "@mui/material";

import Image from "../../assets/images/danielbw.png";
import { colors } from "../../styles";
import { pxToRem, useWidth } from "../../utils";

type THeader = {
	selectedOption: string;
};

export const Header = ({ selectedOption }: THeader) => {
	const width = useWidth();

	const imageSize = () => {
		if (width === "xs") return pxToRem(120);
		if (width === "sm" || width === "md") return pxToRem(140);
		return pxToRem(200);
	};

	const iconSize = () => {
		if (width === "xs") return pxToRem(14);
		if (width === "sm" || width === "md") return pxToRem(20);
		return pxToRem(28);
	};

	return (
		<Box
			sx={{
				padding: pxToRem(32),
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Grid container spacing={4}>
				<Grid
					item
					xs={4}
					sm={6}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
					}}
				>
					<img src={Image} alt="Daniel Padua" style={{ width: imageSize() }} />
				</Grid>

				<Grid
					item
					xs={8}
					sm={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						gap: pxToRem(8),
					}}
				>
					<Typography variant="merriweather-heading2" color="#fff">
						Olá, me chamo
					</Typography>

					<Typography
						variant="merriweather-heading2"
						color={colors(selectedOption).primary}
						sx={{
							webkitTransition: "color 1s ease-out",
							transition: "color 1s ease-out",
							oTransition: "color 1s ease-out",
							mozTransition: "color 1s ease-out",
						}}
					>
						Daniel Pádua
					</Typography>

					<Box
						sx={{
							maxWidth: pxToRem(200),
							border: `${pxToRem(1)} solid ${colors(selectedOption).primary}`,
							borderRadius: pxToRem(8),
							webkitTransition: "border 1s ease-out",
							transition: "border 1s ease-out",
							oTransition: "border 1s ease-out",
							mozTransition: "border 1s ease-out",
						}}
					/>

					<Typography
						variant="merriweather-footnote-regular"
						color="#808ca4"
						sx={{
							maxWidth: width === "xs" ? "90%" : pxToRem(300),
							my: pxToRem(8),
						}}
					>
						Sou um engenheiro de software apaixonado por tecnologia, música e diversos outros assuntos.
					</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							maxWidth: pxToRem(350),
							gap: pxToRem(16),
						}}
					>
						<SocialIcon url="https://www.instagram.com/danielmpadua" bgColor={colors().primary} style={{ width: iconSize(), height: iconSize() }} />

						<SocialIcon
							url="https://www.facebook.com/daniel.marianopadua"
							bgColor={colors().primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							url="https://www.linkedin.com/in/danielmpadua"
							bgColor={colors("CODE").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon url="https://github.com/danielmpadua" bgColor={colors("CODE").primary} style={{ width: iconSize(), height: iconSize() }} />
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							maxWidth: pxToRem(350),
							gap: pxToRem(16),
						}}
					>
						<SocialIcon
							url="https://www.instagram.com/danielpaduamusic"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							url="https://www.tiktok.com/@danielpaduamusic"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							url="https://www.youtube.com/@danielpaduamusic/"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							url="mailto:danielpaduaofficial@gmail.com"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
