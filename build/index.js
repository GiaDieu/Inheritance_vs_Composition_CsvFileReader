"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./composition/MatchReader");
var Summary_1 = require("./composition/Summary");
//create an Object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
//create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   // new consoleReport(),
//   new HtmlReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildandPrintReport(matchReader.matches);
