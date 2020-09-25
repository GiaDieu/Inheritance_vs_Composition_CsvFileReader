import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./composition/Summary";

//create an Object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");

//create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   // new consoleReport(),
//   new HtmlReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildandPrintReport(matchReader.matches);
