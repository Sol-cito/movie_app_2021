import axios from 'axios';
import React from 'react';
import Movie from './Movie';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    console.log("겟 무비 실행")
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies })
    console.log(movies)
    this.setState({ isLoading: false })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const {isLoading, movies} = this.state
    return (
      <div> {this.state.isLoading ? "로딩중" :
        movies.map((movie) => {
          return (<Movie 
              key = {movie.id}
              id = {movie.id
              }
              rating = {movie.rating}
              runtime = {movie.runtime}
              summary = {movie.summary}
              title = {movie.title}
              poster = {movie.medium_cover_image}
          />)
        })} </div>
    )
  }

  // componentDidUpdate() {
  //   console.log("렌더링 업데이트")
  //   console.log(this.state.movies)
  // }
}

export default App; // export 명령어로 다른 파일에서 App component를 사용할 수 있게 됨.
