import { Schema, model, InferSchemaType } from 'mongoose';

const schema = new Schema(
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

type OrderArchive = InferSchemaType<typeof schema>;
const OrderArchiveModel = model('archive-order', schema);

export default OrderArchiveModel;
