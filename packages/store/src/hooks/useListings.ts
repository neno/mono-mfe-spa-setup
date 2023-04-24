import useSearchQuery from '../store';
import { useQuery } from '@tanstack/react-query';
import { getListings } from '../api/getListings';

export const useListings = () => {
  const [searchQuery] = useSearchQuery();
  const { data: listingsData } = useQuery(
    ['listings', searchQuery],
    () => getListings(searchQuery)
  );

  return { listingsData };
};
