import { Button } from './Button';
import '../styles/sidebar.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onGenreClick: (genreId: number) => void;
}

export function SideBar({genres, selectedGenreId, onGenreClick}: SideBarProps) {
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onGenreClick(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}