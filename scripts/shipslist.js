import { getShippingShips, getHaulingShips } from "./database.js";

export const CargoShipsList = () => {
	const ships = getShippingShips();
	let shipsHTML = "<ul>";

	for (let i = 0; i < ships.length; i++) {
		const ship = ships[i]

		shipsHTML += `
		<li data-type="ships"
		data-ship-id="${ship.id}"
		> ${ship.name}
		</li>
		`
	}

	shipsHTML += "</ul>"

	return shipsHTML
}
	
document.addEventListener(
	"click",
	(clickEvent) => {
		const itemClicked = clickEvent.target

		if (itemClicked.dataset.type === "ships") {
			const shipId = itemClicked.dataset.shipId
			let foundHauler = { name: "Incorrect"}

			const haulingShips = getHaulingShips()

			for (let i = 0; i < haulingShips.length; i++) {			
				const hauler = haulingShips[i]
				
				if (parseInt(shipId) === hauler.id) {
					foundHauler = hauler
					break;
				}
			}

			const shipName = itemClicked.textContent.trim()

			window.alert(`${shipName} is being hauled by ${foundHauler.name}.`)
		}		
	}
)