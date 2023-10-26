'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const middlewares_1 = require('../../middlewares');
const models_1 = require('../../models');
const archive_1 = __importDefault(require('../../controllers/archive'));
const router = express_1.default.Router();
router.get('/', archive_1.default.getAllOrders);
router.get('/search/', archive_1.default.getByQuery);
router.post('/', (0, middlewares_1.validateBody)(models_1.OrderArchiveModel), archive_1.default.addToArchive);
router.delete('/:orderId', middlewares_1.isValidId, archive_1.default.removeFromArchive);
exports.default = router;
//# sourceMappingURL=archive.js.map
