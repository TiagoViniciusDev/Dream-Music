import './AlbumPage.css'
import {useState, useEffect } from 'react'
import searchAlbum from '../../../api/searchAlbum'
import Loading from '../../Loading/Loading'

import { FaHeart } from "react-icons/fa";

//context
import { useContext } from 'react';
import { DreamMusicContext } from '../../../context/DreamMusicApi';


function AlbumPage() {

    const {albumData, headerHeigth, favMusics, setFavMusics} = useContext(DreamMusicContext)

    const [albumtracks, setAlbumtracks] = useState(undefined)

    async function LoadAlbumPageData(){ //Função que puxa os dados da api
        try{
            const resposta = searchAlbum.get(`${albumData.id}/tracks`)
            setAlbumtracks((await resposta).data.data)
        } 
        catch {
            console.log("ERRORRR")
        }
      } 
    
      useEffect(() => {
        LoadAlbumPageData()
      },[])

      function addToFav(track,e){
        e.target.style.color = "#952dab"
        var newTracks = [...favMusics,
                {
                  id: track.id,
                  title: track.title.substring(0,35),
                  preview: track.preview
                }
        ]

        //Removendo qualquer objeto repetido
        newTracks = newTracks.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        setFavMusics(newTracks)

        //LocalStorage
        localStorage.clear(); //Limpando todo o localStorage
        localStorage.setItem('favData', JSON.stringify(newTracks)) //Armazenando array de objetos no localStorage

      }

  return (
    <div className='AlbumPage container' style={{height: `calc(100vh - ${headerHeigth}px`}}>
        <div className='albumInfo'>
            <img src={albumData.img} alt={albumData.title} />
            <h2>{albumData.title}</h2>
        </div>
        <div className='tracks'>
            {albumtracks !== undefined ?
                albumtracks.map((track) => (
                <div key={track.id}>
                    <p>{track.title.substring(0,35)}</p>
                    <div className='trackContainer'>
                        <audio controls>
                            <source src="track.ogg" type="audio/ogg" />
                            <source src={track.preview} type='audio/mp3' />
                            Your browser does not support the audio element.
                        </audio>
                        <FaHeart title='adicionar aos favoritos' onClick={(e) => {addToFav(track, e)}}/>
                    </div>
                </div> 
                
            )) : (<Loading />)}
        </div>
    </div>
  )
}

export default AlbumPage