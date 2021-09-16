import Header from "@components/Header";
import { GasStationAPIRespond } from "@interfaces/gas-station.interface";
import { render, screen } from "@testing-library/react";
import Dashboard from "..";

describe("Dashboard", () => {
  const mockGasData: GasStationAPIRespond = {
    average: 3,
    avgWait: 3,
    blockNum: 1337,
    block_time: 12,
    fast: 2,
    fastWait: 2,
    fastest: 1,
    fastestWait: 1,
    safeLow: 4,
    safeLowWait: 4,
    gasPriceRange: {},
  };

  it("should render Dashboard", () => {
    render(<Dashboard {...mockGasData} />);
  });

  it("should render four Row components", () => {
    const { container } = render(<Dashboard {...mockGasData} />);
    const rows = container.getElementsByClassName("row");
    expect(rows.length).toBe(4);
  });
});
