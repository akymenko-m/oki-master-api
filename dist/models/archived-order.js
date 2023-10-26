'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = require('mongoose');
const schema = new mongoose_1.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    repairType: { type: String, required: true },
    price: { type: Number, required: true },
    completeSet: { type: String },
    comment: { type: String },
    status: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
const OrderArchiveModel = (0, mongoose_1.model)('archive-order', schema);
exports.default = OrderArchiveModel;
//# sourceMappingURL=archived-order.js.map
