import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../Constants/Constants'
import './Banner.css'
import axios from '../../Axios'
function Banner() {
  const [movie,setMovie] = useState(null)
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random()*response.data.results.length)
      const selectedMovie = response.data.results[randomIndex]
      const title = selectedMovie.title || selectedMovie.name || selectedMovie.original_name;
      selectedMovie.title = title;
      setMovie(selectedMovie)
      console.log(selectedMovie)
    })
  },[])
  return (
    <div className='banner'style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>+ My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
