import { useState } from "react";
import Error from "./Error";
const Form = ({setSearchData}) => {

  const [inputData, setInputData]=useState({
    artist:'',
    song: ''
  })
  const [error, setError]=useState(false)

  const handleInputs=(e)=>{
    setInputData({
      ...inputData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    if(inputData.artist.trim()==='' || inputData.song.trim()===''){
      setError(true)
    }else{
      setError(false)
      setSearchData(inputData)
    }
  }

  return ( 
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit} className="col card text white bg-transparent mb-5 pt-5 pb-2">

            <fieldset>
              <legend className="text-center">Lyric searcher!</legend>
              {error ? <Error message="All the fields must be filled"/>:null}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input 
                      onChange={handleInputs}
                      value={inputData.artist}
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist" 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input 
                      onChange={handleInputs}
                      type="text"
                      value={inputData.song}
                      className="form-control"
                      name="song"
                      placeholder="Song" 
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >
              Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
   );
}
 
export default Form;