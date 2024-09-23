import { Request, Response } from 'express';
import { SpaceListingService } from '../services/SpaceListing/service';

const spaceListingService = new SpaceListingService();

export class SpaceListingController {
    async getAllSpaceListings(req: Request, res: Response): Promise<void> {
        const listings = await spaceListingService.getAllSpaceListings();
        res.json(listings);
    }

    async getSpaceListingById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const listing = await spaceListingService.getSpaceListingById(id);
        res.json(listing);
    }

    async createSpaceListing(req: Request, res: Response): Promise<void> {
        const newListing = req.body;
        const createdListing = await spaceListingService.createSpaceListing(newListing);
        res.json(createdListing);
    }

    async updateSpaceListing(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const updatedListing = req.body;
        const updated = await spaceListingService.updateSpaceListing(id, updatedListing);
        res.json(updated);
    }

    async deleteSpaceListing(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const deleted = await spaceListingService.deleteSpaceListing(id);
        res.json(deleted);
    }
}