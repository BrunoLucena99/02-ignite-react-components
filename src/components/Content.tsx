import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
import { Header } from "./Header";

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  genreTitle: string;
  movies: MovieProps[];
}


export function Content({genreTitle, movies}: ContentProps) {
  return (
    <div className="container">
      <Header title={genreTitle} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}