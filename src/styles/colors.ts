export const colors = (theme?: string) => {
	let primary = "";
	let backgroundMenu = "";
	const background = "#000";

	switch (theme) {
		case "CODE":
			primary = "#0e8501";
			backgroundMenu = "rgba(14,133,1,0.25)";
			break;

		case "MUSIC":
			primary = "#F9C200";
			backgroundMenu = "rgba(255,214,0,0.25)";
			break;

		default:
			backgroundMenu = "rgba(150,51,237,0.25)";
			primary = "#9633ed";
			break;
	}

	return { primary, background, backgroundMenu };
};
