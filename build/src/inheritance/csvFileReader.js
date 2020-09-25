"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var csvFileReader = /** @class */ (function () {
    function csvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    csvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); })
            .map(this.mapRow); // this step is convert each element into actual Type
    };
    return csvFileReader;
}());
exports.csvFileReader = csvFileReader;
