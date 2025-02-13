// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1>Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}
export default PrimeVideo
