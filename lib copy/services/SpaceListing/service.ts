import { SpaceListing } from '@prisma/client';
import { ISpaceListingService } from './interface';

export class SpaceListingService implements ISpaceListingService {
    async getAllSpaceListings(): Promise<SpaceListing[]> {
        // Implementation here
        return [];
    }

    async getSpaceListingById(spaceListingId: string): Promise<SpaceListing | null> {
        // Implementation here
        return null;
    }

    async createSpaceListing(newSpaceListing: SpaceListing): Promise<SpaceListing> {
        // Implementation here
        
        return {} as SpaceListing;
    }

    async updateSpaceListing(updatedSpaceListingId: string, updatedSpaceListing: SpaceListingInput): Promise<SpaceListing> {
        // Implementation here
        return {} as SpaceListing;
    }

    async deleteSpaceListing(spaceListingId: string): Promise<SpaceListing> {
        // Implementation here
        return {} as SpaceListing;
    }
}