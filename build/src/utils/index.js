"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateStringToDate = dateString.split("/");
    var date = dateStringToDate.map(function (value) {
        return parseInt(value);
    });
    return new Date(date[2], date[1] - 1, date[0]);
};
