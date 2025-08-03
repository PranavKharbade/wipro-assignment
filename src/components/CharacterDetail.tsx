import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../api/rickAndMortyAPI';
import { useParams, Link } from '@tanstack/react-router';
import { Character } from '../types';

const CharacterDetail = () => {
  const { id } = useParams({ from: '/character/$id' });
  const { data, isLoading, error } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading character</div>;
  if (!data) return <div className="error">Character not found</div>;

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Characters</Link>
      <div className="character-detail">
        <h2>{data.name}</h2>
        <img src={data.image} alt={data.name} className="character-image" />
        <p><strong>Status:</strong> {data.status}</p>
        <p><strong>Species:</strong> {data.species}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
