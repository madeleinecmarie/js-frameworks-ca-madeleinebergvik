import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Nav() {
  const { data: session } = useSession();

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          {session ? (
            <div>
              <li>
                <Link href="/admin">Admin</Link>
              </li>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
          ) : (
            <button className={styles.btn} onClick={() => signIn()}>
              Sign in
            </button>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
