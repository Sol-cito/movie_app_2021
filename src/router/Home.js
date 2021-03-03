import axios from 'axios';
import React from 'react';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

  state = {
    isLoading: true,
    receivedMovies: []
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
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {this.state.isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(receivedMovies => (
                <Movie
                  key={receivedMovies.id}
                  id={receivedMovies.id}
                  rating={receivedMovies.rating}
                  runtime={receivedMovies.runtime}
                  summary={receivedMovies.summary}
                  title={receivedMovies.title}
                  poster={receivedMovies.medium_cover_image}
                  genres={receivedMovies.genres}
                />
              ))}
              </div>
              )} 
            </section>
          )
        }

  // componentDidUpdate() {
          //   console.log("렌더링 업데이트")
          //   console.log(this.state.movies)
          // }
      }

export default Home; // export 명령어로 다른 파일에서 App component를 사용할 수 있게 됨.
