import { getDocks, getHaulingShips } from "./database.js";

let docks = getDocks();

export const DocksList = () => {
	
	let docksHTML = "<ul>";

	for (const dock of docks)

		docksHTML += `
		<li data-type="docks"
		data-dock-id="${dock.id}"
		>${dock.location} can hold ${dock.volume} million tons of cargo.
		</li>
		`;

	docksHTML += "</ul>";

	return docksHTML;
};

document.addEventListener(
	"click",
	(clickEvent) => {
		const itemClicked = clickEvent.target

		if (itemClicked.dataset.type === "docks") {
			
			const dockId = parseInt(itemClicked.dataset.dockId, 10)
			//console.log(dockId)
			const dock = docks.find((d) => d.id === dockId)
			//console.log(dock)
			const haulersDocked = dock.haulerIds

			//console.log(haulersDocked)
			if (haulersDocked.length === 0) {
				window.alert(`The ${dock.location} dock is currently unloading nothing.`)
			} else if (haulersDocked.length === 1) {
				const haulerName = getHaulingShips().find((h) => h.id === haulersDocked[0]).name;
				window.alert(`The ${dock.location} dock is currently unloading ${haulerName}.`)
			} else {
				const haulerNames = haulersDocked.map(id => getHaulingShips().find((h) => h.id === id).name).join(', ')
				window.alert(`The ${dock.location} is currently unloading ${haulerNames}.`)
			}
		}
	}
)