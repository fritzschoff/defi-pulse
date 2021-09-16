import { ReactNode } from "react";
import styles from "@styles/Row.module.scss";

interface Row {
  title: string;
  children: ReactNode;
}

export default function Row({ title, children }: Row) {
  return (
    <>
      <h4>{title}</h4>
      <div className={styles.row}>{children}</div>
    </>
  );
}
