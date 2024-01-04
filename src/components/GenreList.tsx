import useGenres from '../hooks/useGenres';

const GenreList = () => {
    const {data} = useGenres();
  return (
    <li>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </li>

  )
}

export default GenreList;