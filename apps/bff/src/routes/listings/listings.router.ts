import express, { Request, Response } from 'express';
import * as ListingsService from './listings.service';

export const listingsRouter = express.Router();

// GET: /listings
listingsRouter.get('/', async (req: Request, res: Response) => {
  const { query } = req;
  try {
    const listings = await ListingsService.getAllListings(query);
    return res.status(200).json(listings);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});
