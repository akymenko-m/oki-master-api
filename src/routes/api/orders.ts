import express from 'express';
import { isValidId, validateBody } from '../../middlewares';
import { orderSchema, updateOrderSchema } from '../../schemas';
import ctrl from '../../controllers/orders';

const router = express.Router();

router.get('/', ctrl.listOrders);
router.get('/findOne/', ctrl.getOrder);
router.get('/search/', ctrl.getByQuery);
router.post('/', validateBody(orderSchema), ctrl.addOrder);
router.delete('/:orderId', isValidId, ctrl.removeOrder);
router.patch('/:orderId', isValidId, validateBody(updateOrderSchema), ctrl.updateOrder);

export default router;
