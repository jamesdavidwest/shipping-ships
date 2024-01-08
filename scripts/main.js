import { getHaulingShips, getDocks, getShippingShips } from "./database.js"
import { DocksList } from "./dockslist.js"
import { HaulerList } from "./haulerslist.js"
import { CargoShipsList } from "./shipslist.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--row list details__haulers">
		<h2>Hauler Ships</h2>
        ${ HaulerList() }
    </section>
    <section class="detail--row list details__ships">
        <h2>Shipping Ships</h2>
        ${ CargoShipsList() }
    </section>
    <section class="detail--row list details__docks">
        <h2>Docks</h2>
        ${ DocksList() }
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
