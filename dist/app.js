'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const cors_1 = __importDefault(require('cors'));
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const api_1 = require('./routes/api');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use('/api/archive', api_1.archiveRouter);
app.use('/api/orders', api_1.ordersRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
const errorHandler = (err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
};
app.use(errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map
