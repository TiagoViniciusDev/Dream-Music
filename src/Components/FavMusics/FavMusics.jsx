import './FavMusics.css'

import { IoIosClose } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";

//context
import { useContext } from 'react';
import { DreamMusicContext } from '../../context/DreamMusicApi';

function FavMusics() {

  const {headerHeigth, favHidden, setFavHidden, favMusics, setFavMusics} = useContext(DreamMusicContext)

  function removeMusic(removeID){
    const newFavMusics =  favMusics.filter(function(e){
        return e.id !== removeID
    })
    setFavMusics(newFavMusics)
  }

  return (
    <div className='FavMusics'>
        <div className={`favMusics ${favHidden ? "rightHidden" : ""}`}>
            <div className='favHeader' style={{height: headerHeigth}}>
                <h2>Minhas músicas favoritas</h2>
                <button title='fechar' onClick={() => {setFavHidden(true)}}>
                    <FaWindowClose />
                </button>
            </div>
            {favMusics.length !== 0 ? 
                favMusics.map((track) => (
                <div className='tracks container' key={track.id}>
                    <p>{track.title}</p>
                    <div className='trackContainer'>
                        <audio controls>
                            <source src="track.ogg" type="audio/ogg" />
                            <source src={track.preview} type='audio/mp3' />
                            Your browser does not support the audio element.
                        </audio>
                        <IoIosClose title='Remover' onClick={() => {removeMusic(track.id)}}/>
                    </div>
                </div>
                ))
              : (
                <div className='empty container'>
                    <p>Você não possui nenhuma música adicionada</p>
                    <p>Para adicionar uma música aos favoritos clique no icone de coração ao lado da mesma</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default FavMusics