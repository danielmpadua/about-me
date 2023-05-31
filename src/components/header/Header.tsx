import { useRef } from "react";

import { Box, Fade, Slide, Typography } from "@mui/material";

import Image from "../../assets/images/danielbw.png";
import { IsMobile, IsNotMobile, pxToRem, useWidth } from "../../utils";
import { HeaderTitle, SocialIcons } from "./components";

type THeader = {
	selectedOption: string;
};

export const Header = ({ selectedOption }: THeader) => {
	const width = useWidth();
	const containerRef = useRef(null);

	const imageSize = () => {
		if (width === "xs") return pxToRem(80);
		if (width === "sm") return pxToRem(100);
		if (width === "md") return pxToRem(120);
		if (width === "lg") return pxToRem(140);
		return pxToRem(160);
	};

	return (
		<Box
			ref={containerRef}
			sx={{
				display: "flex",
				gap: pxToRem(16),
				overflow: "hidden",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
				padding: pxToRem(IsMobile() ? 8 : 32),
			}}
		>
			<Box sx={{ display: "flex", justifyContent: "center", gap: pxToRem(IsMobile() ? 15 : 30) }}>
				<Fade in timeout={3000}>
					<Box component="img" src={Image} alt="Daniel Padua" style={{ width: imageSize() }} />
				</Fade>

				<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: pxToRem(8) }}>
					<HeaderTitle selectedOption={selectedOption} />

					<Slide in direction="left" timeout={2000}>
						<Typography
							color="#808ca4"
							sx={{ maxWidth: IsMobile() ? pxToRem(150) : pxToRem(300), my: pxToRem(IsMobile() ? 4 : 8) }}
							variant={"merriweather-footnote-regular"}
						>
							Um engenheiro de software apaixonado por tecnologia, música, desenvolvimento pessoal e diversas outras coisas. Vamos trocar uma ideia?
							Entre em contato clicando nas minhas redes sociais abaixo! (Recomendo o Instagram)
						</Typography>
					</Slide>

					{IsNotMobile() && <SocialIcons containerRef={containerRef} />}
				</Box>
			</Box>

			{IsMobile() && <SocialIcons containerRef={containerRef} />}
		</Box>
	);
};
