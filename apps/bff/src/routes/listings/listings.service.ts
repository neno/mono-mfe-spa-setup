import { db } from '../../utils/db';
import { ParsedUrlQuery } from 'querystring';

type FilterType = {
  [key: string]: {
    in?: string | string[] | undefined;
    gte?: number;
    lte?: number;
  };
};

function getFilter(query: any): FilterType {
  const filter: FilterType = {};
  const { suburb, priceMin, priceMax, amenities, accommodatesMin, accommodatesMax, scoreMin, scoreMax } = query;

  if (suburb) {
    filter['address_suburb'] = {
      in: suburb,
    };
  }
  if (amenities) {
    filter['amenities'] = {
      in: amenities,
    };
  }
  if (priceMin) {
    filter['price'] = {
      gte: Number(priceMin),
    };
  }
  if (priceMax) {
    filter['price'] = {
      lte: Number(priceMax),
    };
  }
  if (accommodatesMin) {
    filter['accommodates'] = {
      gte: Number(accommodatesMin),
    };
  }
  if (accommodatesMax) {
    filter['accommodates'] = {
      lte: Number(accommodatesMax),
    };
  }
  if (scoreMin) {
    filter['review_scores_rating'] = {
      gte: Number(scoreMin),
    };
  }
  if (scoreMax) {
    filter['review_scores_rating'] = {
      lte: Number(scoreMax),
    };
  }

  return filter;
}


export const getAllListings = async (query: ParsedUrlQuery) => {
  const filter: FilterType = getFilter(query);

  console.log(filter);

  return db.listingsAndReviews.findMany({
    where: filter,
    take: 10,
  });
};
