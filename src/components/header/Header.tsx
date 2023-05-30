import { useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

import { Box, Fade, Grid, Slide, Typography } from "@mui/material";

import Image from "../../assets/images/danielbw.png";
import { colors } from "../../styles";
import { pxToRem, useWidth } from "../../utils";

type THeader = {
	selectedOption: string;
};

export const Header = ({ selectedOption }: THeader) => {
	const width = useWidth();
	const containerRef = useRef(null);
	const [showAnimation, setShowAnimation] = useState(true);

	const removeAnimation = () => {
		setShowAnimation(false);
	};

	const imageSize = () => {
		if (width === "xs") return pxToRem(120);
		if (width === "sm") return pxToRem(160);
		if (width === "md") return pxToRem(175);
		return pxToRem(200);
	};

	const iconSize = () => {
		if (width === "xs") return pxToRem(20);
		if (width === "sm" || width === "md") return pxToRem(24);
		return pxToRem(28);
	};

	return (
		<Box
			ref={containerRef}
			sx={{
				padding: pxToRem(width === "xs" ? 8 : 32),
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
				overflow: "hidden",
				gap: pxToRem(16),
			}}
		>
			<Grid container spacing={width === "xs" ? 2 : 4}>
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
					<Fade in timeout={3000}>
						<img src={Image} alt="Daniel Padua" style={{ width: imageSize() }} />
					</Fade>
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
					<Slide in direction="down" timeout={2000}>
						<Typography variant="merriweather-heading2" color="#fff">
							Prazer, sou
						</Typography>
					</Slide>

					{showAnimation && (
						<>
							<Slide in direction="left" timeout={2000} onEntered={removeAnimation}>
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
							</Slide>

							<Fade in timeout={3000}>
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
							</Fade>
						</>
					)}

					{!showAnimation && (
						<>
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
						</>
					)}

					<Slide in direction="left" timeout={2000}>
						<Typography
							variant={width === "xs" ? "merriweather-body-regular" : "merriweather-footnote-regular"}
							color="#808ca4"
							sx={{
								maxWidth: width === "xs" ? "90%" : pxToRem(300),
								my: pxToRem(8),
							}}
						>
							Um engenheiro de software apaixonado por tecnologia, música, desenvolvimento pessoal e diversas outras coisas. Vamos trocar uma ideia?
							Entre em contato clicando nas minhas redes sociais abaixo! (Recomendo o Instagram)
						</Typography>
					</Slide>

					{width !== "xs" && (
						<Slide direction="up" in container={containerRef.current} timeout={2000}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									maxWidth: pxToRem(350),
									gap: pxToRem(16),
								}}
							>
								<SocialIcon
									target="_blank"
									url="https://www.instagram.com/danielmpadua"
									bgColor={colors().primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>

								<SocialIcon
									target="_blank"
									url="https://www.facebook.com/daniel.marianopadua"
									bgColor={colors().primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>

								<SocialIcon
									target="_blank"
									url="https://www.linkedin.com/in/danielmpadua"
									bgColor={colors("CODE").primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>

								<SocialIcon
									target="_blank"
									url="https://github.com/danielmpadua"
									bgColor={colors("CODE").primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>
							</Box>
						</Slide>
					)}

					{width !== "xs" && (
						<Slide direction="up" in container={containerRef.current} timeout={2000}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									maxWidth: pxToRem(350),
									gap: pxToRem(16),
								}}
							>
								<SocialIcon
									target="_blank"
									url="https://www.instagram.com/danielpaduamusic"
									bgColor={colors("MUSIC").primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>

								<SocialIcon
									target="_blank"
									url="https://www.tiktok.com/@danielpaduamusic"
									bgColor={colors("MUSIC").primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>

								<SocialIcon
									target="_blank"
									url="https://www.youtube.com/@danielpaduamusic/"
									bgColor={colors("MUSIC").primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>

								<SocialIcon
									target="_blank"
									url="mailto:danielpaduaofficial@gmail.com"
									bgColor={colors("MUSIC").primary}
									style={{ width: iconSize(), height: iconSize() }}
								/>
							</Box>
						</Slide>
					)}
				</Grid>
			</Grid>

			{width === "xs" && (
				<Slide direction="up" in container={containerRef.current} timeout={2000}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							maxWidth: pxToRem(350),
							gap: pxToRem(16),
						}}
					>
						<SocialIcon
							target="_blank"
							url="https://www.instagram.com/danielmpadua"
							bgColor={colors().primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="https://www.facebook.com/daniel.marianopadua"
							bgColor={colors().primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="https://www.linkedin.com/in/danielmpadua"
							bgColor={colors("CODE").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="https://github.com/danielmpadua"
							bgColor={colors("CODE").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="https://www.instagram.com/danielpaduamusic"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="https://www.tiktok.com/@danielpaduamusic"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="https://www.youtube.com/@danielpaduamusic/"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>

						<SocialIcon
							target="_blank"
							url="mailto:danielpaduaofficial@gmail.com"
							bgColor={colors("MUSIC").primary}
							style={{ width: iconSize(), height: iconSize() }}
						/>
					</Box>
				</Slide>
			)}
		</Box>
	);
};
