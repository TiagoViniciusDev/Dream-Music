import Loading from '../Loading/Loading'
import './AlbumsContainer.css'

import {IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";

import { Link } from 'react-router-dom';

//context
import { useContext, useRef } from 'react';
import { DreamMusicContext } from '../../context/DreamMusicApi';

import { useState, useEffect } from 'react';
import apiSearch from '../../api/apiSearch';

function AlbumsContainer({searchAlbum}){

  const {setAlbumData} = useContext(DreamMusicContext)

  //Requisição dos dados a api
  const [homeData, setHomeData] = useState()

  async function LoadData(){ //Função que puxa os dados da api
    try{
        const resposta = apiSearch.get(searchAlbum)
        setHomeData((await resposta).data.data)
    } 
    catch {
        console.log("ERRORRR")
    }
  } 

  useEffect(() => {
    LoadData()
  },[])

  //console.log(homeData)

  //Funcionalidade de scroll
  var scroll = 0
  const slide = useRef()
  const LeftArrow = useRef()

  function scrollRight(){
    scroll +=400
    slide.current.scrollLeft = scroll
    LeftArrow.current.style.display = 'block' //Exibindo LeftArrow
  }

  function scrollLeft(){
    if(scroll <= 400){
      scroll = 0;
      slide.current.scrollLeft = 0
      LeftArrow.current.style.display = 'none' //Ocutando LeftArrow
    } else{
      scroll -= 400
      slide.current.scrollLeft = scroll
    }
  }

  //Enviando informações para a página do album
  function sendAlbumData(album){
    setAlbumData({
      id: album.album.id,
      title: album.title,
      img: album.album.cover_big,
      track: album.preview
    })
  }

  //console.log(albumData)

  return (
    <div className="AlbumsContainer">
          <div className='slide' id='ALBUN-SLIDE' ref={slide}>
            {homeData !== undefined ? 
              homeData.map((album) => (
                  <Link to={`/${album.title}`} key={album.id} className="album" onClick={() => sendAlbumData(album)}>
                      <img src={album.album.cover_big} />
                      <p>{album.title}</p>
                  </Link>
              ))
          : <Loading />}
          </div>
          <div className='arrows'>
              <div className='leftArrow' ref={LeftArrow}>
                <IoIosArrowDropleftCircle onClick={scrollLeft} id='LEFT-ARROW'/>
              </div>
              <div className='rigthArrow'>
                <IoIosArrowDroprightCircle onClick={scrollRight} id='RIGHT-ARROW'/>
              </div>
          </div>
    </div>
  )
}

export default AlbumsContainer