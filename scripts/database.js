

const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5", haulerIds: [1, 2, 3] },
        { id: 2, location: "Busan, South Korea", volume: "21.6", haulerIds: [4] },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35", haulerIds: [6, 8] },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04", haulerIds: [6, 7, 8] },
        { id: 5, location: "Singapore", volume: "32.7", haulerIds: [2, 5, 7] },
        { id: 6, location: "Hong Kong, China", volume: "18.9", haulerIds: [5, 6] },
        { id: 7, location: "Dubai, UAE", volume: "9.8", haulerIds: [] },
        { id: 8, location: "Hamburg, Germany", volume: "7.2", haulerIds: [3, 8] }
    ],
    haulers: [
        { id: 1, name: "Clydesdale", dockId: 1 },
        { id: 2, name: "Haflinger", dockId: 5 },
        { id: 3, name: "Dolehest", dockId: 8 },
        { id: 4, name: "Breton", dockId: 2 },
        { id: 5, name: "Mustang", dockId: 6 },
        { id: 6, name: "Thoroughbred", dockId: 4 },
        { id: 7, name: "Shetland", dockId: 7 },
        { id: 8, name: "Appaloosa", dockId: 3 }
    ],
    shippingShips: [
        { id: 1, name: "Ship Yourself", haulerIds: [1, 2, 3] },
        { id: 2, name: "Oh Ship", haulerIds: [2, 4] },
        { id: 3, name: "Look At This Ship", haulerIds: [1, 3, 4, 5] },
        { id: 4, name: "Tastes Like Ship", haulerIds: [4, 6] },
        { id: 5, name: "Ship Happens", haulerIds: [1, 5, 7] },
        { id: 6, name: "Ship It Good", haulerIds: [3, 6, 8] },
        { id: 7, name: "All Aboard the Ship", haulerIds: [2, 4, 7] },
        { id: 8, name: "Ship's Creek", haulerIds: [1, 3, 5, 8] }
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