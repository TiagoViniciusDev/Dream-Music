import { createContext, useState, useEffect } from "react";

export const DreamMusicContext = createContext()

export const DreamMusicProvider = ({children}) => {

    //AlbumData //Default
    const [albumData, setAlbumData] = useState({
        id: 528330501,
        img: "https://e-cdns-images.dzcdn.net/images/cover/247b228179aea3b083eef43522b78b45/500x500-000000-80-0-0.jpg"        ,
        title: "Thunder",
        track:"https://cdns-preview-f.dzcdn.net/stream/c-feaedd2bba31907712980c795aa395dc-6.mp3"
    })

    //Pegando altura do Header
    const [headerHeigth, setHeaderHeigth] = useState()

    //Pesquisa
    const [searchText, setSearchText] = useState()

    //FavMusics
    const [favHidden, setFavHidden] = useState(true)
    const [favMusics, setFavMusics] = useState([])

    //Pegando dados armazenados previamente no localStorage
    useEffect(() => {
        setFavMusics(JSON.parse(localStorage.getItem('favData')))
    },[])


    const value = {
        albumData, 
        setAlbumData,

        headerHeigth,
        setHeaderHeigth,

        searchText, 
        setSearchText,

        favHidden, 
        setFavHidden,
        favMusics,
        setFavMusics
    }

    

    return(
        <DreamMusicContext.Provider value={value}>{children}</DreamMusicContext.Provider>
    )
}


