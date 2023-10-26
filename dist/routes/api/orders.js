'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const middlewares_1 = require('../../middlewares');
const schemas_1 = require('../../schemas');
const orders_1 = __importDefault(require('../../controllers/orders'));
const router = express_1.default.Router();
router.get('/', orders_1.default.listOrders);
router.get('/findOne/', orders_1.default.getOrder);
router.get('/search/', orders_1.default.getByQuery);
router.post('/', (0, middlewares_1.validateBody)(schemas_1.orderSchema), orders_1.default.addOrder);
router.delete('/:orderId', middlewares_1.isValidId, orders_1.default.removeOrder);
router.patch(
  '/:orderId',
  middlewares_1.isValidId,
  (0, middlewares_1.validateBody)(schemas_1.updateOrderSchema),
  orders_1.default.updateOrder
);
exports.default = router;
//# sourceMappingURL=orders.js.map
