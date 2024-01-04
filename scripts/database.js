



const database = {
    dock: [
		{ id: 1, location: "Shanghai, China", volume: "43.5" },
		{ id: 2, location: "Busan, South Korea", volume: "21.6" },
		{ id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
		{ id: 4, location: "Antwerp, Belgium", volume: "12.04" },
	],
    hauler: [
        { id: 1, name: "Clydesdale", cargoShipsId: 1,dockId: 1},
        { id: 2, name: "Haflinger", cargoShipsId: 2, dockId: 2},
        { id: 3, name: "Dolehest", cargoShipsId: 3, dockId: 3},
        { id: 4, name: "Breton", cargoShipsId: 4, dockId: 4}
    ],
    shippingShip: [
        { id: 1, name: "Ship Yourself", hauler:1},
        { id: 2, name: "Oh Ship", hauler: 2},
        { id: 3, name: "Look At This Ship", hauler: 3},
        { id: 4, name: "Tastes Like Ship", hauler: 4}
    ]
}

export const getHaulingShips = () => {
    return database.haulers.map((hauler) => ({ ...hauler }))
};

export const getDocks = () => {
	return database.docks.map((dock) => ({ ...dock }));
};

export const getShippingShips = () => {
    return database.shippingShips.map((ship) => ({ ...ship }))
}