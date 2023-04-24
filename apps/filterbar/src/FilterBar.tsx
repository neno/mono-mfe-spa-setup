import { useSearchQuery } from '@myorg/store';
import { ListingFilterFields } from '@myorg/ui';

const sububrs = [
  'Brooklyn',
  'Queens',
  'Manhattan',
  'Williamsburg',
  'East Village',
];

export const FilterBar = () => {
  const [searchQuery, setSearchQuery] = useSearchQuery();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let filters = [];
    const formData = new FormData(e.currentTarget);
    for (const [key, val] of formData.entries()) {
      if (val) {
        filters.push(`${key}=${val}`);
      }
    }
    setSearchQuery(filters.join('&'));
  };
  return (
    <div>
      <h2>FilterBar {searchQuery}</h2>
      <form onSubmit={handleSubmit}>
        <ListingFilterFields />
      </form>
    </div>
  );
};

export default FilterBar;
