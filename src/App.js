import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";

function App() {

  const [searchData, setSearchData]=useState({})
  const [lyric, setLyric]=useState('')
  const [info, setInfo]=useState('')

  useEffect(()=>{
    if(Object.keys(searchData).length!==0){

      const apiRequestSong=async ()=>{
        const {artist,song}=searchData
        console.log(artist, song)
        const urlSong=`https://api.lyrics.ovh/v1/${artist}/${song}`
        const urlInfo=`https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
        const [apiRequestSong, apiRequestInfo]= await Promise.all([
          axios.get(urlSong),
          axios.get(urlInfo)
        ])
        setLyric(apiRequestSong.data.lyrics)
        setInfo(apiRequestInfo.data.artists[0])
      }
      apiRequestSong()
    }

  }, [searchData] )

  return (
    <>
      <Form setSearchData={setSearchData}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info}/>
          </div>
          <div className="col-md-6">
            <Song lyric={lyric}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
