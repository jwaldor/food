import { Router } from 'express';
import { SpaceListingController } from '../controllers/SpaceListingController';

const router = Router();
const controller = new SpaceListingController();

router.get('/space-listings', controller.getAllSpaceListings);
router.get('/space-listings/:id', controller.getSpaceListingById);
router.post('/space-listings', controller.createSpaceListing);
router.put('/space-listings/:id', controller.updateSpaceListing);
router.delete('/space-listings/:id', controller.deleteSpaceListing);

export default router;