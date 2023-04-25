import { useListings } from '@myorg/store';
import { Gallery, ImageCard } from '@myorg/ui';

export const Listing = () => {
  const { listingsData } = useListings();

  return (
    <div>
      {listingsData && (
        <Gallery>
          {listingsData.map((listing: any) => (
            <ImageCard
              key={listing.id}
              title={listing.name}
              poster_path={listing.picture_url}
            />
          ))}
        </Gallery>
      )}
    </div>
  );
};

export default Listing;
