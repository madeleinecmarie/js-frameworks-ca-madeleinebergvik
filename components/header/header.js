import styles from "../../styles/Home.module.css";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <div>
      <header className={styles.bgd}>
        <Nav />
      </header>
    </div>
  );
}
