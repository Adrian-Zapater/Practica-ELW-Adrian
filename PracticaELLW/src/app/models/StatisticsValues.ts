import { StatisticsValue } from "./StatisticsValue";

export interface StatisticsValues {
  count: number;
  next: string;
  previous: string;
  results: StatisticsValue[];
}
