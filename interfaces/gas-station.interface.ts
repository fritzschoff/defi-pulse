export interface GasStationAPIResponse {
  fastest: number;
  fast: number;
  average: number;
  safeLow: number;
  block_time: number;
  blockNum: number;
  safeLowWait: number;
  avgWait: number;
  fastWait: number;
  fastestWait: number;
  gasPriceRange: Record<string, number>;
}
