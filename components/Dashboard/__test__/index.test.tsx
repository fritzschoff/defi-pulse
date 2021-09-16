import { GasStationAPIResponse } from "@interfaces/gas-station.interface";
import { render, screen } from "@testing-library/react";
import Dashboard from "..";

describe("Dashboard", () => {
  const mockGasData: GasStationAPIResponse = {
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

  it("should render the link to etherscan", () => {
    render(<Dashboard {...mockGasData} />);
    const link = screen.getByText(mockGasData.blockNum.toString());
    expect(link.hasAttribute("href")).toBe(true);
    expect(link.getAttribute("href")).toBe(
      `https://etherscan.io/block/${mockGasData.blockNum}`
    );
  });
});
