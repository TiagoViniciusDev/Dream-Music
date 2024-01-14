import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home'
import AlbumPage from './Components/Pages/AlbumPage/AlbumPage'
import SearchPage from './Components/Pages/SearchPage/SearchPage'

//context
import { useContext } from 'react';
import { DreamMusicContext } from '../src/context/DreamMusicApi';

function App() {

  const {albumData, searchText} = useContext(DreamMusicContext)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/Dream-Music' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path={`/Dream-Music/${albumData.title}`} element={<AlbumPage />}/>
            <Route path={`/Dream-Music/${searchText}`} element={<SearchPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
