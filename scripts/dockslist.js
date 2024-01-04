import { getDocks } from "./dockslist.js";

export const DockList = () => {
	const docks = getDocks();

	let docksHTML = "<ul>";

	for (const dock of docks) {
		docksHTML += `
		<li>
			${dock.id} can hold ${dock.volume} million tons of cargo.
		</li>`;
	}

	docksHTML += "</ul>";

	return docksHTML;
};