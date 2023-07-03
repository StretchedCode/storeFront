import React from 'react';
import './stylesheets/App.scss';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./components/accordion"
import { useAppSelector, useAppDispatch } from './app/hooks';
import {Button, buttonVariants} from "./components/button"
import { AspectRatio } from './components/aspectratio';
import { Input } from './components/input';
import { useState } from 'react';
import { fetchPokemon } from './features/pokemonSlice';

function App() {
  const [searchField, setSearchField] = useState("")
  const pokemonImage = useAppSelector((state) => state.pokemon.imgSrc)
  const pokemonName = useAppSelector((state) => state.pokemon.name)

  const dispatch = useAppDispatch()

  const handleSearchChange = (e: any) => {
    setSearchField(e.target.value)
  }

  console.log(searchField)

  return (
    <div className="flex justify-center h-[100vh] items-center">
        <div className='flex flex-col gap-5'>
          <AspectRatio ratio= {16 / 9} className="flex bg-slate-100 rounded-sm justify-center">
            <img src={pokemonImage} className="align-middle"></img>
          </AspectRatio>
          <div className="flex gap-2">
            <Input placeholder='Enter a pokemon...' value={searchField} onChange={handleSearchChange}></Input>
            <Button className="bg-red-500 hover:bg-red-800" onClick={() => dispatch(fetchPokemon(searchField))}>Submit</Button>
          </div>
        </div>
    </div>
  );
}

export default App;
