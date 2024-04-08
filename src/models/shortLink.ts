import { model, models, Schema } from 'mongoose';

const modelName = 'short-link';
const ShortLinkSchema = new Schema({
  name: String,
  target: { type: String, required: true },
  path: { type: String, required: true, index: true, unique: true },
  start: { type: Date, default: Date.now() },
  end: { type: Date, default: null },
  describe: String,
  password: String,
  visit: { type: Number, default: 0, set: (v: number) => v + 1 }
});

export default models[modelName] || model(modelName, ShortLinkSchema);
