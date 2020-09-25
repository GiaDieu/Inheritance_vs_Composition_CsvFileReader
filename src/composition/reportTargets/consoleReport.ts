import { OutputTarget } from "../Summary";

export class consoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
