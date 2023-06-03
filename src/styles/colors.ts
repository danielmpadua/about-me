export const colors = (theme?: string) => {
	const background = "#000";

	let primary = "";
	let backgroundMenu = "";

	switch (theme) {
		case "CODE":
			primary = "#0e8501";
			backgroundMenu = "rgba(14,133,1,0.25)";
			break;

		case "MUSIC":
			primary = "#F9C200";
			backgroundMenu = "rgba(249,194,0,0.25)";
			break;

		default:
			backgroundMenu = "rgba(150,51,237,0.25)";
			primary = "#9633ed";
			break;
	}

	return { primary, background, backgroundMenu };
};
