import { csvFileReader } from "./csvFileReader";
import { MatchResult } from "../Types";
import { dateStringToDate } from "../utils";

type MatchData = [Date, string, string, number, number, MatchResult, string]; // giving the type for each element

export class MatchReader extends csvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
