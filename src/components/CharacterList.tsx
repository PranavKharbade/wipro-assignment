import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/rickAndMortyAPI';
import { useSearch, Link } from '@tanstack/react-router';
import Pagination from './Pagination';
import { Character } from '../types';

const CharacterList = () => {
  const search = useSearch({ from: '/' });
  const page = Number(search.page) || 1;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
    placeholderData: (previousData) => previousData,
  });

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h1 className="header">Rick and Morty Characters</h1>
      <button className="refresh-button" onClick={() => refetch()}>Refresh</button>
      <div className="character-list">
        {data?.results?.map((character: Character) => (
          <Link key={character.id} to={`/character/${character.id}`} className="character-card">
            <div className="character-name">{character.name}</div>
          </Link>
        ))}
      </div>
      {data?.info && <Pagination currentPage={page} totalPages={data.info.pages} />}
    </div>
  );
};

export default CharacterList;
