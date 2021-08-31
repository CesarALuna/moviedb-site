import React, { useState, useEffect } from 'react'
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//components
import HeroImage from './HeroImage'
//hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//image
import NoImage from '../images/no_image.jpg'

const Home = () => {
  const { state, loading, error } = useHomeFetch()
  const randomNumber = Math.floor(Math.random() * 20)
  console.log(randomNumber)

  console.log(state)
  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomNumber].backdrop_path}`}
          title={state.results[randomNumber].original_title}
          text={state.results[randomNumber].overview}
        />
      ) : null}
    </>
  )
}

export default Home
