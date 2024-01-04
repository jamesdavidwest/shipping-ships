import { getHaulingShips, getDocks, getShippingShips } from "./database"
import { DockList } from "./dockslist"
import { HaulerList } from "./haulerslist"
import { ShipsList } from "./shipslist"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--row
        ${ HaulerList() }
    </section>
    <section class="detail--row list details__ships">
        <h2>Shipping Ships</h2>
        ${ ShipsList() }
    </section>
    <section class="detail--ros list details__ships">
        <h2>Docks</h2>
        ${ DocksList() }
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`

mainContainer.innerHTML = applicationHTML
