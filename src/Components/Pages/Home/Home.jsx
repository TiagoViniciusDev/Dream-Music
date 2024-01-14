import './Home.css'

import AlbumsContainer from '../../AlbumsContainer/AlbumsContainer'

function Home() {

  return (
    <div className='Home'>
        <div className='banner'>
          <div className='container'>
            <h1>Suas músicas em um só lugar</h1>
          </div>
        </div>
        <div className='container'>
          <div className='bestAlbum'>
            <h2>Imagine Dragons</h2>
            <AlbumsContainer searchAlbum="Imagine Dragons"/>
          </div>
          <div className='bestAlbum'>
            <h2>Eminem</h2>
            <AlbumsContainer searchAlbum="Eminem"/>
          </div>
          <div className='bestAlbum'>
            <h2>Player Tauz</h2>
            <AlbumsContainer searchAlbum="Tauz"/>
          </div>
        </div>
    </div>
  )
}

export default Home