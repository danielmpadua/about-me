export const colors = (theme?: string) => {
	const background = "#000";

	let primary = "";

	switch (theme) {
		case "CODE":
			primary = "#0e8501";
			break;

		case "MUSIC":
			primary = "#F9C200";
			break;

		default:
			primary = "#9633ed";
			break;
	}

	return { primary, background };
};
