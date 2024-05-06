import { create } from 'zustand'
import { addShopToLS, getShopsFromLS } from './helpers'
import { addLocationToLS, getLocationsFromLS } from './helpers'

export const shopstore = create((set) => ({
    shops: getShopsFromLS(),
    addShop: (shop) => {
        set((state) => ({ shops: [...state.shops, shop] }))
        addShopToLS(shop)
    },
}))

export const locationstore = create((set) => ({
    locations: getLocationsFromLS(),
    addLocation: (location) => {
        set((state) => ({locations: [...state.locations, location]}))
        addLocationToLS(location)
    }
}))