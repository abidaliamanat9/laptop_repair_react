export const addShopToLS = (shop) => {
    const newShops = [...getShopsFromLS(), shop]
    localStorage.setItem('shops', JSON.stringify(newShops))
}

export const getShopsFromLS = () => {
    if (!localStorage.getItem('shops')) {
        return []
    }
    return JSON.parse(localStorage.getItem('shops'))
}
export const addLocationToLS = (location) => {
    const newLocations = [...getLocationsFromLS(), location]
    localStorage.setItem('locations', JSON.stringify(newLocations))
}

export const getLocationsFromLS = () => {
    if (!localStorage.getItem('locations')) {
        return []
    }
    return JSON.parse(localStorage.getItem('locations'))
}