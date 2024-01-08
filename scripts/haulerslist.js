import { getShippingShips, getHaulingShips } from "./database.js";

export const HaulerList = () => {
	const haulers = getHaulingShips();
	let haulersHTML = "<ul>";

	for (const hauler of haulers) {
		haulersHTML += `
        <li data-type="hauler" 
        data-hauler-id="${hauler.id}"
        >${hauler.name}
        </li>`;
	}

	haulersHTML += "</ul>";

	return haulersHTML;
};

document.addEventListener(
	"click",
	(clickEvent) => {
		const itemClicked = clickEvent.target

		if (itemClicked.dataset.type === "hauler") {
			const haulerId = parseInt(itemClicked.dataset.haulerId)

			let shipCounter = 0            

			const shippingShips = getShippingShips()

			for (const ship of shippingShips) {
                if (ship.haulerIds.includes(haulerId)) {
					shipCounter++
                    
				}
			}

			window.alert(`This hauler is carrying ${shipCounter} shipping ships.`)
		}		
	}
)
