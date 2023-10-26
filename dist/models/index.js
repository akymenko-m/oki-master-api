'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderModel = exports.OrderArchiveModel = void 0;
var archived_order_1 = require('./archived-order');
Object.defineProperty(exports, 'OrderArchiveModel', {
  enumerable: true,
  get: function () {
    return __importDefault(archived_order_1).default;
  },
});
var order_1 = require('./order');
Object.defineProperty(exports, 'OrderModel', {
  enumerable: true,
  get: function () {
    return __importDefault(order_1).default;
  },
});
//# sourceMappingURL=index.js.map
