// Shop Selectors
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParm => 
    createSelector(
        [selectCollections],
        collections => 
          collections[collectionUrlParm]
    );
