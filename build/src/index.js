"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("./Types");
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var ManUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === Types_1.MatchResult.HomeWin) {
        ManUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === Types_1.MatchResult.AwayWin) {
        ManUnitedWins++;
    }
}
console.log("Manchester United Wins " + ManUnitedWins + " games");
