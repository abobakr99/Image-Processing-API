"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images = express_1.default.Router();
images.get('/', (req, res) => {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    res.send({
        'filename': filename,
        'width': width,
        'height': height
    });
});
exports.default = images;
