"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var consoleReport_1 = require("./reportTargets/consoleReport");
var Summary = /** @class */ (function () {
    function Summary(Analyzer, OutputTarget) {
        this.Analyzer = Analyzer;
        this.OutputTarget = OutputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new consoleReport_1.consoleReport());
    };
    Summary.prototype.buildandPrintReport = function (matches) {
        var output = this.Analyzer.run(matches);
        this.OutputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
