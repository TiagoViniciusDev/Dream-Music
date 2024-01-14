import './SearchPage.css'

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import apiSearch from '../../../api/apiSearch';

import Loading from '../../Loading/Loading';

//context
import { useContext } from 'react';
import { DreamMusicContext } from '../../../context/DreamMusicApi';

function SearchPage() {

  const {setAlbumData, searchText} = useContext(DreamMusicContext)
  const [searchPageData, setSearchPageData] = useState()

  async function LoadData(){ //Função que puxa os dados da api
    try{
        const resposta = apiSearch.get(searchText)
        setSearchPageData((await resposta).data.data)
    } 
    catch {
        console.log("ERRORRR")
    }
  } 

  useEffect(() => {
    LoadData()
  },[searchText])

  function sendAlbumData(album){
    setAlbumData({
      id: album.album.id,
      title: album.title,
      img: album.album.cover_big,
      track: album.preview
    })
  }  

  return (
    <div className='SearchPage container'>
        <h2>Resultados para: <span>{searchText}</span></h2>
        <div className='results'>
          {searchPageData !== undefined ? 
                searchPageData.map((album) => (
                    <Link to={`/${album.title}`} key={album.id} className="album" onClick={() => sendAlbumData(album)}>
                        <img src={album.album.cover_big} />
                        <p>{album.title.substring(0,30)}</p>
                    </Link>
                ))
            : <Loading />}
        </div>
    </div>
  )
}

export default SearchPage