'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = require('mongoose');
const helpers_1 = require('../helpers');
const isValidId = (req, res, next) => {
  const { orderId } = req.params;
  if (!(0, mongoose_1.isValidObjectId)(orderId)) {
    next((0, helpers_1.HttpError)(400, `${orderId} is not valid id`));
  }
  next();
};
exports.default = isValidId;
//# sourceMappingURL=isValidId.js.map
