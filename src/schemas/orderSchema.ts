import Joi from 'joi';

const orderSchema = Joi.object({
  orderNumber: Joi.string().required(),
  date: Joi.date().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  repairType: Joi.string().required(),
  price: Joi.number().min(1).required(),
  completeSet: Joi.string().optional().allow(''),
  comment: Joi.string().optional().allow(''),
  status: Joi.string().required(),
}).meta({ className: 'Order', unknownType: 'number' });

export default orderSchema;
