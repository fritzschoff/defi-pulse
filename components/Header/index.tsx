import styles from "@styles/Header.module.scss";

interface HeaderProps {
  autoRefetch: (value: boolean) => void;
}

export default function Header({ autoRefetch }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>See the latest gas prices</h1>
      <label htmlFor="autoRefetch">
        Auto Refetching
        <input
          id="autoRefetch"
          name="autoRefetch"
          type="checkbox"
          onChange={(e) => autoRefetch(e.target.checked)}
        />
      </label>
    </header>
  );
}
