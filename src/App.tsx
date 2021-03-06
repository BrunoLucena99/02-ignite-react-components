import { useEffect, useState } from 'react';
import { api } from './services/api';

import './styles/global.scss';

import { GenreResponseProps, SideBar } from './components/SideBar';
import { Content, MovieProps } from './components/Content';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        onGenreClick={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />

      <Content
        movies={movies}
        genreTitle={selectedGenre.title}
      />
    </div>
  )
}