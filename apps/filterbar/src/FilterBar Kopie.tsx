import { useSearchQuery } from '@myorg/store';
import { CheckBoxGroup } from '@myorg/ui';

const sububrs = [
  'Brooklyn',
  'Queens',
  'Manhattan',
  'Williamsburg',
  'East Village',
];

export const FilterBar2 = () => {
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
        <ol>
          <li>
            <label>
              Price min
              <br />
              <input name='priceMin' type='number' />
            </label>
          </li>
          <li>
            <label>
              Price max
              <br />
              <input name='priceMax' type='number' />
            </label>
          </li>
          <li>
            <label>
              Accommodates min
              <br />
              <input name='accommodatesMin' type='number' />
            </label>
          </li>
          <li>
            <label>
              Accomonodates max
              <br />
              <input name='accommodatesMax' type='number' />
            </label>
          </li>
        </ol>
        <CheckBoxGroup
          title='Choose Suburb'
          items={sububrs.map((sub) => ({ name: sub, value: sub }))}
        />
        <fieldset>
          <legend>Suburbs</legend>
          <ol>
            {sububrs.map((suburb) => (
              <li key={suburb}>
                <label>
                  <input name='suburb' type='checkbox' value={suburb} />
                  {suburb}
                </label>
              </li>
            ))}
          </ol>
        </fieldset>
        <p>
          <button type='submit'>SUBMIT</button>
          <button type='reset'>RESET</button>
        </p>
      </form>
    </div>
  );
};

export default FilterBar2;
