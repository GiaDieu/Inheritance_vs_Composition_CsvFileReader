import { MatchData } from "../Types";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { consoleReport } from "./reportTargets/consoleReport";
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new consoleReport());
  }
  constructor(public Analyzer: Analyzer, public OutputTarget: OutputTarget) {}

  buildandPrintReport(matches: MatchData[]): void {
    const output = this.Analyzer.run(matches);
    this.OutputTarget.print(output);
  }
}
