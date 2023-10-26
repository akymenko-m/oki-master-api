'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const helpers_1 = require('../helpers');
const orders_1 = require('./orders');
const models_1 = require('../models');
const getAllOrders = async (req, res, next) => {
  const { page = 1 } = req.query;
  const limit = orders_1.PER_PAGE * Number(page);
  const total = await models_1.OrderArchiveModel.find().sort({ date: 1 });
  const result = await models_1.OrderArchiveModel.find().sort({ date: 1 }).skip(0).limit(limit);
  res.json({ total: total.length, orders: result });
};
const getByQuery = async (req, res, next) => {
  const { query } = req.query;
  const queryString = query;
  const regex = new RegExp(queryString, 'i');
  const result = await models_1.OrderArchiveModel.find({
    $or: [{ orderNumber: { $regex: regex } }, { phone: { $regex: regex } }],
  }).sort({ date: -1 });
  res.json(result);
};
const addToArchive = async (req, res) => {
  const result = await models_1.OrderArchiveModel.create({ ...req.body });
  res.status(201).json(result);
};
const removeFromArchive = async (req, res) => {
  const { orderId } = req.params;
  const result = await models_1.OrderArchiveModel.findByIdAndDelete(orderId);
  if (!result) {
    throw (0, helpers_1.HttpError)(404, 'Not found');
  }
  res.status(200).json(`order ${orderId} deleted`);
};
exports.default = {
  getAllOrders: (0, helpers_1.ctrlWrapper)(getAllOrders),
  getByQuery: (0, helpers_1.ctrlWrapper)(getByQuery),
  addToArchive: (0, helpers_1.ctrlWrapper)(addToArchive),
  removeFromArchive: (0, helpers_1.ctrlWrapper)(removeFromArchive),
};
//# sourceMappingURL=archive.js.map
