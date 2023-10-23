import express from 'express';
import { isValidId, validateBody } from 'middlewares';
import { OrderArchiveModel } from 'models';
import archiveCtrl from '../../controllers/archive';

const router = express.Router();

router.get('/', archiveCtrl.getAllOrders);
router.get('/search/', archiveCtrl.getByQuery);
router.post('/', validateBody(OrderArchiveModel), archiveCtrl.addToArchive);
router.delete('/:orderId', isValidId, archiveCtrl.removeFromArchive);

export default router;
