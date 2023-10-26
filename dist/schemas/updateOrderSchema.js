'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const joi_1 = __importDefault(require('joi'));
const updateOrderSchema = joi_1.default
  .object({
    orderNumber: joi_1.default.string().required(),
    date: joi_1.default.date().required(),
    name: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    repairType: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    completeSet: joi_1.default.string().optional().allow(''),
    comment: joi_1.default.string().optional().allow(''),
    status: joi_1.default.string().required(),
  })
  .min(1);
exports.default = updateOrderSchema;
//# sourceMappingURL=updateOrderSchema.js.map
