import { getShippingShips } from "./database.js";
import { getHaulingShips } from "./dockslist.js";


export const HaulerList = () => {
	const haulers = getHaulingShips();
	let haulersHTML = "<ul>";

	for (const hauler of haulers) {
		haulersHTML += `
        <li data-type="haulers" 
        data-hauler-id="${hauler.id}"
        >${hauler.id}
        </li>`;
	}

	haulersHTML += "</ul>";

	return haulersHTML;
};

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if (itemClicked.dataset.type === "hauler") {
            const haulerId = itemClicked.dataset.haulerId;
            const ships = getShippingShips()

            for (let i = 0; i < ships.length; i++) {
                if (ships[i].haulerId === haulerId) {
                    window.alert()
                }
            }
        }
    }
)
