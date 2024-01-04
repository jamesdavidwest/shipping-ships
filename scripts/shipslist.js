import { getShippingShips } from "./database.js";


export const ShipsList = () => {
	const ships = getShippingShips();

	let shipsHTML = "<ul>";

	for (const ship of ships) {
		shipsHTML += `
        <li>
            ${ship.id}
        </li>`;
	}

	shipsHTML += "</ul>";

	return shipsHTML;
};