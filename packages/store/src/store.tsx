import { atom, useAtom } from 'jotai';

export const searchQueryAtom = atom('');

export const useSearchQuery = () => useAtom(searchQueryAtom);

export default useSearchQuery;
