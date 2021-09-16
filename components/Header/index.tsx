import styles from "@styles/Header.module.scss";

interface HeaderProps {
  automaticRefetch: (value: boolean) => void;
}

export default function Header({ automaticRefetch }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>See the latest gas prices</h1>
      <label htmlFor="automaticRefetch">
        Automatic refetch new blocks?
        <input
          id="automaticRefetch"
          name="automaticRefetch"
          type="checkbox"
          onChange={(e) => automaticRefetch(e.target.checked)}
        />
      </label>
    </header>
  );
}
