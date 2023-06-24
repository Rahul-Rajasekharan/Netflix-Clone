import React, { useState } from 'react'
import './RowPoster.css'
import axios from '../../Axios'
import {API_KEY, imageUrl} from '../Constants/Constants'
import Youtube from 'react-youtube'
function RowPoster(props) {
  const[movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
  }).catch(err=>{
    console.log(err)
  })
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const handleMovie = (movieId)=>{
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('not available');
      }
    })
  }
  return (
    <div className='row'>
        <h2 className='Category'>{props.title}</h2>
        <div className='posters'> 
          {movies.map((movies)=>
            <img onClick={()=>handleMovie(movies.id)} className={props.smallPoster ? 'poster_small_image' : 'poster_image'} src={`${imageUrl+movies.poster_path}`} alt="poster" />
          )}   
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPoster
