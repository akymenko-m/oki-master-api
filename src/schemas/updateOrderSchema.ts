import Joi from 'joi';

const updateOrderSchema = Joi.object({
  date: Joi.date().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  repairType: Joi.string().required(),
  price: Joi.number().required(),
  completeSet: Joi.string(),
  comment: Joi.string(),
}).min(1);

export default updateOrderSchema;
