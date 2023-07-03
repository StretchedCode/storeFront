import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

interface pokemonState {
    name: string,
    imgSrc: string,
    loading: boolean
}

const initialState: pokemonState = {
    name: "",
    imgSrc: "",
    loading: false
}

const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async(name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    const data = await response.json()

    return data
})


const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.imgSrc = action.payload.sprites.front_default
                state.name = action.payload.name
                state.loading = false
            })
            .addCase(fetchPokemon.rejected, (state) => {
                state.imgSrc = "404 Error"
            })
    }
});

export default pokemonSlice.reducer
export {fetchPokemon}