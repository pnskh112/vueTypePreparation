"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index = express_1.default();
index.get('/', (_, res) => {
    res.send('Hello world');
});
index.listen(3000, () => console.log('Server is running'));
//# sourceMappingURL=index.js.map