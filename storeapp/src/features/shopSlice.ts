import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { productType } from '../database/db';

interface productShop extends productType{
    count: number
}

interface shopState{
    products: productShop[],
    compProducts: string[],
    totalProducts: number
}

const initialState: shopState = {
    products: [],
    compProducts: [],
    totalProducts: 0
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

            state.totalProducts ++;
        },
        removeProduct: (state, action:PayloadAction<productType>) => {
            state.totalProducts --;

            const dbIndex = state.compProducts.indexOf(action.payload.name)

            if (state.products[dbIndex].count > 1) {
                state.products[dbIndex].count --;
            }
            else{
                state.products.splice(dbIndex, 1)
                state.compProducts.splice(dbIndex, 1)
            }
        }
    }
})

export default shopSlice.reducer
export const {addProduct, removeProduct} = shopSlice.actions