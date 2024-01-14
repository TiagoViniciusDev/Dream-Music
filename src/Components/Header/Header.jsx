import './Header.css'
import { FaStar, FaSearch } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';

//context
import { useContext, useEffect, useState } from 'react';
import { DreamMusicContext } from '../../context/DreamMusicApi';
import FavMusics from '../FavMusics/FavMusics';

function Header() {

  const {setHeaderHeigth, setSearchText, setFavHidden} = useContext(DreamMusicContext)

  //Pegando altura do header
  useEffect(() => {
    var height = document.getElementById('HEADER').clientHeight
    setHeaderHeigth(height)
  }, [])

  //submit
  
  const [formText, setFormText] = useState()
  const navigate = useNavigate()

  function submitSearch(e){
    e.preventDefault()
    setSearchText(formText)
    navigate(`/${formText}`)
  }

  return (
    <div className="Header" id='HEADER'>
        <div className="container">
            <Link to="/" className='logo'>
                <h2>Dream Music</h2>
            </Link>
            <div className='headerRight'>
                <form className='search' onSubmit={submitSearch}>
                    <input type="text" placeholder='Buscar' required minLength={3} onChange={(e) => setFormText(e.target.value)}/>
                    <button type='submit'>
                        <FaSearch />
                    </button>
                </form>
                <div className='favorites' title='favoritas' onClick={() => {setFavHidden(false)}}>
                    <FaStar />
                </div>
            </div>
        </div>
        <FavMusics />
    </div>
  )
}

export default Header