import Joi from 'joi';

const updateOrderSchema = Joi.object({
  orderNumber: Joi.string().required(),
  date: Joi.date().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  repairType: Joi.string().required(),
  price: Joi.number().required(),
  completeSet: Joi.string().optional().allow(''),
  comment: Joi.string().optional().allow(''),
  status: Joi.string().required(),
}).min(1);

export default updateOrderSchema;
