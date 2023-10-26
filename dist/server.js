'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const app_1 = __importDefault(require('./app'));
const { DB_HOST, PORT } = process.env;
if (!DB_HOST) {
  console.error('DB_HOST is not defined. Please set the environment variable.');
  process.exit(1);
}
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app_1.default.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
//# sourceMappingURL=server.js.map
