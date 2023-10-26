'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PER_PAGE = void 0;
const helpers_1 = require('../helpers');
const models_1 = require('../models');
exports.PER_PAGE = 10;
const listOrders = async (req, res, next) => {
  const { page = 1 } = req.query;
  const limit = exports.PER_PAGE * Number(page);
  const total = await models_1.OrderModel.find().sort({ date: 1 });
  const result = await models_1.OrderModel.find().sort({ date: 1 }).skip(0).limit(limit);
  res.json({ total: total.length, orders: result });
};
const getByQuery = async (req, res, next) => {
  const { query } = req.query;
  const queryString = query;
  const regex = new RegExp(queryString, 'i');
  const result = await models_1.OrderModel.find({
    $or: [{ orderNumber: { $regex: regex } }, { phone: { $regex: regex } }],
  }).sort({ date: -1 });
  res.json(result);
};
const getOrder = async (req, res) => {
  const { query } = req.query;
  const queryString = query;
  const result = await models_1.OrderModel.findOne({
    $or: [{ orderNumber: queryString }, { phone: queryString }],
  }).sort({ date: -1 });
  if (!result) {
    throw (0, helpers_1.HttpError)(404, 'Not found');
  }
  res.json(result);
};
const addOrder = async (req, res) => {
  const result = await models_1.OrderModel.create({ ...req.body });
  res.status(201).json(result);
};
const removeOrder = async (req, res) => {
  const { orderId } = req.params;
  const result = await models_1.OrderModel.findByIdAndDelete(orderId);
  if (!result) {
    throw (0, helpers_1.HttpError)(404, 'Not found');
  }
  res.status(200).json(`order ${orderId} deleted`);
};
const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const result = await models_1.OrderModel.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });
  if (!result) {
    throw (0, helpers_1.HttpError)(404, 'Not found');
  }
  res.status(200).json(result);
};
exports.default = {
  listOrders: (0, helpers_1.ctrlWrapper)(listOrders),
  addOrder: (0, helpers_1.ctrlWrapper)(addOrder),
  removeOrder: (0, helpers_1.ctrlWrapper)(removeOrder),
  updateOrder: (0, helpers_1.ctrlWrapper)(updateOrder),
  getByQuery: (0, helpers_1.ctrlWrapper)(getByQuery),
  getOrder: (0, helpers_1.ctrlWrapper)(getOrder),
};
//# sourceMappingURL=orders.js.map
