import Row from "@components/Row";
import { GasStationAPIRespond } from "@interfaces/gas-station.interface";
import styles from "@styles/Dashboard.module.scss";

export default function Dashboard({ ...gasData }: GasStationAPIRespond) {
  return (
    <div className={styles.container}>
      <h2>Overview</h2>
      <h4 className={styles.newBlock} key={gasData.blockNum}>
        New Block
      </h4>
      <span>
        Current block number: &nbsp;
        <a
          href={`https://etherscan.io/block/${gasData.blockNum}`}
          target="_blank"
          rel="noreferrer"
        >
          {gasData.blockNum}
        </a>
      </span>
      <span>Block time: ~ {gasData.block_time.toFixed(0)} seconds</span>
      <Row title="Fastest">
        Cost: {gasData.fastest / 10} Gwei - Estimated time:&nbsp;
        {gasData.fastestWait} seconds
      </Row>
      <Row title="Fast">
        Cost: {gasData.fast / 10} Gwei - Estimated time:&nbsp;
        {gasData.fastWait} seconds
      </Row>
      <Row title="Average">
        Cost: {gasData.average / 10} Gwei - Estimated time:&nbsp;
        {gasData.avgWait} seconds
      </Row>
      <Row title="Safe Low">
        Cost: {gasData.safeLow / 10} Gwei - Estimated time:&nbsp;
        {gasData.safeLowWait} seconds
      </Row>
    </div>
  );
}
