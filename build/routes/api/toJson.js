"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const toJson = express_1.default.Router();
//let filePath: string = '.../users.csv'
//const csv=require('csvtojson')
function readFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs_1.promises.readFile(filePath);
            console.log(data.toString());
        }
        catch (error) {
            console.error(`Got an error trying to read the file: ${error.message}`);
        }
    });
}
toJson.get('/', (req, res) => {
    readFile('./sample.txt');
    console.log('Directroy ==== :' + __dirname);
    // console.log("File ==== :"+ filePath)
    res.send(' JSon Data ');
});
exports.default = toJson;
