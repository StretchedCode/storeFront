import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { productType } from '../database/db';

interface productShop extends productType{
    count: number
}

interface shopState{
    products: productShop[],
    compProducts: string[]
}

const initialState: shopState = {
    products: [],
    compProducts: []
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<productType>) => {

            const newProd: productShop = {
                ...action.payload,
                count: 1
            }
            
            const newProdName = newProd.name
            const dbIndex = state.compProducts.indexOf(newProdName)

            if (dbIndex > -1){
                state.products[dbIndex].count += 1
            } else {
                state.compProducts.push(newProdName)
                state.products.push(newProd)
            }
            
        }
    }
})

export default shopSlice.reducer
export const {addProduct} = shopSlice.actions