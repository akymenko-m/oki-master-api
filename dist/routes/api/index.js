'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ordersRouter = exports.archiveRouter = void 0;
var archive_1 = require('./archive');
Object.defineProperty(exports, 'archiveRouter', {
  enumerable: true,
  get: function () {
    return __importDefault(archive_1).default;
  },
});
var orders_1 = require('./orders');
Object.defineProperty(exports, 'ordersRouter', {
  enumerable: true,
  get: function () {
    return __importDefault(orders_1).default;
  },
});
//# sourceMappingURL=index.js.map
